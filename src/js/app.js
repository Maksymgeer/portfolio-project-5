import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();



import $ from "jquery";
import "slick-carousel";

$(function () {
	$('.auction__inner').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		rightMode: true,
		variableWidth: true
	});
});

$('.collection__inner').slick({
	arrows: true,
	dots: false,
	infinite: true,
	speed: 400,
	slidesToShow: 2,
	rightMode: true,
	variableWidth: true
});

$('.categories__inner').slick({
	arrows: false,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	rightMode: true,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 1500
});

/*
const next = document.querySelector(".slick-next");
const prev = document.querySelector(".slick-prev");

function sliderClick() {
	if (next.addEventListener("click", sliderClick)) {
		prev.style.display = "flex";
	} else {
		prev.style.display = "none";
	}
}
sliderClick();
*/


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

function work() {
	if (element < 1065) {
		const over = innerExplore.innerHTML = `
		<div class="explore__first-block">
		<h1 class="explore__title">Explore, Buy and Sell the <span>Best NFTs!</span></h1>
		<div class="explore__buttons">
			<button class="explore__btn">Explore</button>
			<button class="explore__btn">Create</button>
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
	`;
	}
}
work();