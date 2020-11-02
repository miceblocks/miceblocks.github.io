/*========== Loading screen ==========*/
$(window).on('load', function() {
    $(".se-pre-con").fadeOut("slow");  
});

/*========== Load popover ==========*/

$(window).on('load', function() {
    $('[data-toggle="tooltip"]').tooltip();
});

/*========== HTML includes ==========*/

$(window).on('load', function() {
    $('#footer').load("html/footer.html");
});
