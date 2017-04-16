/*
 * 配置数据和 tpl
 * 0 为本地， 1 为远程
 * base   "/ncrm/pc/"  本地  ,  "/pc/"    测试
 */
window.conf = 0;  //公共变量创建转移至/frame/common.js，公共类加载完后执行
window.base = "/myApp/"; // TODO 暂时解决方案，后续还需添加 /pc/

var srvMap = (function(){
    var srcPref = [base + "busidata/","service?isconvert=true&action="];
    var dataArray = [{ 
        /*-----------此处添加新接口,保持上下顺序一致------------*/
        // 规则校验通用接口0
        "ruleCheckSV": srcPref[conf]+"global/ruleCheckSV.json"
        },
        {
         
        // 规则校验通用接口
		 "ruleCheckSV": srcPref[conf]+"RUL_BASE_CHECK_POINT_RULE"
        }];
    
    return {
        add: function(uid, mockSrc, srvSrc) {
            dataArray[0][uid] = srcPref[conf] + mockSrc;
            dataArray[1][uid] = srcPref[conf] + srvSrc;         
        },
        get: function(uid) {
            return dataArray[conf][uid];
        },
        dataArrays:function(){
            return dataArray[conf];
        }
        
    };
})(jQuery);
/*
 * 配置 seajs 路径 
 */
var timeStamp = '$1?ver=' ;//+ new Date().getTime();
seajs.config({
	// 'map': [
	// 	[/^(.*\.(?:css|js))(.*)$/i, timeStamp]
	// ],
	base: base + "busi",
	preload: [],
	// 设置路径，方便跨目录调用
	paths: {
//		'util': '../phone/common/js/util.js'
			
	},
	// 设置别名，方便调用
	alias: {
		'util': '../../../common/js/util.js',
		
	}
});
/*seajs.use(['./null/frame/lib/handlebars/3.0.3/helpers','common/busiCommon'],function(helper){
});	*/

