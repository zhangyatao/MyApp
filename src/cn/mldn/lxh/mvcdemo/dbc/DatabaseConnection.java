package cn.mldn.lxh.mvcdemo.dbc;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {
	private static final String dbDriver = "com.mysql.jdbc.Driver";
	private static final String dbUrl = "jdbc:mysql://localhost:3306/mldn?useUnicode=true&amp;characterEncoding=UTF8";
	private static final String dbUser = "root";
	private static final String dbPassword = "1234";
	private Connection conn = null;
	public DatabaseConnection() throws Exception{
		try{
			Class.forName(dbDriver);
			this.conn = DriverManager.getConnection(dbUrl, dbUser, dbPassword);
		}catch(Exception e){
			throw e;
		}
	}
	public Connection getConnection(){
		return this.conn;
	}
	public void cloase() throws Exception {
		if(this.conn != null){
			try{
				this.conn.close();
			} catch(Exception e){
				throw e;
			}
		}
	}

}
