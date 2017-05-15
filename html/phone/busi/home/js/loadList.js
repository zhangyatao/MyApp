define(function(require, exports, module) {
	var util = require("util");
	//获取首页轮播图片
	srvMap.add('getCarousal', '../phone/busidata/home/getCarousal.json', '');
	//获取首页热门贷款产品列表
	srvMap.add('largeCreditList', '../phone/busidata/home/largeCreditList.json', ''); 
	srvMap.add('fastCreditList', '../phone/busidata/home/fastCreditList.json', '');
	
	module.exports = loadListBusiness(util);
});
function loadListBusiness(util){
	return {
		init:function(){
			var self = this;
			 app = new Vue({
				el:"#contains",
				data:{
					headCarousel:[],
					largeCreditList:[]
				},
				mounted: function () {
					var _this = this;
					this.cartView();
				},
				methods:{
					cartView:function(){
						var param = "";
						this.$http.get(srvMap.get("largeCreditList"),param).then(function(response){
							var res = JSON.parse(response.data);
							this.largeCreditList = res.data;
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

			
		}
	};
}