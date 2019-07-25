// let obj = {
// 	id: 1,
// 	name: 'Adam',
// 	code: undefined,
// 	foo: function (){
// 		return 'Hello'
// 	},
// 	too: null
// };

// console.log(obj.toString());

// let objToJson = JSON.stringify(obj);

// console.log(objToJson);

// let obj = '{"id": 1,"name": "Adam"}';
// let JsonToObj = JSON.parse(obj);

// console.log(typeof obj);
// console.log(typeof JsonToObj);
// console.log(JsonToObj);


// function coffeeMachine(coffee, callback) {
//   setTimeout (function () {
//   	let a = coffee + ' is done!';
//   	setTimeout (function () {
//   	return callback(a + ' with milk!');
//   }, 1000);
//   }, 1000)
// }

// let coffee = 'Jacobs';

// coffeeMachine(coffee, function (data) {
//   console.log(data);
// });

//console.log(cf);


function coffeeMachine(coffee, callback) {
  setTimeout (function () {
  	return callback(coffee);
  }, 1000)
}

let coffee = 'Jacobs';

coffeeMachine(coffee, function (data) {
  console.log(data);
});














































