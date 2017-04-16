define(function(require, exports, module) {
	
	module.exports = utilBusiness();
});
function utilBusiness(){
	return {
		getLoaction:function(){
			
		},
		_query_data: function(method, param, callback) {
//			Util.CommModule_loading("加载中");
			Rose.ajax.postJson(srvMap.get(method), param, function(json, status) {
//				Util.CommModule_unloading();	
				if (status) {
					if (callback) {
						callback(json);
					}
				} else {
//					Util.messagerAlert(json.retMessage || "查询出错，联系维护人员");
				}
			});
		},
		
	}
	
	
}