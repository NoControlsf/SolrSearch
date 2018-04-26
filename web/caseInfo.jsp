<%--
  Created by IntelliJ IDEA.
  User: NoControl
  Date: 2018/4/26
  Time: 10:20
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
    <script src="<%=request.getContextPath()%>/js/jquery-1.11.0.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/bootstrap.min.js"></script>
    <script src="<%=request.getContextPath()%>/js/layer.js"></script>
    <title>caseInfo</title>
</head>
<body>
<div class="container">
    <div class="row">
        <h2>重大税收违法案件信息</h2>
    </div>
    <div>
        <table id="case_info" data-toggle="table">
            <tr>
                <td width="230" align="center" bgcolor="#e6f4fc" class="blue12_24">纳税人名称</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[纳税人名称]>begin-->无锡滨溪纺织有限公司<!--<$[纳税人名称]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">纳税人识别号</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[纳税人识别号]>begin-->91320211MA1MB2EW57<!--<$[纳税人识别号]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">组织机构代码</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[组织机构代码]>begin-->MA1MB2EW5<!--<$[组织机构代码]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">注册地址</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[注册地址]>begin-->江苏省无锡市滨湖区周新苑280<!--<$[注册地址]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">法定代表人或者负责人姓名、性别、证件名称及号码</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[法定代表人或者负责人姓名]>begin-->徐加家<!--<$[法定代表人或者负责人姓名]>end-->、男、<!--<$[法定代表人或者负责人证件名称]>begin-->身份证<!--<$[法定代表人或者负责人证件名称]>end-->：<!--<$[法定代表人或者负责人证件号码]>begin-->513021********0332<!--<$[法定代表人或者负责人证件号码]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">负有直接责任的财务负责人姓名、性别、证件名称及号码</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[负有直接责任的财务负责人信息]>begin--><!--<$[负有直接责任的财务负责人信息]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">负有直接责任的中介机构信息及其从业人员信息</td>
                <td align="center" bgcolor="#FFFFFF"><!--<$[负有直接责任的中介机构信息]>begin--><!--<$[负有直接责任的中介机构信息]>end--></td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">案件性质</td>
                <td align="center" bgcolor="#FFFFFF">虚开增值税专用发票或者虚开用于骗取出口退税、抵扣税款的其他发票</td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">主要违法事实</td>
                <td align="center" bgcolor="#FFFFFF">    经江苏省无锡市国家税务局稽查局检查，发现其在2017年4月10日至2017年7月31日期间，主要存在以下问题：对外虚开增值税销项发票111份，金额936.69万元，税额159.24万元。</td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e6f4fc" class="blue12_24">相关法律依据及税务处理处罚情况</td>
                <td align="center" bgcolor="#FFFFFF">依照《中华人民共和国税收征收管理法》等相关法律法规的有关规定，依法移送司法机关。</td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
