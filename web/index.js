/**
 * Created by Administrator on 2017/6/14.
 */
$(function() {
    var fEntCode = "";
    var fName = "";

    //项目根路径
    var basePath = $("#txtRootPath").val();
    $("#EntName").focus(function (e){
        queryEnterprises();
    });
    $("#EntName").keyup(function (e){
        fEntCode = "";
        fName = "";
        queryEnterprises();
    });
    $("#EntName").blur(function (e){
        $("#scztDiv").slideUp('slow');
    });
    $("#scztSelect").click(function (e){
        var myselect=document.getElementById("scztSelect");
        var index=myselect.selectedIndex ;
        fEntCode = myselect.options[index].value;
        fName =myselect.options[index].text;
        $("#EntName").val(fName);
        $("#scztDiv").slideUp('slow');
    });

    $("#commitName").click(function () {
        var sc = $("#EntName").val();
        var content="";
        $.ajax({
            url:basePath + "/EntSearchEngine/getEntList"
            ,method:"post"
            ,contentType:"application/x-www-form-urlencoded"
            //参数
            ,data: {sc:sc}
            ,success: function(data) {
                //遍历返回的JsonArray
                console.log(data.rows);
                var temp = data.rows;
                $.each(temp,function(index,temp){
                    content += "<li class='col-xs-10' style='list-style-type:none; padding-bottom: 20px'><div class='row'><a href='./views/enterpriseInfo.jsp?FID="+temp['FID']+"'>"+temp['FENTNAME']+"</a></div>"+
                                "<div class='row'><div class='col-xs-5'>法人："+temp['FLEGALPERSONNAME']+"</div><div class='col-xs-5'>状态："+temp['FREGSTATUS']+"</div></div>"+
                                "<div class='row'><div class='col-xs-5'> 建立时间："+temp['FESTIBLISHTIME']+"</div><div class='col-xs-5'>注册资本："+temp['FREGCAPITAL']+"</div></div></li>";
                });
                //动态将li 写入ul
                document.getElementById("searchList").innerHTML=content;
            }
        });
    });
});

function queryEnterprises() {
    var basePath = $("#txtRootPath").val();
    var content="";
    var  sc= $("#EntName").val();
    //清空之前的模糊匹配信息
    document.getElementById("scztSelect").options.length=0;
    //显示div  设置显示的高度
    // $("#scztDiv").css("display","block");
    $("#scztDiv").slideDown("slow");
    var scztWidth = $('#EntName').width();
    $("#scztSelect").css("width",scztWidth);
    //ajax 开始
    $.ajax({
            type: "POST",
            dataType: "JSON",
            url: basePath +"/EntSearchEngine/EnterpriseInfo",
            //参数
            data: {sc:sc},
            success: function(data){
                //遍历返回的JsonArray
                /*console.log(data.rows);*/
                var temp = data.rows;
                $.each(temp,function(index,temp){
                    content += "<option value="+temp['FID']+">"+temp['FENTNAME']+"</option>";
                });
                //动态将option 写入select
                document.getElementById("scztSelect").innerHTML=content;
            }
        }
    );
}