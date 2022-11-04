console.log("hello world");



const handleSubmit = () => {
	
	alert("The Form Has Been Submitted!")
}

const easterEgg = (event) => {

	alert("Congratulations for being smart enough to find this easter egg")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


cat.addEventListener('mouseover', easterEgg)