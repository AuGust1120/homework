$("document").ready(function() {
    $("header ul .menu button").click(function() {
        if ($("header ul .menu button").attr("aria-expanded") == "false") {
            $("header ul .menu button").attr("aria-expanded", "true");
            $("header ul .menu ul").css("display", "flex");
            $("header ul .menu button i").attr("class", "fas fa-times");
            $("header ul .menu ul li").eq(0).css("border-bottom", "1px solid #f3f3f3")
        } else {
            $("header ul .menu button").attr("aria-expanded", "false");
            $("header ul .menu ul").css("display", "none");
            $("header ul .menu button i").attr("class", "fa fa-bars");
        }
    })


    function getmatrix(nowDeg) {
        var values = nowDeg.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var aa = Math.round(180 * Math.asin(a) / Math.PI);
        var bb = Math.round(180 * Math.acos(b) / Math.PI);
        var cc = Math.round(180 * Math.asin(c) / Math.PI);
        var dd = Math.round(180 * Math.acos(d) / Math.PI);
        var deg = 0;
        if (aa == bb || -aa == bb) {
            deg = dd;
        } else if (-aa + bb == 180) {
            deg = 180 + cc;
        } else if (aa + bb == 180) {
            deg = 360 - cc || 360 - dd;
        }
        return deg >= 360 ? 0 : deg;
    }
    $("header ul .menu ul li").click(function(e) {
        let angle = getmatrix($("header ul .menu ul li span").eq($(this).index() - 1).css("transform"));
        $("header ul .menu ul li span").css("transform", "rotate(45deg)");
        if (angle == 45)
            $("header ul .menu ul li span").eq($(this).index() - 1).css("transform", "rotate(-135deg)");
        else
            $("header ul .menu ul li span").eq($(this).index() - 1).css("transform", "rotate(45deg)");
    })

    $("body").bind("mousewheel", function(e) {

        e = e || window.e;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $("header").css("transform", "translateY(0px)");
        } else {
            $("header").css("transform", "translateY(-60px)");
        }
    })

    $(".footer .box .row2 ul li h3").click(function() {
        var angle = getmatrix($(".footer .box .row2 ul li h3 span").eq($(this).index() - 1).css("transform"));
        $(".footer .box .row2 ul li h3 span").css("transform", "rotate(45deg)");
        if (angle == 45) {
            $(".footer .box .row2 ul li h3 span").eq($(this).index() - 1).css("transform", "rotate(-135deg)");
            $(".footer .box .row2 ul .cul1 .content").css("display", "flex");
            $(".footer .box .row2 ul .cul1").css("width", "100%");
            $(".footer .box .row2 ul .cul1").css("padding-bottom", "20px");
            $(".footer .box .row2 ul .cul1").css("border-bottom", "1px solid #a3a3a3")
            $(".footer .box .row2 ul li h3").css("border", "none");
            $(".footer .box .row2 ul li .content ul").css("border", "none");

        } else {
            $(".footer .box .row2 ul li h3 span").eq($(this).index() - 1).css("transform", "rotate(45deg)");
            $(".footer .box .row2 ul .cul1 .content").css("display", "none");
            $(".footer .box .row2 ul .cul1").css("padding-bottom", "00px");
            var h = parseInt($(".footer").css("height")) - parseInt($(".footer .box .row2 ul .cul1 .content").css("height"));
            $(".footer").css("height", "auto");
            location.reload();
        }
    })


})