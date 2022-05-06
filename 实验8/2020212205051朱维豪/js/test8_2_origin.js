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

function init() {
    var t = eleList('.pane-button');
    t.forEach(e => {
        setAttr(e, 'border', '2px #000 solid');
        e.classList.remove('pane-button-active');
    })
}

function change(a) {
    var t = creEle('div', 'foo');
    setAttr(t, 'position', 'absolute');
    setAttr(t, 'font-size', '50px');
    t.innerHTML = a;
    if (a == 1) {
        setAttr(t, 'top', '50px');
        setAttr(t, 'left', '50px');
    } else if (a == 2) {
        setAttr(t, 'top', '50px');
        setAttr(t, 'right', '50px');
    } else if (a == 3) {
        setAttr(t, 'bottom', '50px');
        setAttr(t, 'right', '50px');
    } else {
        setAttr(t, 'bottom', '50px');
        setAttr(t, 'left', '50px');
    }
    ele('.pane').appendChild(t);
}
change(1);
eleList('.pane-button').forEach(e => {
    e.onclick = function() {
        init();
        e.classList.add('pane-button-active');
        setAttr(e, 'border-bottom', '0');
        eleList('.pane>div').forEach(e => e.remove());
        change(e.innerHTML);
    }
})