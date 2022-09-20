import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import $ from "jquery";
import "slick-carousel";


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

const mainElement = document.documentElement;
const element = mainElement.clientWidth;
const innerExplore = document.querySelector(".explore__inner");
const secondBlock = document.querySelector(".explore__second-block");
const mediaExplore = document.querySelector(".media-explore");


if (element < 1165) {
	const over = innerExplore.innerHTML(`
<div class="explore__media media-explore">
						<div class="media-explore__info">
							<h4 class="media-explore__title">32k+</h4>
							<p class="media-explore__text">Artworks</p>
						</div>
						<div class="media-explore__info">
							<h4 class="media-explore__title">20k+</h4>
							<p class="media-explore__text">Auctions</p>
						</div>
						<div class="media-explore__info">
							<h4 class="media-explore__title">12k+</h4>
							<p class="media-explore__text">Creators</p>
						</div>
					</div>
				</div>
				<div class="explore__second-block">
					<div class="explore__current-bid current-bid">
						<div class="current-bid__box">
							<p class="current-bid__subtitle">Current Bid</p>
							<h5 class="current-bid__title">0.99ETH</h5>
						</div>
						<div class="current-bid__box">
							<p class="current-bid__subtitle">Ends in</p>
							<h5 class="current-bid__title">25 hrs</h5>
						</div>
					</div>
					<div class="explore__start-bid start-bid">
						<div class="start-bid__box">
							<h6 class="start-bid__title">Artist</h6>
							<p class="start-bid__text">@wzard</p>
						</div>
						<button class="start-bid__btn">Start Bid</button>
					</div>
				</div>
`);

}




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

//---------- SLIDERS ----------//

/*
$('.menu').on('click', function () {
	$('.header__list').toggleClass('header__list--active')
});
*/
/*	document.getElementById("a1").innerHTML = "All";*/
