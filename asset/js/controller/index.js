define(["text!headerHtml","text!menuHtml","text!concatHtml","text!indexHtml"], function(hs,ms,cs,is){
	function View(){
        /*var data = {"name":"我是标题","content":"首页<br /><a href='#list'>列表页</a>"};
        var template = Handlebars.compile(str);
    		document.getElementById("main").innerHTML = template(data);*/
        $(".head").html(hs);
        $(".content-box").html(is);
        $(".content-box").before(ms);
        $(".content-box").before(cs);
        $(".deploy-left-sidebar").bind("click",function(){
            $(".sidebar-left").css("left",0);
        });
        $(".close-sidebar-left").bind("click",function(){
            $(".sidebar-left").css("left",-270);
        });
        $(".deploy-right-sidebar").bind("click",function(){
            $(".sidebar-right").css("right",-10);
        });
        $(".close-sidebar-right").bind("click",function(){
            $(".sidebar-right").css("right",-280);
        });
        $(".nav-item").bind("click",function(){
            var submenu = $(this).next(".submenu");
            console.log(submenu);
            if(submenu){
                submenu.toggle();//css("display","block");
            }
        });
	}
	return View;
});