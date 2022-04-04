@@include('modules/functions.js', {})

/*==================== MENU BURGER====================*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (event) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('show-menu');
		document.body.classList.toggle('lock');
	});
}

/*==================== SLIDERS====================*/
const premiumSlider = document.querySelector('.premium__wrapper');
let premiumSwiper = new Swiper(premiumSlider, {
	slidesPerGroup: 2,
	slidesPerView: 2,
	loop: false,
	spaceBetween: 76,
	slideClass: 'premium__item',
	wrapperClass: 'premium__body',
	speed: 1000,
	simulateTouch: false,
	navigation: {
		nextEl: ".block-controls .arrow-right",
		prevEl: ".block-controls .arrow-left",
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991.98: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 2,
		},
	},
});

const expertSlider = document.querySelector('.experts__wrapper');
let expertsSwiper = new Swiper(expertSlider, {
	slidesPerGroup: 2,
	slidesPerView: 4,
	loop: true,
	spaceBetween: 136,
	slideClass: 'experts__item',
	wrapperClass: 'experts__body',
	speed: 1000,
	simulateTouch: false,
	navigation: {
		nextEl: ".block-controls .arrow-right",
		prevEl: ".block-controls .arrow-left",
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
			spaceBetween: 15,
			slidesPerGroup: 1,
		},
		479.98: {
			slidesPerView: 2,
			spaceBetween: 15,
			slidesPerGroup: 1,
		},
		767.98: {
			slidesPerView: 3,
			spaceBetween: 40,
			slidesPerGroup: 1,
		},
		991.98: {
			slidesPerView: 3,
			spaceBetween: 40,
			slidesPerGroup: 1,
		},
		1400: {
			slidesPerView: 4,
		},
	},
});

/*==================== SHOW / HIDE MENU ====================*/
// Блок, который следует показать при скролле
const headerMenu = document.querySelector('.top-header');
// Отслеживаем высоту данного блока
const header = document.querySelector('.header');

window.addEventListener("scroll", scrollPosition);
function scrollPosition(){
	headerNavPosition();
}
function headerNavPosition(){
	/*Позиция элемента от верха страницы В данном случае - это 100px */
	const headerMenuPosition = headerMenu.getBoundingClientRect().top + pageYOffset;
	const headerHeight = header.getBoundingClientRect().height;
	/*Если прокручено больше,чем позиция элемента, т.е. больше 100px добавляем класс fixed */
	if (pageYOffset > headerHeight){
		headerMenu.classList.add('show');
	} else if (pageYOffset < headerHeight || pageYOffset > headerMenuPosition){
		headerMenu.classList.remove('show');
	}
}
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 20;
		sectionId = current.getAttribute('id')
		if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
			document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('current')
		} else{
			document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('current')
		}
	})
}
window.addEventListener('scroll', scrollActive);


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu__link')
function linkAction(){
	if (window.innerWidth <= 991.98) {
		const navMenu = document.querySelector('.menu');
		iconMenu.classList.remove('active');
		menuBody.classList.remove('show-menu');
		document.body.classList.remove('lock');
	}
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top');
	if (this.scrollY >= 600) {
		scrollTop.classList.add('show-scroll');
	}
	else {
		scrollTop.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollTop)


/*==================== VIDEO PLAY ====================*/
const playButton = document.getElementById('play-video');
const videoPreview = document.querySelector('.preview-video');
const video = document.querySelector('.video-block__item');

playButton.addEventListener('click', function(){
	videoPreview.classList.add('hide');
	video.classList.add('show');
})

/*================== MODALS ====================*/

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

function bodyLock(){
	document.body.classList.add('lock');
}
function bodyUnLock(){
	document.body.classList.remove('lock');
}
function closeModal(currentModal){
	currentModal.classList.remove('open-modal');
}
modalButtons.forEach(function(item){
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const modalId = this.dataset.modalButton;
		const modal = document.getElementById(modalId);
		modal.classList.add('open-modal');
		modal.querySelector('.modal__content').addEventListener('click', (e) => {
			e.stopPropagation();
		})
	})
})
modalClosebuttons.forEach(item =>  {
	item.addEventListener('click', function(){
		let currentModal = this.closest('.modal');
		closeModal(currentModal);
	})
})
allModals.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		this.classList.remove('open-modal');
	});
});


/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")
/*=== Add focus ===*/
function addfocus(){
	let parent = this.parentNode;
	parent.classList.add("focus")
}
/*=== Remove focus ===*/
function remfocus(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
/*=== To call function===*/
inputs.forEach(input => {
	input.addEventListener("focus",addfocus)
	input.addEventListener("blur",remfocus)
})

