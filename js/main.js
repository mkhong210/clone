// main visual swiper
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 0,
	centeredSlides: true,
	effect : 'fade',
	loop: true,
	// touchRatio: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) { // bullets 에 index 번호 삽입
			return `<span class="pNum ${className}">0${index + 1}</span>`;
		},
	},
	autoplay: {
		delay:4000,
		disableOnInteraction: false
	},
});
//swiper-slide-active

// main visual swiper pause 
$('.pause_controll').click(function() {
		if($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.pause_controll .pause').css('display', 'flex');
		$('.pause_controll .play').css('display', 'none');
		swiper.autoplay.start();
	} else {
		$(this).addClass('active');
		$('.pause_controll .pause').css('display', 'none');
		$('.pause_controll .play').css('display', 'block');
		swiper.autoplay.stop();
	}
});

//main video modal wrap 
$('.visual_wrap .visual_modal_wrap').on('click', function() {
	$('.visual_wrap .video_modal_wrap').addClass('')
})

// scroll down 
const downCont = document.querySelector('.main_intro_wrap');
$('.scroll_inner').on('click', function() {
	downCont.scrollIntoView({behavior: "smooth", block: "start"});
})

// main type tab menu
$(".main_type_wrap .tab .item a").on("click", function() {
	const idx = $(this).parent().index() + 1;
	$(this).parent().addClass("on").siblings().removeClass("on");
	$(`.tab_list`).removeClass("on");
	$(`.tab_list#tab_${idx}`).addClass("on");
});

// main type swiper 
var swiper2 = new Swiper(".typeSwiper", {
	breakpoints: {
		0: {	
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		768: { //브라우저가 768보다 클 때
			slidesPerView: 2.2,  
			spaceBetween: 35,
			touchRatio: 1,//드래그 활성화

		},
		991: { //브라우저가 991보다 클 때
			slidesPerView: 'auto',
			spaceBetween: 35,
			touchRatio: 0,//드래그 금지
		},
	},
});