package cn.mldn.lxh.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;

import cn.mldn.lxh.dao.IEmpDAO;
import cn.mldn.lxh.vo.Emp;

public class EmpDAOImpl implements IEmpDAO {
	private Connection conn = null;
	private PreparedStatement pstmt = null;
	public EmpDAOImpl(Connection conn){
		this.conn = conn;
	}

	@Override
	public boolean doCreate(Emp emp) throws Exception {
		boolean flag = false;
		String sql = "INSERT INTO emp (empno,ename,job,hiredate,sal) VALUES(?,?,?,?,?)";
		this.pstmt = this.conn.prepareStatement(sql);
		this.pstmt.setInt(1, emp.getEmpno());
		this.pstmt.setString(2, emp.getEname());
		this.pstmt.setString(3, emp.getJob());
		this.pstmt.setDate(4, new java.sql.Date(emp.getHiredate().getTime()));
		this.pstmt.setFloat(5, emp.getSal());
		if(this.pstmt.executeUpdate() > 0){
			flag = true;
		}
		this.pstmt.close();
		return flag;
	}

	@Override
	public List<Emp> findAll(String keyWord) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Emp findById(int empno) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
