/**
 * Created by NoControl on 2018/4/23.
 */
$(function() {
    var fName = "";
    start()



    //项目根路径
    //var basePath = $("#txtRootPath").val();
    $("#Keyword").focus(function (e){
        queryEnterprises();
    });
    $("#Keyword").keyup(function (e){
        fName = "";
        queryEnterprises();
    });
    $("#Keyword").blur(function (e){
        $("#scztDiv").slideUp();
    });
    $("#scztSelect").click(function (e){
        var myselect=document.getElementById("scztSelect");
        var index=myselect.selectedIndex ;
        fName =myselect.options[index].text;
        $("#Keyword").val(fName);
        $("#scztDiv").slideUp();
    });

    $("#commitName").click(function () {
        start()
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

function start() {
    var basePath = $("#txtRootPath").val();
    var sc = $("#Keyword").val();
    var content="";
    $.ajax({
        url:basePath + "/EntSearchEngine/getEntList"
        ,method:"post"
        ,dataType: "JSON"
        //,contentType:"application/x-www-form-urlencoded"
        //参数
        ,data: {
            solrkey: 'taxpayer_name',
            solrvalue: sc
        }
        ,success: function(data) {
            //遍历返回的JsonArray
            //console.log(data.rows);
            if(data != null){
                var temp = data;
                $.each(temp,function(index,temp){
                    content += "<li class='col-xs-10' style='list-style-type:none; padding-bottom: 20px'><div class='row'><a href='./views/enterpriseInfo.jsp?FID="+temp['id']+"'>"+temp['taxpayer_name']+"</a></div>"+
                        "<div class='row'><div class='col-xs-5'>法人："+temp['legal_representative']+"</div><div class='col-xs-5'>案件性质："+temp['case_nature']+"</div></div>"+
                        "<div class='row'><div class='col-xs-5'> 发布时间："+temp['bt_time']+"</div></div></li>";
                });
                //动态将li 写入ul
                document.getElementById("searchList").innerHTML=content;
            }
        }
    });
}