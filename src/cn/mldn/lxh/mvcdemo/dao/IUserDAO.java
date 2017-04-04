package cn.mldn.lxh.mvcdemo.dao;

import cn.mldn.lxh.mvcdemo.vo.User;

public interface IUserDAO {
	public boolean findLogin(User user) throws Exception;

}
