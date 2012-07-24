var uiWebView = function(_args) {
  	_args = _args || {};
  	
  	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
  	API.title = _args.title || "uiWeb";
	API.icon = "/KS_nav_ui.png";
	API.parentNav = null;
	API.win = null;
    	
	var webView = Ti.UI.createWebView({
		url:'http://www.woot.com',
		top:20,
		bottom:20,
		left:20,
		right:20
	});//end webView
	API.add( webView );
		
  	
  	return API;
}; //end uiWebView

module.exports = uiWebView

