window.addEventListener('DOMContentLoaded', () => {
	//Mobile menu
	const menuButton = document.querySelector('.menu-button'),
		closeMenuButton = document.querySelector('.close-menu'),
		navWrapper = document.querySelector('.navigation-wrapper');

	menuButton.addEventListener('click', () => {
		navWrapper.classList.add('active');
	});

	closeMenuButton.addEventListener('click', () => {
		navWrapper.classList.remove('active');
	});

	//Smooth scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});

	//Reviews slider
	const reviewsSlider = new Swiper('.swiper-reviews', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
