
var uiTemplate = function(_args) {
	_args = _args || {};
  
	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
  	API.title = _args.title || "uiTemplate";

	  
	return API;
}; //end uiTemplate

module.exports = uiTemplate;