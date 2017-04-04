package cn.mldn.lxh.dao.test;

import cn.mldn.lxh.factory.DAOFactory;
import cn.mldn.lxh.vo.Emp;

public class TestDAO {

	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {
		insert();

	}
	public static void insert() throws Exception{
		Emp emp = null;
		for(int x=0;x<5;x++){
			emp =new Emp();
			emp.setEmpno(1000 + x);
			emp.setEname("LLL" + x);
			emp.setJob("Coder" + x);
			emp.setHiredate(new java.util.Date());
			emp.setSal(1000 + x);
			//DAOFactory.getIEmpDAOInstance().doCreate(emp);
			DAOFactory.getIEmpDAOInstance().doCreate(emp);
		}
				
	}

}
