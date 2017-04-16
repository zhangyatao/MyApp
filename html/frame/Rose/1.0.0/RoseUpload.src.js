/**
 * 通过 HTTP 请求加载远程数据，底层依赖jQuery的AJAX实现。当前接口实现了对jQuery AJAX接口的进一步封装。
 * @namespace Rose
 * @class ajax
 */
Rose.ajaxUpload = {
    up : function(url, fileid, callback) {
			jQuery.ajaxFileUpload({
	            url: url,
	            secureuri:false,
	            fileElementId:fileid,
	            dataType: 'json',
	            type: 'post',
	            success: function (data, status)
	            {
	            	if(typeof(data)=='string'){
	            		Rose.log(data);
	            		data=eval('('+data+')');
	            	}
	            	callback(data);
	            },
	            error: function (data, status, e)
	            {
		            	if(typeof(data)=='string'){
		            		data=eval('('+data+')');
		            	}
		            	callback(data);
	            }
	        }
	    );
	},
    msg:{}
};





