


var uiTwitterTable = function(_args) {
	_args = _args || {};
  	
  	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
  	API.title = _args.title || "uiTwitterTable";
	API.icon = _args.icon || "/KS_nav_ui.png";
	API.parentNav = null;
	
	// Create the tableView and add it to the view.	
	var tableview = Titanium.UI.createTableView({minRowHeight:58});
	API.add(tableview);
		
	function getTweets(screen_name){
		
		// create table view data object
		var data = [];
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator"); //chesskillertips
	
		xhr.onload = function()
		{
			try
			{
				var tweets = eval('('+this.responseText+')');
	
				for (var c=0;c<tweets.length;c++){
	
					var tweet = tweets[c].text;
					var user = tweets[c].user.screen_name;
					var avatar = tweets[c].user.profile_image_url;
					//var created_at = prettyDate(strtotime(tweets[c].created_at));
					var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
	
					var row = Ti.UI.createTableViewRow({hasChild:true,height:'fill',backgroundColor:bgcolor});
	
					// Create a vertical layout view to hold all the info labels and images for each tweet
					var post_view = Ti.UI.createView({
						height:'fill',
						layout:'vertical',
						left:5,
						top:5,
						bottom:5,
						right:5
					});
	
					var av = Ti.UI.createImageView({
							image:avatar,
							left:0,
							top:0,
							height:48,
							width:48
						});
					// Add the avatar image to the view
					post_view.add(av);
	
					var user_label = Ti.UI.createLabel({
						text:user,
						left:54,
						width:120,
						top:-48,
						bottom:2,
						height:16,
						textAlign:'left',
						color:'#444444',
						font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
					});
					// Add the username to the view
					post_view.add(user_label);
					
					var tweet_text = Ti.UI.createLabel({
						text:tweet,
						left:54,
						top:0,
						bottom:2,
						height:'fill',
						width:236,
						textAlign:'left',
						font:{fontSize:14}
					});
					// Add the tweet to the view
					post_view.add(tweet_text);
					// Add the vertical layout view to the row
					row.add(post_view);
					row.className = 'item'+c;
					data[c] = row;
				}
				tableview.setData(data);
			}
			catch(E){
				alert(E);
			}
		};
		// Get the data
		xhr.send();
	}
	
	// Get the tweets for 'twitter_name'
	getTweets(API.twitterName);
		
  	return API;
}; //end uiTwitterTable

module.exports = uiTwitterTable;

