// document.cookie = "safeCookie1=foo; SameSite=Lax"; 
// document.cookie = "safeCookie2=foo"; 
// document.cookie = "crossCookie=bar; SameSite=None; Secure";
// header 
$('.main_index .header').load('./common/header.html .header>.inner');
$('.sub_index .header_sub').load('../common/header.html .header_sub>.inner');
$('.main_index footer').load('./common/footer.html footer>.inner_c');
$('.sub_index footer').load('../common/footer.html footer>.inner_c');

// scroll 
let pos = {y:0, status: true};

window.addEventListener('scroll', function() {
	pos.y = window.pageYOffset;
	pos.status = (pos.y > 20) ? true : false;
	
	// console.log(window.scrollY, pos.y)
	if(pos.status) {
		$('header').addClass('header_sub on');
		$('header').css('height', '75px');
	} else {
		$('.main_index header').removeClass('header_sub');
		$('header').removeClass('on');
		$('header').css('height', '100px');
	}
})

// header menu btn open
function menuClick(_this) {
	const open = $('.header_open_wrap');

	$('body').toggleClass('hide');
	$(_this).toggleClass('active');
	
	if($('body').hasClass('hide')) {
		$('.header').addClass('header_sub');
		open.addClass('open');
	} else {
		// 이슈 - header가 상단에 있을 때
		if(!pos.status) {
			$('.header').removeClass('header_sub');
		}
		open.removeClass('open');
	}
}

// header_open
// function ham() {
// 	let open = $('.header_open_wrap');
// 	$('header .menu_btn').on('click', function(e) {
// 		e.preventDefault();
// 		$(this).toggleClass('active');
// 		$('body').toggleClass('hide');
// 		// $('.header_open_wrap').css('opacity', '1');
		
// 		console.log($('body').hasClass('hide'));
// 		if($('body').hasClass('hide')) {
// 			$('.header').addClass('header_sub');
// 			open.addClass('open');
// 		} else {
// 			if(!pos.status) {
// 				$('.header').removeClass('header_sub');
// 			}
// 			open.removeClass('open');
// 		}
// 	});
// }



$(document).ready(function() {
	// data-scroll=Onscroll
	const secScroll = document.querySelectorAll('section > [data-scroll=Onscroll]');

	// secScroll.classList.remove('on');
	const io = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				// 화면에 보여짐에 따라 true / false
				entry.target.classList.add('on')
			} else {
				if(window.pageYOffset < entry.target.offsetTop){
					entry.target.classList.remove('on')
				}
			}
		})
		
	})

	secScroll.forEach((el) => {
		io.observe(el);
	})
}) // window ready

// modal_wrap 
const open = $('.modal_wrap');
function modalClick(_this) {
	$('body').addClass('hide');
	open.addClass('open');
	
	// if($('body').hasClass('hide')) {
	// 	$('.close_btn').removeClass('');
	// 	open.addClass('open');
	// } else {
	// 	// 이슈 - header가 상단에 있을 때
	// 	if(!pos.status) {
	// 		$('.header').removeClass('header_sub');
	// 	}
	// 	open.removeClass('open');
	// }
}
function closeClick(_this) {
	const close = $('.modal_wrap');

	$('body').removeClass('hide');
	open.removeClass('open');
}