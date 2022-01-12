// Window Toggle Button After Responsive
$("#toggler").click(function () {
	$("#nav").slideToggle();
});

// Submenu Script for Responsive Design
function menuOpener() {
	if ($(window).width() < 992) {
		$('.menu-item').on('click', function () {
			$(this).siblings().removeClass('active')
			if ($(this).hasClass('active')) {
				$(this).removeClass('active')
			} else if (!$(this).hasClass('active')) {
				$(this).addClass('active')
			}
		})
	} else { }
}
$(window).on('resize', menuOpener)
$(document).ready(menuOpener)

// Formatting Table Script
$(document).ready(function () {
	$(".formatting table").wrap("<div class='table-container'></div>");
})


