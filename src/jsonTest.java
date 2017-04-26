import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import cn.mldn.lxh.testJson.testObj;
import cn.mldn.lxh.vo.Emp;


public class jsonTest extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public jsonTest() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

//		testObj objtest = testobj;
		Map map = request.getParameterMap();
		String userId = request.getParameter("userId");
		String ds = request.getParameter("param");
		JSONObject obj = new JSONObject().fromObject(ds);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json; charset=utf-8");
		String jsonStr = "{\"name\":\"fly\",\"type\":\"虫子\"}";
		Emp emp = new Emp();
		emp.setEname("zyt");
		emp.setJob("BigBoss");
		emp.setSal(100000);
		PrintWriter out = null;
		out = response.getWriter();
		JSONObject  jsonValue = JSONObject.fromObject(emp);  
	    out.write(jsonValue.toString());
	    out.close();
	    
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
		
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
