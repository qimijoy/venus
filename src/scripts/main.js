document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('loading');
});

window.addEventListener('load', () => {
	document.querySelector('.preloader').classList.add('preloader_hidden');
	document.body.classList.remove('loading');
});
