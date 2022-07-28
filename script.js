const cities = [
	{
		id: 1,
		name: 'Rio de Janeiro',
		img: "url('./img/rj.jpg')"
	},
	{
		id: 2,
		name: 'Buenos Aires',
		img: "url('./img/buenos.jpg')"
	},
	{
		id: 3,
		name: 'Los Angeles',
		img: "url('./img/losa.jpg')"
	},

	{
		id: 4,
		name: 'Tokyo',
		img: "url('./img/tokyo.jpg')"
	}
]

let currentItem = 0;

const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
const nameCity = document.querySelector('.city');


function showCity(c){
	const item = cities[c];
	document.body.style.backgroundImage = item.img;
	nameCity.textContent = item.name;
}


nextBtn.addEventListener('click', function(){
	currentItem++;
	const itemNumber = cities[currentItem];
	if(currentItem > cities.length - 1){
		currentItem = 0;
	}
	showCity(currentItem);
})

prevBtn.addEventListener('click', function(){
	currentItem--;
	const item = cities[currentItem];
	if(currentItem < 0){
		currentItem = cities.length - 1;
	}
	showCity(currentItem);
})