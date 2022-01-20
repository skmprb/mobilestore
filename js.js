const myslide= document.querySelectorAll('.myslider'),
dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide,8000);

function autoslide(){
	counter +=1;
	slidefun(counter);
}

function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();

}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

function resetTimer(){
	clearInterval(timer);
	timer = setInterval(autoslide,8000);
}

function slidefun(n){
	let i;
	for(i=0;i<myslide.length; i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++){
		dot[i].classList.remove('active');
	}
	if(n > myslide.length){
		counter = 1;
	}
	if(n<1){
		counter = myslide.length;

	}
	myslide[counter -1].style.display = "block";
	dot[counter -1].classList.add('active')
}



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

const overlay = document.querySelectorById('overlay')

openModalButtons.forEach(button => {
	button.addEventListener("click",() =>{
		const modal = document.querySelector(button.dataset.modal.Target)
		openModal(modal)
	})
})

closeModalButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	if(modal == null) return
		modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModel(modal){
	if(modal == null) return
		modal.classList.remove('active')
	overlay.classList.remove('active')
}