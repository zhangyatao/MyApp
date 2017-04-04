package cn.mldn.lxh.mvcdemo.dao.proxy;

import cn.mldn.lxh.mvcdemo.dao.IUserDAO;
import cn.mldn.lxh.mvcdemo.dao.impl.UserDAOImpl;
import cn.mldn.lxh.mvcdemo.dbc.DatabaseConnection;
import cn.mldn.lxh.mvcdemo.vo.User;

public class UserDAOProxy implements IUserDAO{
	private DatabaseConnection dbc = null;
	private IUserDAO dao = null;
	public UserDAOProxy(){
		try {
			this.dbc = new DatabaseConnection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.dao = new UserDAOImpl(this.dbc.getConnection());
	}
	
	public boolean findLogin(User user) throws Exception{
		boolean flag = false;
		flag = this.dao.findLogin(user);
		return flag;
	}

}
