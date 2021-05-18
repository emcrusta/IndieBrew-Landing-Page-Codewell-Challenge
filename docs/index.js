const navigation = document.querySelector('.main-nav');
const menuBurger = document.querySelector('.menu-burger');
let menuOpen = false;

const toggleMenu = () => {
	console.log(navigation.classList);
	if (!menuOpen) {
		navigation.classList.add('open');
		menuBurger.classList.add('open');
		navigation.addEventListener('click', toggleMenu);
		menuOpen = true;
	} else {
		navigation.classList.remove('open');
		menuBurger.classList.remove('open');
		navigation.removeEventListener('click', toggleMenu);
		menuOpen = false;
	}
};

const closeMenu = () => {
	if (menuOpen) {
		if (
			document.body.scrollTop > 400 ||
			document.documentElement.scrollTop > 400
		) {
			toggleMenu();
		}
	}
};

menuBurger.addEventListener('click', toggleMenu);
window.onscroll = function () {
	closeMenu();
};
