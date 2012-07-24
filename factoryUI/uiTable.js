
var uiTable = function(_args) {
	_args = _args || {};
	  	
	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
	API.data = [
		{title:'ROW 1', hasChild:true },
		{title:'ROW 2', hasChild:true },
		{title:'ROW 3', hasChild:true },
		{title:'ROW 4', hasChild:true },
		{title:'ROW 5', hasChild:true },
		{title:'ROW 6', hasChild:true },
		{title:'ROW 7', hasChild:true }
	];
  
  
	var topView = Ti.UI.createView({});
	
	var tv = Titanium.UI.createTableView({
		data:API.data
	});
	
	// create table view event listener
	tv.addEventListener('click', function(e)
	{
		var newWindow = Ti.UI.createWindow({ backgroundColor: '#ccc'});
		var closeButton = Ti.UI.createButton({ title:'close', width:100, height: 30, top: 30});
		newWindow.add( closeButton );
		closeButton.addEventListener('click', function(e){
			newWindow.close();
		});
		newWindow.open({  transition: Ti.UI.iPhone.AnimationStyle.CURL_UP });
		
	});//end click
	
	topView.add( tv );
 
    API.add(topView);
  
    return API;
}; //end uiTable

module.exports = uiTable;
  


