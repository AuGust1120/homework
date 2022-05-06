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

function getAttr(ele, attr) {
    return window.getComputedStyle(ele, null).getPropertyValue(attr);
}

function setAttr(ele, attr, val) {
    ele.style.setProperty(attr, val);
}

function slowToggle(obj, opacity) {
    if (opacity > 0) {
        ele('body').appendChild(obj);
        setAttr(ele('.main'), 'filter', 'blur(50px)')
    }
    clearInterval(obj.timer);
    var times = 30;
    var step = (opacity - parseFloat(getAttr(obj, 'opacity'))) / times;
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
        cover.onclick = function() {
            slowToggle(big, 0);
            slowToggle(cover, 0);
        }
    }
});