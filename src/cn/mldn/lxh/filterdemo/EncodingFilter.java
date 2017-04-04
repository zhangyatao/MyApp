package cn.mldn.lxh.filterdemo;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;


public class EncodingFilter extends HttpServlet implements Filter {
	private String charSet;

	public void init(FilterConfig config){
		this.charSet = config.getInitParameter("charset");
	}
	public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain) throws IOException, ServletException {
		request.setCharacterEncoding(this.charSet);
	}

}
