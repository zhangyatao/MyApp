<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="index.css">

  </head>
  
  <body>
    This is my JSP page. <br>
    <div class="parent">
    	<div class="children1">我的宽度是固定的</div>
    	<div class="children2">我的宽度是不固定的我的宽度是不固定我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的我的宽度是不固定的的</div>
    </div>
     <div class="parent">
    	<div class="children1">我的宽度是固定的</div>
    	<div class="children2">我的宽度是不固定的</div>
    </div>
     <div class="parent">
    	<div class="children1">我的宽度是固定的</div>
    	<div class="children2">我的宽度是不固定的</div>
    </div>
  </body>
</html>
