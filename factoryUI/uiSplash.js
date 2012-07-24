
var uiSplash = function(_args) {
  	_args = _args || {};
  	
  	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
  	API.title = _args.title || "Splash";
	API.icon = "/KS_nav_ui.png";
	API.parentNav = null;
  	API.win = null;
  	
    var imageView = Titanium.UI.createImageView({
		image:'http://codedog.net/wp-content/uploads/2011/09/appcelerator.png',
		width:261,
		height:178,
		top:20
	});
		
	API.add( imageView );
  	
  	return API;
}; //end uiSplash

module.exports = uiSplash
