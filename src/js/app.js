import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import $ from "jquery";
import "slick-carousel";

//---------- SLIDERS ----------//


/*
$('.menu').on('click', function () {
	$('.header__list').toggleClass('header__list--active')
});
*/


/*	document.getElementById("a1").innerHTML = "All";*/



//--------------- BURGER-MENU ---------------//


function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.menu-header__button', '.menu-header__lines');
	let links = menu.find('.menu-header__link');
	let overlay = menu.find('.menu-header__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('header__menu-active');

		if (menu.hasClass('header__menu-active')) {
			$('body').css('overlow', 'hidden');
		} else {
			$('body').css('overlow', 'visible');
		}
	}
}

burgerMenu('.menu-header');


//--------------CONTENT MORE--------------//
/*
const btn = document.querySelector("#btn");
const more = document.querySelector(".content");

btn.addEventListener("click", () => {
	more.style.display = "flex"
});



btn.addEventListener("click", btnClick);
function btnClick() {
	console.log(content.classList);

	if (content.classList.contains("menu-prices__more")) {
		btn.textContent = "Скрыть элемент";
	} else {
		btn.textContent = "Показать элемент";
	}

	content.classList.toggle("menu-prices__more");
};
*/

