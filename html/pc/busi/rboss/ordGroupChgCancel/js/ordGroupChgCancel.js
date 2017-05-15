define(function(require, exports, module) {
	srvMap.add('qryDelProdAttr', 'rboss/ordGroupChgCancel/delProdAttr.json',''); // 查询可取消套餐变更信息列表
	module.exports = ordGroupChgCancelBusiness();
	
});
function ordGroupChgCancelBusiness(){
	return {
		init:function(){
			var app = new Vue({
				el:"#app",
				data:{ 
					groupInfoList:[]
				},
				mounted: function () {
					var _this = this;
					this.cartView();
				},
				methods:{
					cartView:function(){
						var param = "";
						this.$http.get(srvMap.get("qryDelProdAttr"),param).then(function(response){
							var res = JSON.parse(response.data);
							if(res && res.retCode=="200"){
								this.groupInfoList = res.retObject.groupInfoList;
								//this.calcTotalMoney();
							}
						});
					}
				}
				
			});
		},

		
	}
	
	
}