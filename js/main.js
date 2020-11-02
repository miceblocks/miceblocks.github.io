/*========== Loading screen ==========*/
$(window).on('load', function() {
    $(".se-pre-con").fadeOut("slow");  
});

$(".theme-link").click(function() {
    $('.se-pre-con').show().delay(100).fadeOut( "slow" );
});

/*========== Load popover ==========*/

$(window).on('load', function() {
    $('[data-toggle="tooltip"]').tooltip();
});

/*========== HTML includes ==========*/


$(window).on('load', function() {
    $('#footer').load("html/footer.html");
});

/*========== Logo scroll transition ==========*/

/* $(document).scroll(function() {
    $('#miceblocks-logo').css({width: $(this).scrollTop() > 0 ? "40%" :"80%"});
}); */

