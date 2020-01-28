$(function(){
	$('#mobile-menu')
		.click(function(){
			var src = ($(this).attr('src') == "img/mobile-menu.png")
				if(src){
					$(this).attr("src", "img/close.png");
					$('.mobile-menu-show').css({
						"display": "block",
						"position": "absolute",
						"z-index": 1,
					});
					$('body, html').css('overflow-y', 'hidden')
				} else {
					$(this).attr("src", "img/mobile-menu.png");
					$('.mobile-menu-show').css({
						"display": "none",
					});
					$('body, html').css('overflow-y', 'auto');
				}
			})
});