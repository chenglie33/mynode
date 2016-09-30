/**
 * Created by Administrator on 2016/3/23.
 */
(function($) {
    var imgList = [];
    $.extend({
        preload: function(imgArr, option) {
            var setting = $.extend({
                init: function(loaded, total) {},
                loaded: function(img, loaded, total) {},
                loaded_all: function(loaded, total) {}
            }, option);
            var total = imgArr.length;
            var loaded = 0;

            setting.init(0, total);
            for(var i in imgArr) {
                imgList.push($("<img />")
                        .attr("src", imgArr[i])
                        .load(function() {
                            loaded++;
                            setting.loaded(this, loaded, total);
                            if(loaded == total) {
                                setting.loaded_all(loaded, total);
                            }
                        })
                );
            }

        }
    });
})(jQuery);
$(function() {
    $.preload([
        "img/496338.jpg",
        "img/1148587.jpg",
        "img/1173402.jpg",
        "img/1200379.jpg",
        "img/1200381.jpg",
        "img/1214901.jpg",
        "img/bg_home.gif",
        "img/guangpan1.png",
        "img/guangpan2.png",
        "img/huojian.png",
        "img/jianpan.png",
        "img/jiantou.png",
        "img/maobi1.png",
        "img/mohu.png",
        "img/preload_bg.gif",
        "img/preload_logo.png",
        "img/qiangbi.png",
        "img/qiqiu.png",
        "img/rubbish1.png",
        "img/shou.png",
        "img/yumao.png",
        "img/zhi.png",
        "img/zhong.png"
    ], {
        init: function(loaded, total) {
            $("#navbar-example, #home, #home1, #home2, #home3").hide();
            $("#loadingtext").html("Inhalte werden geladen... bitte warten");
        },
        loaded: function(img, loaded, total) {
            var loader = 245-((loaded/total)*245);
            var prozent = Math.round(loaded/total*100);
            $("#loadingtext").html("正在加载: "+prozent+"%");
            //$("#loadingtext").html("Lade jede Menge Inhalte: "+loaded+"/"+total);
            $("#loadingbar").css({"background-position" : "0px "+loader+"px"});
        },
        loaded_all: function(loaded, total) {
            $("#loadingtext").html("加载完成<br/>welecome");
            $("#preloader").delay(500).fadeOut();
            $("#navbar-example, #home, #home1, #home2, #home3").delay(1000).fadeIn("slow");
            // xmas loader:
            // $("#loadingtext").html("Frohe Weihnachten!");
            // $("#preloader").delay(2500).fadeOut();
            // $("#top, #home, #projects, #design, #technik, #lab, #about, #jobs").delay(3000).fadeIn("slow");
        }
    });

});
