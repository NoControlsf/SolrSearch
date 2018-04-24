<%--
  Created by IntelliJ IDEA.
  User: NoControl
  Date: 2018/4/19
  Time: 10:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="renderer" content="webkit" >
    <!-- Bootstrap -->
    <link type="text/css" href="<%=request.getContextPath()%>/js/bootstrap.min.css" rel="stylesheet"/>
    <link type="text/css" href="<%=request.getContextPath()%>/js/skin/layer.css" rel="stylesheet"/>
    <!--[if lt IE 9]-->
    <%--<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>--%>
    <!--[endif]-->
    <script src="<%=request.getContextPath()%>/js/jquery-2.1.1.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/bootstrap.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/layer.js"></script>
    <title>index</title>
  </head>
  <body>
  <%--系统根目录--%>
  <input id="txtRootPath" type="hidden" value="<%=request.getContextPath()%>"/>
    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4" style="top:150px;">
          <h1>SolrSearchDemo</h1>
        </div>
      </div>
      <div class="row">
      <div class="col-xs-7 col-xs-offset-2" style="top:220px;">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="homepage.jsp" style="color:#000;">全部</a></li>
          <li role="presentation"><a href="#" style="color:#000;">企业名</a></li>
          <li role="presentation"><a href="#" style="color:#000;">法人/股东</a></li>
          <li role="presentation"><a href="#" style="color:#000;">高管</a></li>
          <li role="presentation"><a href="#" style="color:#000;">品牌/产品</a></li>
          <li role="presentation"><a href="#" style="color:#000;">联系方式</a></li>
          <li role="presentation"><a href="#" style="color:#000;">经营范围</a></li>
        </ul>
      </div>
    </div>
      <div class="row">
        <input class="col-xs-6 col-xs-offset-1" id="EntName" style="left:2.5%;top: 235px;height: 40px;width: 600px" onpaste="return false" AUTOCOMPLETE="off"  name="EntName" >
        <div id='scztDiv' style="position:absolute;left:16.7%;top:385px;display:none;z-index:999999;">
          <select id='scztSelect' size="8" style='margin-top:0px;'>
          </select>
        </div>
        <button class="col-xs-2  btn btn-success" style="top: 235px;height: 40px" id="commitName" name="commitName">搜索</button>
      </div>
      <%--<div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          &lt;%&ndash;<button class="btn btn-success" id="colorChange">测试变色</button>
          <div id="main" style="height: 530px;width: 100%;"></div>&ndash;%&gt;
          <ul id="searchList">
          </ul>
        </div>--%>
        <script charset="utf-8" type="text/javascript" language="javascript" src="index.js"></script>
      </div>
  </body>
</html>
