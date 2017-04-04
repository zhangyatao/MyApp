package cn.mldn.lxh.mvcdemo.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import cn.mldn.lxh.mvcdemo.dao.IUserDAO;
import cn.mldn.lxh.mvcdemo.vo.User;

public final class UserDAOImpl implements IUserDAO {
	private Connection conn = null;
	private PreparedStatement pstmt = null;
	public UserDAOImpl(Connection conn){
		this.conn = conn;
	}

	@Override
	public boolean findLogin(User user) throws Exception {
		boolean flag = false;
		String sql = "select username from user where userid=? and password=?";
		this.pstmt = this.conn.prepareStatement(sql);
		this.pstmt.setString(1,user.getUserId());
		this.pstmt.setString(2, user.getPassword());
		ResultSet rs = this.pstmt.executeQuery();
		if(rs.next()){
			user.setName(rs.getString(1));
			flag = true;
		}
		return flag;
	}

}
