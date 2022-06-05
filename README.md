# 项目说明

## 分组：

G362 2020212205051 朱维豪

## 小组分工：

2020212205051朱维豪 一人独立完成

## 项目内容：

### 1.登录注册

登陆注册页面采用平移的动效来切换，通过按钮点击事件来响应触发。通过json本地缓存数据来验证是否注册。

```
//登陆按钮事件
function enter() {
    // 获取用户输入的账号
    let tel = document.getElementById("tel1").value;
    console.log(tel);
    // 获取用户输入的密码
    let pas = document.getElementById("pas").value;
    console.log(pas);
    // 判断本地是否有数据 如果没有数据直接提示未注册
    if (localStorage.length == 0) {
        alert("您还未注册")
    } else {
        let teldata = [] // 创建一个数组   用于存储本地所有已存储的手机号
        let pasdata = [] // 创建一个数组   用于存储本地所有已存储的密码
        let iddata = [] // 创建一个数组   用于存储本地所有已存储的id
            // 循环判断本地是否有次手机号
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            console.log(key);
            // 通过key拿到对应的数据进行判断
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 向数组中添加数据   我们通过下标i的方式添加   这样手机号我密码是对应的   不能通过push添加！！！  不然手机号和密码是乱的
            teldata[i] = keyinfo.tel
            pasdata[i] = keyinfo.pas
            iddata[i] = keyinfo.id
        }
        console.log(teldata);
        console.log(pasdata);
        console.log(iddata);
        // 判断此手机号是否注册
        if (teldata.indexOf(tel) < 0) { // indexof方法用户查看一个数组中是否有某个值，如果没有它会返回-1，有的话他会返回对应的下标
            alert("此账号未注册")
        } else {
            let index = teldata.indexOf(tel) // 返回对应手机号的下标   我们通过下标去判断密码
            if (pasdata[index] != pas) {
                alert("密码错误")
            } else {
                console.log(iddata[index]);
                // 定时器
                window.close();
                window.open("html/index.html");
                alert("登录成功,点击后跳转到首页")
                start();
            }
        }
    }
}
// 注册按钮事件
function affirm() {
    // 获取昵称
    let name = document.getElementById("name").value;
    console.log(name);
    // 获取手机号
    let tel = document.getElementById("tel").value;
    console.log(tel);
    // 获取密码
    let pas = document.getElementById("password").value;
    console.log(pas);
    // 获取确认密码
    let affpas = document.getElementById("affirmPassword").value;
    console.log(affpas);
    // 手机号正则表达式
    let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (localStorage.length == 0) { // 判断本地是否有数据  没有的话判断手机号和密码
        if (pas != affpas) {
            alert("第二次输入的密码不相同")
        } else if (!myreg.test(tel)) {
            alert("手机号格式不对")
        } else {
            // 动态向本地添加数据
            let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
            console.log(dataLength);
            // 创建一个对象用于存储用户输入的数据
            let data = {}
            data.name = name; // 向对象添加昵称
            data.tel = tel // 向对象添加手机号
            data.pas = pas // 添加密码
            data.id = dataLength // 添加用户唯一凭证ID
            let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
            console.log(info);
            // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
            localStorage.setItem("key" + dataLength, info);
            // 获取本地存储所有数据 查看是否存到本地
            console.log(localStorage.valueOf());
            // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
            setTimeout(function() {
                topggleForm();
            }, 2000)
            alert("存储成功,点击后跳转到登录页面")
        }
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            console.log(key);
            // 通过key拿到对应的数据进行判断
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 判断用户输入的信息是否存在
            if (keyinfo.name == name) { // 判断本地存储的数据中是否有相同的昵称
                alert("昵称已存在")
                break;
            } else if (keyinfo.tel == tel) { // 判断本地存储的数据中是否有相同的手机号
                alert("手机号已注册")
                break;
            } else if (pas != affpas) { // 判断两次输入的密码是否相同
                alert("第二次输入的密码不相同")
                break;
            } else if (!myreg.test(tel)) { // 判断手机号的格式
                alert("手机号格式不对")
                break;
            } else {
                // 动态向本地添加数据
                let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
                console.log(dataLength);
                // 创建一个对象用于存储用户输入的数据
                let data = {}
                data.name = name; // 向对象添加昵称
                data.tel = tel // 向对象添加手机号
                data.pas = pas // 添加密码
                data.id = dataLength // 添加用户唯一凭证ID
                let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
                console.log(info);
                // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
                localStorage.setItem("key" + dataLength, info);
                // 获取本地存储所有数据 查看是否存到本地
                console.log(localStorage.valueOf());
                // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
                setTimeout(function() {
                    window.location.href = "index.html"
                }, 2000)
                alert("存储成功,点击后跳转到登录页面")
                break;
            }
        }
    }
};
```

登录注册页面平移动效切换

```
function topggleForm() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}
```

### 2.主页面

#### 1.菜单栏

包含“你好、设计、团队、发展、合作、联系、退出”七项

```
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
    $("header ul .menu ul li").click(function(e) {//检测鼠标点击时间，响应旋转下拉箭头
        let angle = getmatrix($("header ul .menu ul li span").eq($(this).index() - 1).css("transform"));
        $("header ul .menu ul li span").css("transform", "rotate(45deg)");
        if (angle == 45)
            $("header ul .menu ul li span").eq($(this).index() - 1).css("transform", "rotate(-135deg)");
        else
            $("header ul .menu ul li span").eq($(this).index() - 1).css("transform", "rotate(45deg)");
    })

    $("body").bind("mousewheel", function(e) {//检测鼠标滚动事件，显示菜单栏

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
```

点击退出可以关闭当前页面

```
function quit() {
    window.close();
}
```

#### 2.可翻动的书本

翻页动效通过jquery来实现

```
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
```

##### 1.贪吃蛇

贪吃蛇的游戏，通过js来实现，吃到食物体长加一，碰到墙壁游戏结束

```
 var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        var snake = []; //定义一条蛇，画蛇的身体
        var snakeCount = 6; //初始化蛇的长度
        var foodx = 0;
        var foody = 0;
        var togo = 0;

        function drawtable() //画地图的函数
        {
            for (var i = 0; i < 60; i++) //画竖线
            {
                ctx.strokeStyle = "black";
                ctx.beginPath();
                ctx.moveTo(15 * i, 0);
                ctx.lineTo(15 * i, 600);
                ctx.closePath();
                ctx.stroke();
            }
            for (var j = 0; j < 40; j++) //画横线
            {
                ctx.strokeStyle = "black";
                ctx.beginPath();
                ctx.moveTo(0, 15 * j);
                ctx.lineTo(900, 15 * j);
                ctx.closePath();
                ctx.stroke();
            }

            for (var k = 0; k < snakeCount; k++) //画蛇的身体
            {
                ctx.fillStyle = "green";
                if (k == snakeCount - 1) {
                    ctx.fillStyle = "#CCFF99"; //蛇头的颜色与身体区分开
                }
                ctx.fillRect(snake[k].x, snake[k].y, 15, 15); //前两个数是矩形的起始坐标，后两个数是矩形的长宽。

            }
            //绘制食物	
            ctx.fillStyle = "green";
            ctx.fillRect(foodx, foody, 15, 15);
            ctx.fill();

        }


        function start() //定义蛇的坐标
        {
            for (var k = 0; k < snakeCount; k++) {
                snake[k] = {
                    x: k * 15,
                    y: 0
                };

            }
            drawtable();
            addfood(); //在start中调用添加食物函数
        }

        function addfood() {
            foodx = Math.floor(Math.random() * 60) * 15; //随机产生一个0-1之间的数
            foody = Math.floor(Math.random() * 40) * 15;

            for (var k = 0; k < snake; k++) {
                if (foodx == snake[k].x && foody == sanke[k].y) //防止产生的随机食物落在蛇身上
                {
                    addfood();
                }
            }
        }

        function move() {
            switch (togo) {
                case 1:
                    snake.push({
                        x: snake[snakeCount - 1].x - 15,
                        y: snake[snakeCount - 1].y
                    });
                    break; //向左走
                case 2:
                    snake.push({
                        x: snake[snakeCount - 1].x,
                        y: snake[snakeCount - 1].y - 15
                    });
                    break;
                case 3:
                    snake.push({
                        x: snake[snakeCount - 1].x + 15,
                        y: snake[snakeCount - 1].y
                    });
                    break;
                case 4:
                    snake.push({
                        x: snake[snakeCount - 1].x,
                        y: snake[snakeCount - 1].y + 15
                    });
                    break;
                case 5:
                    snake.push({
                        x: snake[snakeCount - 1].x - 15,
                        y: snake[snakeCount - 1].y - 15
                    });
                    break;
                case 6:
                    snake.push({
                        x: snake[snakeCount - 1].x + 15,
                        y: snake[snakeCount - 1].y + 15
                    });
                    break;
                default:
                    snake.push({
                        x: snake[snakeCount - 1].x + 15,
                        y: snake[snakeCount - 1].y
                    });
            }
            snake.shift(); //删除数组第一个元素
            ctx.clearRect(0, 0, 900, 600); //清除画布重新绘制
            isEat();
            isDead();
            drawtable();
        }

        function keydown(e) {
            switch (e.keyCode) {
                case 37:
                    togo = 1;
                    break;
                case 38:
                    togo = 2;
                    break;
                case 39:
                    togo = 3;
                    break;
                case 40:
                    togo = 4;
                    break;
                case 65:
                    togo = 5;
                    break;
                case 68:
                    togo = 6;
                    break;
            }
        }

        function isEat() //吃到食物后长度加1
        {
            if (snake[snakeCount - 1].x == foodx && snake[snakeCount - 1].y == foody) {
                addfood();
                snakeCount++;
                snake.unshift({
                    x: -15,
                    y: -15
                });
            }

        }

        function isDead() {
            if (snake[snakeCount - 1].x > 885 || snake[snakeCount - 1].y > 585 || snake[snakeCount - 1].x < 0 || snake[snakeCount - 1].y < 0) {
                alert("You are dead,GAME OVER!!!");
                window.location.reload();
            }
        }
        document.onkeydown = function(e) {
            keydown(e);
        }
        window.onload = function() //调用函数
            {
                start();
                setInterval(move, 150);
                drawtable();
            }
```

##### 2.别踩白块儿



##### 3.九格数字拼图

八个数字位置随机产生，每一块只能往相邻有空位的位置移动，排成123,456,78的顺序即算完成，并计时

```
var time = 0;
var pause = true;
var set_timer;
var d = new Array(10);
var d_direct = new Array(
    [0], [2, 4], [1, 3, 5], [2, 6], [1, 5, 7], [2, 4, 6, 8], [3, 5, 9], [4, 8], [5, 7, 9], [6, 8]
);
var d_posXY = new Array(
    [0], [0, 0], [150, 0], [300, 0], [0, 150], [150, 150], [300, 150], [0, 300], [150, 300], [300, 300]
);
d[1] = 1;
d[2] = 2;
d[3] = 3;
d[4] = 4;
d[5] = 5;
d[6] = 6;
d[7] = 7;
d[8] = 8;
d[9] = 0;

function move(id) {
    var i = 1;
    for (i = 1; i < 10; ++i) {
        if (d[i] == id)
            break;
    }

    var target_d = 0;
    target_d = whereCanTo(i);

    if (target_d != 0) {
        d[i] = 0;

        d[target_d] = id;
        document.getElementById("d" + id).style.left = d_posXY[target_d][0] + "px";
        document.getElementById("d" + id).style.top = d_posXY[target_d][1] + "px";
    }
    var finish_flag = true;

    for (var k = 1; k < 9; ++k) {
        if (d[k] != k) {
            finish_flag = false;
            break;
        }
    }
    if (finish_flag == true) {
        if (!pause)
            start();
        alert("congratulations!");
    }
}

function whereCanTo(cur_div) {
    var j = 0;
    var move_flag = false;
    for (j = 0; j < d_direct[cur_div].length; ++j) {
        if (d[d_direct[cur_div][j]] == 0) {
            move_flag = true;
            break;
        }
    }
    if (move_flag == true) {
        return d_direct[cur_div][j];
    } else {
        return 0;
    }
}

function timer() {
    time += 1;
    var min = parseInt(time / 60);
    var sec = time % 60;
    document.getElementById("timer").innerHTML = min + "分" + sec + "秒";
}

function start() {//游戏开始暂停键
    if (pause) {
        document.getElementById("start").innerHTML = "暂停";
        pause = false;
        set_timer = setInterval(timer, 1000);
    } else {
        document.getElementById("start").innerHTML = "开始";
        pause = true;
        clearInterval(set_timer);
    }
}

function reset() {
    time = 0;
    random_d();
    if (pause)
        start();
}

function random_d() {
    for (var i = 9; i > 1; --i) {
        var to = parseInt(Math.random() * (i - 1) + 1); //产生随机数，范围为1到i，不能超出范围，因为没这个id的DIV
        if (d[i] != 0) {
            document.getElementById("d" + d[i]).style.left = d_posXY[to][0] + "px";
            document.getElementById("d" + d[i]).style.top = d_posXY[to][1] + "px";
        }
        //把当前的DIV位置设置为随机产生的DIV的位置
        if (d[to] != 0) {
            document.getElementById("d" + d[to]).style.left = d_posXY[i][0] + "px";
            document.getElementById("d" + d[to]).style.top = d_posXY[i][1] + "px";
        }
        //把随机产生的DIV的位置设置为当前的DIV的位置
        var tem = d[to];
        d[to] = d[i];
        d[i] = tem;
        //然后把它们两个的DIV保存的编号对调一下
    }
}

window.onload = function() {
    reset();
}
```

##### 4.弹球打砖

先随机产生游戏难度，可以通过键盘或是鼠标的拖动来控制球拍的左右移动，小球在游戏中碰撞到左右上侧墙和球拍会镜像反射弹回去，碰到下侧墙则算游戏失败，打掉所有砖块即算游戏成功

```
var box = document.getElementById("box");
        var ball = document.getElementById("ball");
        var btn = document.getElementById("btn");
        var slider = document.getElementById("slider")
        var obrick = document.getElementById("brick")
        var brickArr = obrick.getElementsByTagName("div")
        var grade = document.getElementById("grade")
        var rank = grade.children[1]
        var score = grade.children[3]
        var sco = 0;
        var timer;
        var isRunning = false;
        var speedX = rand(3, 12);
        var speedY = -rand(3, 12);
        var num = speedX - speedY;
        console.log(num)
        switch (num) {
            case 6:
            case 7:
            case 8:
                rank.innerHTML = "简单";
                break;
            case 9:
            case 10:
            case 11:
                rank.innerHTML = "一般";
                break;
            case 12:
            case 13:
            case 14:
                rank.innerHTML = "中等";
                break;
            case 15:
            case 16:
            case 17:
                rank.innerHTML = "难"
                break;
            case 18:
            case 19:
            case 20:
                rank.innerHTML = "很难"
                slider.style.width = 100 + "px";
                break;
            case 21:
            case 22:
                rank.innerHTML = "特别难"
                slider.style.width = 80 + "px";
                break;
            case 23:
            case 24:
                rank.innerHTML = "哭了"
                slider.style.width = 60 + "px";
                break;
        }

        //随机生成小球与滑块位置
        var beginGo = rand(100, 500)
        ball.style.left = beginGo + 40 + "px"
        slider.style.left = beginGo + "px"

        //开始按钮点击事件
        btn.onclick = function() {
            btn.style.display = "none";
            isRunning = true;
            clearInterval(timer);
            timer = setInterval(function() {
                //获取小球初始位置
                var ballLeft = ball.offsetLeft;
                var ballTop = ball.offsetTop;

                //获取小球运动之后位置
                var nextleft = ballLeft + speedX;
                var nexttop = ballTop + speedY;

                //水平边界判断，当小球的left值小于容器左边界或者大于容器右边界时，将水平方向速度取反
                if (nextleft <= 0 || nextleft >= box.offsetWidth - ball.offsetWidth - 10) {
                    speedX = -speedX;
                }
                //垂直边界判断，当小球的top值小于容器上边界时，将垂直方向速度取反
                if (nexttop <= 0) {
                    speedY = -speedY;
                }
                //当小球触碰到下边界时，提示“游戏失败”，重新刷新页面
                if (nexttop > box.offsetHeight - ball.offsetHeight) {
                    location.reload();
                    alert("You were dead！")
                }

                //将运动后的位置重新赋值给小球
                ball.style.left = nextleft + "px";
                ball.style.top = nexttop + "px";

                //小球与滑块的碰撞检测
                if (knock(ball, slider)) {
                    speedY = -speedY;
                }

                //小球与方块的碰撞检测
                for (var j = 0; j < brickArr.length; j++) {
                    if (knock(brickArr[j], ball)) {
                        speedY = -speedY
                        obrick.removeChild(brickArr[j]);
                        sco++;
                        score.innerHTML = sco;
                        break;
                    }
                }

                //当容器中方块数量为0时，宣布“游戏胜利”，刷新页面
                if (brickArr.length <= 0) {
                    location.reload();
                    alert("You win!")
                }
            }, 20)
        }

        //鼠标控制滑块
        slider.onmousedown = function(e) {
            var e = e || window.event;
            //获取滑块初始位置
            var offsetX = e.clientX - slider.offsetLeft;
            if (isRunning) {
                document.onmousemove = function(e) {
                    var e = e || window.event;
                    var l = e.clientX - offsetX;
                    if (l <= 0) {
                        l = 0;
                    }
                    if (l >= box.offsetWidth - slider.offsetWidth - 10) {
                        l = box.offsetWidth - slider.offsetWidth - 10;
                    }
                    slider.style.left = l + "px";
                }
            }
        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }

        //按键控制滑块
        document.onkeydown = function(e) {
            var e = e || window.event;
            var code = e.keyCode || e.which;
            var offsetX = slider.offsetLeft;
            if (isRunning) {
                switch (code) {
                    case 37:
                        if (offsetX <= 0) {
                            slider.style.left = 0
                            break;
                        }
                        slider.style.left = offsetX * 4 / 5 + "px";
                        break;
                    case 39:
                        if (offsetX >= box.offsetWidth - slider.offsetWidth - 10) {
                            slider.style.left = box.offsetWidth - slider.offsetWidth;
                            break;
                        }
                        slider.style.left = (box.offsetWidth - slider.offsetWidth - offsetX) / 5 + offsetX + "px";
                        break;
                }
            }

        }
        createBrick(72)
        //容器内创建方块
        function createBrick(n) {
            var oBrick = document.getElementById("brick")
                //在大盒子brick中插入n个div方块，并给予随机颜色
            for (var i = 0; i < n; i++) {
                var node = document.createElement("div");
                node.style.backgroundColor = color();
                oBrick.appendChild(node);
            }
            //获取所有的方块
            var brickArr = obrick.getElementsByTagName("div")
                //根据每个方块当前所在位置，将left与top值赋给方块
            for (var i = 0; i < brickArr.length; i++) {
                brickArr[i].style.left = brickArr[i].offsetLeft + "px";
                brickArr[i].style.top = brickArr[i].offsetTop + "px";
            }
            //将所有方块设置成绝对定位，注意这一步与上一步顺序不能调换
            for (var i = 0; i < brickArr.length; i++) {
                brickArr[i].style.position = "absolute";
            }
        }

        //随机生成颜色
        function color() {
            var result = "#";
            for (var i = 0; i < 3; i++) {
                result += rand(0, 15).toString(16)
                    // 把十进制的数字变成十六进制的字符串:0 1 ...9 a b c d f
            }
            return result;
        }
        //随机数生成
        function rand(n, m) {
            return n + parseInt(Math.random() * (m - n + 1));
        }
        //碰撞检测函数
        function knock(node1, node2) {
            var l1 = node1.offsetLeft;
            var r1 = node1.offsetLeft + node1.offsetWidth;
            var t1 = node1.offsetTop;
            var b1 = node1.offsetTop + node1.offsetHeight;
            var l2 = node2.offsetLeft;
            var r2 = node2.offsetLeft + node2.offsetWidth;
            var t2 = node2.offsetTop;
            var b2 = node2.offsetTop + node2.offsetHeight;
            if (l2 > r1 || r2 < l1 || t2 > b1 || b2 < t1) {
                return false;
            } else {
                return true;
            }
        }
```

#### 3.服务对象

列举了项目的服务对象，字体样式css文件如下

```
.body .row2 {
    display: block;
    height: 69px;
    border-bottom: 1px solid #eaeaea;
    margin: 0 12px;
    padding: 24px 0;
    text-align: center;
    margin-bottom: 40px;
    background-image: url(../img/1-2.jpg);
}

.body .row2 p {
    display: inline-block;
    font-weight: 550;
    font-size: 1.4rem;
}

.body .row2 .user {
    display: inline-flex;
}

.body .row2 .user span {
    display: inline-block;
    margin-left: 24px;
    color: #ffffff;
}

.body .row2 .user span:hover {
    text-decoration: underline;
    cursor: pointer;
}
```

#### 4.项目介绍

介绍了项目内容，字体样式css文件如下

```
.row8 {
    display: block;
    height: 420px;
    border-bottom: 1px solid #eaeaea;
    margin: 0 12px;
    padding: 24px 0;
    text-align: center;
    margin-bottom: 40px;
    background-image: url(../img/ot.png);
    color: rgb(255, 255, 255);
}

.row8 span {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
}

.row8 li {
    font-size: 20px;
}
```

#### 5.图片展示

展示了图片内容，字体样式css文件如下，之举了整行的格式和其中一块为例

```
.body .row3 {
    display: flex;
    flex-direction: row;
    width: 96%;
    height: 500px;
    margin: 0 28px 40px 28px;
}

.body .row3 .first {
    width: 25%;
    height: 100%;
    display: inline-block;
    padding: 0 20px;
}

.body .row3 .first .content {
    width: 100%;
    height: 100%;
    display: inline-block;
    background-image: url(../img/2-1.jpg);
    background-size: 100%;
    color: rgb(0, 0, 0);
    padding: 36px 24px 24px 24px;
}

.body .row3 .first .content div {
    display: block;
}

.body .row3 .first .content div h4 {
    font-weight: 550;
    font-size: 2.1rem;
}

.body .row3 .first .content div p {
    font-size: 1.67rem;
}

.body .row3 .first .content div span {
    font-size: 1.3rem;
    font-weight: 550;
}
```

#### 6.视频播放

播放视频文件，代码如下

```
<embed src="../img/r.mp4" width="1445" height="700" class="video">
```

#### 7.支持服务

列举了支持的服务，字体样式css文件如下

```
.footer {
    width: 100%;
    height: 630px;
    background: #ffffff;
    padding: 40px 30px 20px 30px;
}

.footer .box {
    display: flex;
    width: 100%;
    flex-direction: column;
    list-style: none;
}

.footer .box .row1 {
    width: 100%;
    height: 36px;
    display: block;
}

.footer .box .row2 {
    height: 376.5px;
    display: block;
}

.footer .box .row2 span {
    display: none;
}

.footer .box .row2 ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    height: 100%;
}

.footer .box .row2 ul .cul1 {
    display: flex;
    width: 225px;
    padding-right: 32px;
    flex-direction: column;
}

.footer .box .row2 ul .cul1 h3 {
    margin: 0;
    height: 28.8px;
    font-size: 1.5rem;
    line-height: 28px;
    font-weight: 550;
    padding-bottom: 8px;
}

.footer .box .row2 ul .cul1 .content {
    display: flex;
    flex-direction: column;
}

.footer .box .row2 ul .cul1 .content ul {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #999999;
    color: #000;
}

.footer .box .row2 ul .cul1 .content .third {
    border: none;
}

.footer .box .row2 ul .cul1 .content ul li {
    height: 24.8px;
    font-size: 1.2rem;
    line-height: 24.8px;
}

.footer .box .row2 ul .cul1 .content ul li:hover {
    color: #898ba2;
    cursor: pointer;
}

.footer .box .row2 ul .cul1 .content ul .start {
    height: 36.8px;
    padding: 16px 0 4px 0;
}

.footer .box .row2 ul .cul1 .content ul .end {
    height: 36.8px;
    line-height: 16px;
    padding: 4px 0 16px 0;
}

.footer .box .row2 ul .cul2 {
    display: flex;
    width: 360px;
    padding-left: 64px;
    flex-direction: column;
}

.footer .box .row2 ul .cul2 h4 {
    margin: 0;
    height: 28.8px;
    font-size: 1.5rem;
    line-height: 28px;
    font-weight: 550;
    padding-bottom: 8px;
}

.footer .box .row2 ul .cul2 div ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.footer .box .row2 ul .cul2 div ul li {
    height: 24.8px;
    font-size: 1.2rem;
    line-height: 24.8px;
}

.footer .box .row2 ul .cul2 div ul li:hover {
    color: #898ba2;
    cursor: pointer;
}

.footer .box .row2 ul .cul3 {
    display: flex;
    width: 308.5px;
    padding: 0 32px;
    flex-direction: column;
}

.footer .box .row2 ul .cul3 .content h4 {
    margin: 0;
    height: 28.8px;
    font-size: 1.5rem;
    line-height: 28px;
    font-weight: 550;
    padding-bottom: 8px;
}

.footer .box .row2 ul .cul3 .content ul {
    display: flex;
    flex-direction: column;
}

.footer .box .row2 ul .cul3 .content ul li {
    height: 24.8px;
    font-size: 1.2rem;
    line-height: 24.8px;
}

.footer .box .row2 ul .cul3 .content ul li:hover {
    color: #898ba2;
    cursor: pointer;
}

.footer .box .row2 ul .cul4 {
    display: flex;
    width: 265px;
    padding: 0 32px;
    flex-direction: column;
}

.footer .box .row2 ul .cul4 div h4 {
    margin: 0;
    height: 28.8px;
    font-size: 1.5rem;
    line-height: 28px;
    font-weight: 550;
    padding-bottom: 8px;
}

.footer .box .row2 ul .cul4 div ul {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
}

.footer .box .row2 ul .cul4 div ul li {
    height: 24.8px;
    font-size: 1.2rem;
    line-height: 24.8px;
}

.footer .box .row2 ul .cul4 div ul li:hover {
    color: #898ba2;
    cursor: pointer;
}

.footer .box .row2 ul .cul5 {
    display: flex;
    width: 241px;
    padding-left: 32px;
    flex-direction: column;
}

.footer .box .row2 ul .cul5 .content h4 {
    margin: 0;
    height: 28.8px;
    font-size: 1.5rem;
    line-height: 28px;
    font-weight: 550;
    padding-bottom: 8px;
}

.footer .box .row2 ul .cul5 .content ul {
    display: flex;
    flex-direction: column;
}

.footer .box .row2 ul .cul5 .content ul li {
    height: 24.8px;
    font-size: 1.2rem;
    line-height: 24.8px;
}

.footer .box .row2 ul .cul5 .content ul li:hover {
    color: #898ba2;
    cursor: pointer;
}

.footer .box .row3 {
    height: 97.5px;
    display: block;
}

.footer .box .row3 .content {
    margin: 40px 0 20px 0;
    border: 1px #999999 solid;
    border-left: 0;
    border-right: 0;
}

.footer .box .row3 .content ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
}

.footer .box .row3 .content ul li {
    display: inline-block;
    padding: 8px;
    font-size: 1rem;
    color: #444644;
    letter-spacing: -0.04em;
}

.footer .box .row3 .content ul .start {
    padding: 0 20px 0 0;
    line-height: 36px;
    font-size: 1.3rem;
    font-weight: 550;
    color: #505050;
    letter-spacing: 0;
}

.footer .box .row3 .content ul li img {
    display: inline-block;
    width: 20px;
}

.footer .box .row4 {
    height: 60px;
    display: block;
}

.footer .box .row4 .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
}

.footer .box .row4 .content ul {
    list-style: none;
    height: 100%;
}

.footer .box .row4 .content .left {
    height: 100%;
}

.footer .box .row4 .content .left .nav {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.footer .box .row4 .content .left .nav li {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.footer .box .row4 .content .left .nav .first {
    width: 116px;
    line-height: 60px;
    font-size: 1rem;
    letter-spacing: -0.06em;
}

.footer .box .row4 .content .left .nav .first svg {
    width: 20px;
    margin-right: 10px;
}

.footer .box .row4 .content .left .nav .first i {
    line-height: 60px;
    margin-left: 5px;
}

.footer .box .row4 .content .left .nav .second ul {
    display: flex;
    flex-direction: row;
    padding: 20px 0 20px 40px;
}

.footer .box .row4 .content .left .nav .second ul li img {
    width: 20px;
    margin-right: 8px;
}

.footer .box .row4 .content .right {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    letter-spacing: -0.05em;
}

.footer .box .row4 .content .right span {
    margin: 0 8px;
}

.footer .box .row4 .content .right h5 {
    font-size: 1rem;
    margin: 0;
    line-height: 60px;
    color: #a5a5a7;
}

.footer .box .row4 .content .right ul {
    display: flex;
    flex-direction: row;
}

.footer .box .row4 .content .right ul li {
    line-height: 60px;
    color: #504f51;
}

.footer .box .row4 .content .right ul li:hover {
    color: #99b0cb;
    cursor: pointer;
}

.footer .box .row4 .content .right ul li img {
    width: 25px;
    margin-right: 5px;
    display: inline-block;
}
```

