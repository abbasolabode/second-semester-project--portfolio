'use strict';
 const menu = document.getElementById("nav-bar"); //Hidden
 const openMenuBtn = document.getElementById("ham-menu"); //open button
 const closeMenuBtn = document.getElementById("close-btn"); //close button

//Open menu functionality
const displayMenuLogicFn = function (){
	const toggleMenu = () => {
		menu.classList.toggle("hidden");
	};

	// Attach the same toggle function to both buttons
	openMenuBtn.addEventListener("click", toggleMenu);
	closeMenuBtn.addEventListener("click", toggleMenu);
};
displayMenuLogicFn();

/* 
const displayMenu = function (){
    menu.classList.toggle('hidden');
};
openMenuBtn.addEventListener('click', displayMenu);


const closeMenu = function (){
    if(!menu.classList.contains('hidden')){
        menu.classList.add("hidden");
    };
};
closeMenuBtn.addEventListener('click', closeMenu); */