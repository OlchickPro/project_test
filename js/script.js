$(document).ready(function () {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	var isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if (isIE()) {
		$('body').addClass('ie');
	}
	if (isMobile.any()) {
		$('body').addClass('touch');
	}
	$(".phone_mask").mask("7 (999) 999 99 99", { placeholder: "x" });
//@prepros-append forms.js
//@prepros-append slick.min.js
//@prepros-append sliders.js
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

//Клик вне области
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.block-1__form').toggleClass('active');
	$('.header-menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
$('.header-menu-list').click(function (event) {
	if ($('.header-menu__icon').hasClass('active')) {
		$('.header-menu').toggleClass('active');
		$('.header-menu__icon').toggleClass('active');
		$('.block-1__form').toggleClass('active');
		$('body').toggleClass('lock');
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});


});
//функция проверки данных из формы block-1__form
function validate_form() {
	let valid = true;
	//let myPhone = document.number_form.elements.number.value;
	let mask = $('.phone_mask').val();
	if (mask == "") {
		alert("Пожалуйста введите номер!");
		valid = false;
	}
	return valid;
}





