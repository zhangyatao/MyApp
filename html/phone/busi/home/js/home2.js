define(function(require, exports, module) {
	var util = require("util");
	//获取首页轮播图片
	srvMap.add('getCarousal', '../phone/busidata/home/getCarousal.json', '');
	//获取首页热门贷款产品列表
	srvMap.add('hotLoadProductList', '../phone/busidata/home/hotLoadProductList.json', ''); 
	
	module.exports = homeBusiness(util);
});
function homeBusiness(util){
	return {
		init:function(){
			var self = this;
			 app = new Vue({
				el:"#contains",
				data:{ 
					headCarousel:[],
					hotLoadProductList:[]
				},
				mounted: function () {
					var _this = this;
					this.cartView();
				},
				methods:{
					cartView:function(){
						var param = "";
						this.$http.get(srvMap.get("getCarousal"),param).then(function(response){
							var res = JSON.parse(response.data);
							this.headCarousel = res.data;
							self.moutch();
						},function(response){
							var res = JSON.parse(response.data);
						});
						
						this.$http.get(srvMap.get("getCarousal"),param).then(function(response){
							var res = JSON.parse(response.data);
							this.headCarousel = res.data;
							self.moutch();
						},function(response){
							var res = JSON.parse(response.data);
						});
					}
				}
				
			});
			 
			
			//self.getCarousal();
		},
		moutch:function(){
//			$('#headCarousel').bind('swiperight swiperightup swiperightdown',function(){
//		        $("#headCarousel").carousel('prev');
//		    })
//		    //手势左滑 进入下一个画面
//		    $('#headCarousel').bind('swipeleft swipeleftup swipeleftdown',function(){
//		        $("#headCarousel").carousel('next');
//		    })
//		    $('#headCarousel').hammer().on('swiperight swiperightup swiperightdown', function(){  
//		    	 $("#headCarousel").carousel('prev');
//		    });  
//		    $('#headCarousel').hammer().on('swipeleft swipeleftup swipeleftdown', function(){  
//		    	$("#headCarousel").carousel('next');
//		    }); 
		    $('#headCarousel').hammer().on('swipeleft', function(){
		    	  $(this).carousel('next');
		    });

	    	$('#headCarousel').hammer().on('swiperight', function(){
	    	  $(this).carousel('prev');
	    	 });
			
		}
	};
}