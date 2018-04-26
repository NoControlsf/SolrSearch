/**
 * Created by Administrator on 2017/6/14.
 */
$(function() {
    var fName = "";



    //项目根路径
    var basePath = $("#txtRootPath").val();
    $("#Keyword").focus(function (e){
        queryEnterprises();
    });
    $("#Keyword").keyup(function (e){
        fName = "";
        queryEnterprises();
    });
    $("#Keyword").blur(function (e){
        $("#scztDiv").slideUp('slow');
    });
    $("#scztSelect").click(function (e){
        var myselect=document.getElementById("scztSelect");
        var index=myselect.selectedIndex ;
        fEntCode = myselect.options[index].value;
        fName =myselect.options[index].text;
        $("#Keyword").val(fName);
        $("#scztDiv").slideUp('slow');
    });

    $("#commitName").click(function () {
        var solrvalue = $("#Keyword").val();
        var solrkey = 'taxpayer_name';
        location.href="homepage.jsp?solrkey=" + solrkey + "&solrvalue=" + solrvalue
    });
});

function queryEnterprises() {
    var basePath = $("#txtRootPath").val();
    var content="";
    var  sc= $("#Keyword").val();
    //清空之前的模糊匹配信息
    document.getElementById("scztSelect").options.length=0;
    //显示div  设置显示的高度
    // $("#scztDiv").css("display","block");
    $("#scztDiv").slideDown();
    var scztWidth = $('#Keyword').width();
    $("#scztSelect").css("width",scztWidth);
    //ajax 开始
    $.ajax({
            type: "POST",
            dataType: "JSON",
            url: basePath +"/EntSearchEngine/EnterpriseInfo",
            //参数
            data: {
                solrkey: 'taxpayer_name',
                solrvalue: sc
            },
            success: function(data){
                //遍历返回的JsonArray
                /*console.log(data.rows);*/
                if(data != null){
                    var temp = data;
                    $.each(temp,function(index,temp){
                        content += "<option>"+temp['taxpayer_name']+"</option>";
                    });
                    //动态将option 写入select
                    document.getElementById("scztSelect").innerHTML=content;
                }
            }
        }
    );
}