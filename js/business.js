// business swiper 
var swiper = new Swiper(".businessSwiper", {
	grabCursor: true,
	loop: true,
	loopFillGroupWithBlank: true,
	loopAdditionalSlides: 2, // loop로 만들어지는 슬라이드 비어보이는 현상 방지
	speed: 500,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false // 드래그 후 자동 재생 - false(활성화)
	},
	breakpoints: {
		0: {
			slidesPerView: 1.3,
			slidesPerGroup: 1,
			spaceBetween: 15,
			centeredSlides: true,
		},
		991: {//브라우저가 991보다 클 때
			spaceBetween: 20,
			centeredSlides: false,
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// scroll down 
const downCont = document.querySelector('.business_sec_2_wrap');
$('.scroll_inner').on('click', function() {
	downCont.scrollIntoView({behavior: "smooth", block: "start"});
})