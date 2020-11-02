/*========== Loading screen ==========*/
$(window).on('load', function() {
    $(".se-pre-con").fadeOut("slow");  
});

<<<<<<< HEAD
$(".theme-link").click(function() {
    $('.se-pre-con').show().delay(100).fadeOut( "slow" );
});

=======
>>>>>>> 092c8561377fc4b29bc5562361af7bc0435d69ce
/*========== Load popover ==========*/

$(window).on('load', function() {
    $('[data-toggle="tooltip"]').tooltip();
});

/*========== HTML includes ==========*/

<<<<<<< HEAD

$(window).on('load', function() {
    $('#footer').load("html/footer.html");
});

/*========== Logo scroll transition ==========*/

/* $(document).scroll(function() {
    $('#miceblocks-logo').css({width: $(this).scrollTop() > 0 ? "40%" :"80%"});
}); */

=======
$(window).on('load', function() {
    $('#footer').load("html/footer.html");
});
>>>>>>> 092c8561377fc4b29bc5562361af7bc0435d69ce
