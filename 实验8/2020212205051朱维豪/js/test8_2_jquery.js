change(1);

function init() {
    $('.pane-button').css('border', '2px #000 solid').removeClass('pane-button-active');
}

function change(a) {
    var $temp = $('<div>' + a + '</div>');
    $temp.css({
        'position': 'absolute',
        'font-size': '50px'
    });
    if (a == 1) {
        $temp.css({
            'top': '50px',
            'left': '50px',
        })
    } else if (a == 2) {
        $temp.css({
            'top': '50px',
            'right': '50px',
        })
    } else if (a == 3) {
        $temp.css({
            'right': '50px',
            'bottom': '50px',
        })
    } else {
        $temp.css({
            'left': '50px',
            'bottom': '50px',
        })
    }
    $('.pane').append($temp);
}
$('.pane-button').click(function() {
    init();
    $(this).addClass('pane-button-active');
    $(this).css('border-bottom', '0');
    $('.pane>div').remove();
    change($(this).html());
})