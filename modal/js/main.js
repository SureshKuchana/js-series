// get the button
const btn = document.querySelector("#btn");
const closeBtn = document.querySelector(".jsModalClose");

btn.addEventListener('click', function(){
	document.body.classList.add('modal-is-open');
})

closeBtn.addEventListener('click', function(){
	document.body.classList.remove('modal-is-open');
})

