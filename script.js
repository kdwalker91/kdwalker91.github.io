/*When user scrolls past a set point the progress
bars will animate from left to right
$(document).ready(function () {
<<<<<<< HEAD
	$(window).scroll(function () {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 1;
		// set to whatever you want it to be
=======
    $(window).scroll(function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 20;
        // set to whatever you want it to be
>>>>>>> f62cd51de5e6c5af8047821ae8bb4c4385022fa1

        if (y_scroll_pos > scroll_pos_test) {
            $(".bar1").animate({
                width: "70%"
            }, 2500);
        }
    });
});
*/
$(document).ready(function () {
	$(".bars").delay(1500).animate({
		width: "70%"
	}, 1500);
});
