
var uiPaint = function(_args) {
  	_args = _args || {};
	Titanium.Painter = require('ti.paint');  	
  	
  	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
  	var topView = Ti.UI.createView({ backgroundColor: 'green', width:320, height:480});
    
	var painter = Titanium.Painter.createView({
	    	top:10,
			left:10,
			right:10,
			height:350 });
		
	topView.add(painter);
	API.add(topView);	
	  	
  	return API;
}; //end uiPaint

module.exports = uiTemplate;
