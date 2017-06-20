/*When user scrolls past a set point the progress
bars will animate from left to right*/
$(document).ready(function () {
    $(window).scroll(function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 20;
        // set to whatever you want it to be

        if (y_scroll_pos > scroll_pos_test) {
            $(".bar1").animate({
                width: "70%"
            }, 2500);
        }
    });
});
