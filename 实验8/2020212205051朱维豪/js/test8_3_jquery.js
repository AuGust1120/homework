function creLi(n) {
    var t = $('<li>' +
        '    <div>' + n + '</div>' +
        '    <div></div>' +
        '    <div class="del">Delete</div>' +
        '</li>');
    return t;
}
$('button').click(function() {
    $li = $('li:last-child');
    var num = $li[0] != undefined ? parseInt($li.children('div:first-child').html()) : 0;
    $('ul').append(creLi(num + 1));
})
$('ul').on('click', '.del', function() {
    $(this).parent().remove();
})