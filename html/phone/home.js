define(function(require, exports, module) {
	var util = require("util");
	srvMap.add('getCarousal', '../phone/busidata/home/getCarousal.json', ''); // 规则预判校验
	module.exports = homeBusiness(util);
});
function homeBusiness(util){
	return {
		init:function(){
			var self = this;
			self.getCarousal();
		},
		//获取轮播图片
		getCarousal:function(){
			util._query_data("getCarousal","",function(json){
				var len = json.data.length;
				for(var i=0;i< len;i++){
					var conten = '<div class="swiper-slide"><img class="carousTab" src="../../../../images/home/'+json.data[i].imgSrc+'"></div>';
					$('#carousal').append(conten);
				}
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: 5000,//可选选项，自动滑动
					pagination : '.swiper-pagination',
					paginationType : 'fraction',
				})
			});
		},
		
		
	};
	
	
}