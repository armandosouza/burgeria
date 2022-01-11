let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

searchBtn.onclick = () => {
	searchBtn.classList.toggle('fa-times');
	searchForm.classList.toggle('active');
	menuBtn.classList.remove('fa-times');
	navbar.classList.remove('active');
}

menuBtn.onclick = () => {
	searchBtn.classList.remove('fa-times');
	searchForm.classList.remove('active');
	menuBtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = () => {
	searchBtn.classList.remove('fa-times');
	searchForm.classList.remove('active');
	menuBtn.classList.remove('fa-times');
	navbar.classList.remove('active');
}