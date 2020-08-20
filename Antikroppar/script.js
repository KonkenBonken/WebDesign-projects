console.log("hej");

function load() {
	document.querySelectorAll('div.order').forEach((el) => {
		el.addEventListener('click', () => {
			shoppingcartAnimate();
			let size = el.parentElement.querySelector('select').value
			if (size != "Välj") {
				addToCart(el.id, size)
			}
			console.log(el);
		})
	});
}

function shoppingcartAnimate() {
	let el = document.querySelector('.shoppingcarticon>svg.circle>circle');
	el.classList.add('explode');
	setTimeout(() => {
		el.classList.remove('explode');
	}, 300)
}

let cart = {
	H: [],
	D: [],
	B: [],
	A: [],
};

function addToCart(id, size) {
	cart[id].push(size)
}
