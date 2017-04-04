package cn.mldn.lxh.dao;

import java.util.List;

import cn.mldn.lxh.vo.Emp;

public interface IEmpDAO {
	/*���ݿ�����Ӳ���*/
	public boolean doCreate(Emp emp) throws Exception;
	
	/*��ѯȫ��������*/
	public List<Emp> findAll(String keyWord) throws Exception;
	
	/*���ݹ��Ž��в�ѯ*/
	public Emp findById(int empno) throws Exception;

}
