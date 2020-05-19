$(document).ready(function () {
	wSize = $(window).width();
	$("top_and_bottom_grid").css("margin_top", wSize/24 + "px");
	$("top_and_bottom_grid").css("margin_bottom", wSize/24 + "px");
});

$(window).resize(function () {
	wsize = $(window).width();
	$("top_and_bottom_grid").css("margin_top", wSize/24 + "px");
	$("top_and_bottom_grid").css("margin_bottom", wSize/24 + "px");
});
