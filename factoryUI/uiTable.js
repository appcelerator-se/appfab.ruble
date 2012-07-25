var uiTable = function(_args) {
	_args = _args || {};
	  	
	var API = (_args.displayMode === 'view') ? Ti.UI.createView({}) : Ti.UI.createWindow({});
	API.data = _args.data || [
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
		data:API.data,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	
	/** Leverage callbacks object parameters to populate event listeners for tableview
	 * Available events for TableView are:
	 * click,dblclick,delete,doubletap,dragEnd,dragStart,longclick,longpress,move,pinch,postlayout,scroll,scrollEnd,singletap,swipe
	 * touchcancel,touchend,touchmove,twofingertap
	 */
	if(_args.callbacks){
		for(var item in _args.callbacks){
			Ti.API.info(item);
			tv.addEventListener(item, _args.callbacks[item])
		}
	}
	
	topView.add( tv );
    API.add(topView);
  
    return API;
}; //end uiTable

module.exports = uiTable;