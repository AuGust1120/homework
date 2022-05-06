var li = document.querySelectorAll("li.m-item");
var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");
var box = document.querySelector("div.m-box");
/*变红*/
function fp1() {
    document.getElementById("p1").style.color = "red";
    alert('0');
}
/*日期*/
function fp2() {
    var a = new Date();
    h1.innerHTML = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate();
    alert('1');
}
/*创建类 */
function fp3() {
    li.classList.add('fn-ative');
    alert('2');
}
/*删除*/
function fp4() {
    ul.removeChild(li[7]);
    alert('3');
}
/*打开淘宝*/
function fp5() {
    window.open('https://www.taobao.com/');
    alert('4');
}
/*创建p9 */
function fp6() {
    var para = document.createElement("li");
    var node = document.createTextNode("p9");
    para.appendChild(node);
    ul.appendChild(para);
    alert('5');
}
/*调宽度 */
function fp7() {
    var width = window.innerWidth;
    box.style.width = width + 'px';
    alert('6');
}
document.getElementById("p1").onclick = fp1;
li[1].onclick = fp2;
li[2].onclick = fp3;
li[3].onclick = fp4;
li[4].onclick = fp5;
li[5].onclick = fp6;
li[6].onclick = fp7;