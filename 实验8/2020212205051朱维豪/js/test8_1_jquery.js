$('.main>div').click(function() {
    var $big = $(this).clone();
    var $cover = $('<div class="cover"></div>');
    $('body').append($big).append($cover);
    $cover.addClass('cover');
    $big.addClass('big');
    $('.cover').animate({
        'opacity': '.3',
    });
    $('.main').css('filter', 'blur(50px)');
    $big.animate({
        'opacity': 1
    });
    $('.cover').click(function() {
        $big.animate({
            'opacity': 0
        }, function() {
            $big.remove();
        });
        $('.cover').animate({
            'opacity': 0
        }, function() {
            $('.main').css('filter', 'blur(0px)');
            $cover.remove();
        });
    })
})