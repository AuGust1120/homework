function ele(a) {
    return document.querySelector(a);
}

function eleList(a) {
    return document.querySelectorAll(a);
}

function creEle(a, b) {
    var t = document.createElement(a);
    if (b != null) {
        t.className = b;
    }
    return t;
}

function getAttr(ele, attr) {
    return window.getComputedStyle(ele, null).getPropertyValue(attr);
}

function setAttr(ele, attr, val) {
    ele.style.setProperty(attr, val);
}

function creLi(n) {
    var t = creEle('li');
    var t1 = creEle('div');
    t1.innerHTML = n;
    var t2 = creEle('div');
    var t3 = creEle('div', 'del');
    t3.innerHTML = 'Delete';
    t.appendChild(t1);
    t.appendChild(t2);
    t.appendChild(t3);
    return t;
}
ele('button').onclick = function() {
    var li = ele('li:last-child');
    var num = li != null ? parseInt(li.children[0].innerHTML) : 0;
    ele('ul').appendChild(creLi(num + 1));
}
ele('ul').onclick = function(e) {
    var _this = e.target;
    var _class = _this.className;
    if (_class == 'del') {
        _this.parentNode.remove();
    }
}