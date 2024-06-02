// API ->zuugch neg torluun huselt damjuulagch
// fetch() -> API ruu huselt/requist ywuulna
// response -> huseltiin harui
// response -> 200: approved, 404,300,500: error
// Promise -> harui ireh amlalt -> .then()
// json() -> zambaraagui data-g tsegtslen garagah code

//fetch('https://fakestoreapi.com/products').then(
//	response => response.json()
//).then(
//	product => {
//		console.log(product);
//		console.log(product[0]);
//		console.log(product[0].title);
//	console.log(product[product.length-1].rating.rate);
//	}
//)

fetch('https://fakestoreapi.com/carts').then(
	response => response.json()
).then(
	product => {
		console.log(product);
		console.log(product[0].userId);
	}
)