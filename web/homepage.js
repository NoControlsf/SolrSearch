/**
 * Created by NoControl on 2018/4/23.
 */
$(function() {
    var fName = "";

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
        alert('a')
        $("#scztDiv").slideUp();
        alert('b')
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

