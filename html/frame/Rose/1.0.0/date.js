/**
 * 日期时间处理工具
 *
 * @namespace Rose
 * @class date
 */
Rose.date = {
	/**
	 * 显示当前对象名称路径
	 * 
	 * @method toString
	 * @return {String} 'Rose.date'
	 */
	toString : function() {
		return 'Rose.date';
	},
	/**
	 * 将小于10数字前加0
	 *
     * @method _zeroCompletion
	 * @param {Number} time 时间
	 * @return {String}
	 */
	_zeroCompletion : function(time) {
		if (time < 10) {
			return '0' + time;
		}
		return time + '';
	},
	/**
	 * 将秒转换为时间hh:mm:ss格式
	 * 
	 * @method secs2Time
	 * @param {Number} secs 秒
	 * @return {String} 格式化时间字符串'00:00:00'
	 */
	secs2Time : function(secs) {
		if (secs < 0) {
			secs = 0;
		}
		secs = parseInt(secs, 10);
		var hours = Math.floor(secs / 3600), mins = Math
				.floor((secs % 3600) / 60), sec = secs % 3600 % 60;
		return this._zeroCompletion(hours) + ':' + this._zeroCompletion(mins)
				+ ':' + this._zeroCompletion(sec);
	},
	/**
	 * 格式化日期时间字符串
	 * 
	 * @method dateTime2str
	 * @param {Date} dt 日期对象
	 * @param {String} fmt 格式化字符串，如：'yyyy-MM-dd hh:mm:ss'
	 * @return {String} 格式化后的日期时间字符串
	 */
	dateTime2str : function(dt, fmt) {
		var z = {
			M : dt.getMonth() + 1,
			d : dt.getDate(),
			h : dt.getHours(),
			m : dt.getMinutes(),
			s : dt.getSeconds()
		};
		fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
			return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1)))
					.slice(-2);
		});
		return fmt.replace(/(y+)/g, function(v) {
			return dt.getFullYear().toString().slice(-v.length);
		});
	},
	/**
	 * 根据日期时间格式获取获取当前日期时间
	 * 
	 * @method dateTimeWrapper
	 * @param {String} fmt 日期时间格式，如："yyyy-MM-dd hh:mm:ss";
	 * @return {String} 格式化后的日期时间字符串
	 */
	dateTimeWrapper : function(fmt) {
		if (arguments[0])
			fmt = arguments[0];
		return this.dateTime2str(new Date(), fmt);
	},
	/**
	 * 获取当前日期时间
	 * 
	 * @method getDatetime
	 * @param {String} fmt [optional,default='yyyy-MM-dd hh:mm:ss'] 日期时间格式。
	 * @return {String} 格式化后的日期时间字符串
	 */
	getDatetime : function(fmt) {
		return this.dateTimeWrapper(fmt || 'yyyy-MM-dd hh:mm:ss');
	},
	/**
	 * 获取当前日期时间+毫秒
	 * 
	 * @method getDatetimes
	 * @param {String} fmt [optional,default='yyyy-MM-dd hh:mm:ss'] 日期时间格式。
	 * @return {String} 格式化后的日期时间字符串
	 */
	getDatetimes : function(fmt) {
		var dt = new Date();
		return this.dateTime2str(dt, fmt || 'yyyy-MM-dd hh:mm:ss') + '.'
				+ dt.getMilliseconds();
	},
	/**
	 * 获取当前日期（年-月-日）
	 * 
	 * @method getDate
	 * @param {String} fmt [optional,default='yyyy-MM-dd'] 日期格式。
	 * @return {String} 格式化后的日期字符串
	 */
	getDate : function(fmt) {
		return this.dateTimeWrapper(fmt || 'yyyy-MM-dd');
	},
	/**
	 * 获取当前时间（时:分:秒）
	 * 
	 * @method getTime
	 * @param {String} fmt [optional,default='hh:mm:ss'] 日期格式。
	 * @return {String} 格式化后的时间字符串
	 */
	getTime : function(fmt) {
		return this.dateTimeWrapper(fmt || 'hh:mm:ss');
	},
    /**
     * 将标准日期时间格式转换为长整形格式
     * @param {String} datetime 为空或 yyyy-MM-dd hh:mm:ss 格式时间
     * @returns {number}
     */
    dateTime2Long : function(datetime){
        if(datetime && typeof datetime === "string"){
            return new Date(datetime.replace(/\-/g,'/')).getTime();
        }
        return new Date().getTime();
    }
};
