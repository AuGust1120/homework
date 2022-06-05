$(function() {
    var pageNum = 0;

    for (var i = 0; i < $('.runPage').length; i++) { //给页面前后顺序编排
        $('.runPage').eq(i).css('z-index', 7 - 2 * i);
        $('.runPage').eq(i).children('div').css('z-index', 7 - 2 * i);
        $('.runPage').eq(i).children('img').css('z-index', 6 - 2 * i);
    };

    $('.nextBtn').bind('click', function() { //给书本编页
        if (pageNum <= 2) {
            runNext(pageNum);
            pageNum++;
        };
        console.log(pageNum);
    });

    function runNext(index) { //翻页
        $('.runPage').eq(index).addClass('runClass');
        zIndexNext(index, $('.runPage').eq(index));
    }

    function zIndexNext(index, element) { //改变书页的前后顺序
        if (index >= 1) {
            element.css('z-index', 3 + 2 * index);
        };
        setTimeout(function() {
            if (index == 0) {
                element.css('z-index', 3 + 2 * index);
            };
            element.children('div').css('z-index', 2 + 2 * index);
            element.children('img').css('z-index', 3 + 2 * index);
        }, 1000); //跟随翻页动效，附带延时效果
    }

    $('.lastBtn').bind('click', function() { //翻前一页
        if (pageNum >= 1) {
            pageNum--;
            runLast(pageNum);
        };
        console.log(pageNum);
    });

    function runLast(index) {
        $('.runPage').eq(index).removeClass('runClass');
        zIndexLast(index, $('.runPage').eq(index));
    }

    function zIndexLast(index, element) {
        if (index == 0) {
            element.css('z-index', 7 - 2 * index);
        };
        setTimeout(function() {
            element.css('z-index', 7 - 2 * index);
            element.children('div').css('z-index', 7 - 2 * index);
            element.children('img').css('z-index', 6 - 2 * index);
        }, 1000); //翻页动效，附带延时效果
    }
});
//图片超链接，点击可以进入游戏
function ele(a) {
    return document.querySelector(a);
}

function eleList(a) {
    return document.querySelectorAll(a);
}

function creEle(a, b) {
    var t = document.createElement(a);
    t.className = b;
    return t;
}

function quit() {
    window.close();
}

function snake() {
    window.open("贪吃蛇.html");
}

function white() {
    window.open("别踩白块.html");
}

function num() {
    window.open("数字拼图.html");
}

function ball() {
    window.open("弹球.html");
}

function setAttr(ele, attr, val) {
    ele.style.setProperty(attr, val);
}

function slowToggle(obj, opacity) {
    //隐藏当前浏览页面，显示下一页面，达到翻页效果
    if (opacity > 0) {
        ele('body').appendChild(obj);
        setAttr(ele('.main'), 'filter', 'blur(50px)')
    }
    clearInterval(obj.timer);
    var step = opacity - parseFloat(getAttr(obj, 'opacity'));
    obj.timer = setInterval(function() {
        setAttr(obj, 'opacity', (parseFloat(getAttr(obj, 'opacity')) + step).toString())
        if (parseFloat(getAttr(obj, 'opacity')) >= opacity && opacity > 0) {
            clearInterval(obj.timer);
        } else if (parseFloat(getAttr(obj, 'opacity')) <= opacity && opacity == 0) {
            clearInterval(obj.timer);
            obj.remove();
            setAttr(ele('.main'), 'filter', 'blur(0px)')
        }
    }, 10);
}
var pane = eleList('.main>div');
pane.forEach(e => {
    e.onclick = function() {
        var big = e.cloneNode(true);
        big.className = 'big';
        var cover = creEle('div', 'cover');
        slowToggle(big, 1);
        slowToggle(cover, 0.3);
        cover.onclick = function() { //翻页之后隐藏之前浏览页面
            slowToggle(big, 0);
            slowToggle(cover, 0);
        }
    }
});