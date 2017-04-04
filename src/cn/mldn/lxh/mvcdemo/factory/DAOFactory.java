package cn.mldn.lxh.mvcdemo.factory;

import cn.mldn.lxh.mvcdemo.dao.IUserDAO;
import cn.mldn.lxh.mvcdemo.dao.proxy.UserDAOProxy;


public class DAOFactory {
	public static IUserDAO getIUserDAOInstance(){
		return  (IUserDAO) new UserDAOProxy();
	}

}
