package cn.mldn.lxh.dao;

import java.util.List;

import cn.mldn.lxh.vo.Emp;

public interface IEmpDAO {
	/*数据库的增加操作*/
	public boolean doCreate(Emp emp) throws Exception;
	
	/*查询全部的数据*/
	public List<Emp> findAll(String keyWord) throws Exception;
	
	/*根据工号进行查询*/
	public Emp findById(int empno) throws Exception;

}
