const navigation = document.querySelector('.main-nav');
const menuBurger = document.querySelector('.menu-burger');
let menuOpen = false;

const toggleMenu = () => {
	console.log(navigation.classList);
	if (!menuOpen) {
		navigation.classList.add('open');
		menuOpen = true;
	} else {
		navigation.classList.remove('open');
		menuOpen = false;
	}
};

menuBurger.addEventListener('click', toggleMenu);
