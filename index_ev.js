const Event = require('events').EventEmitter;	

let	emt = new Event();

// emt.on('x', (a, b) =>{
// 	console.log(a, b);
//     console.log('Listener 1');  
// });

// emt.on('x', () => {
//     console.log('Listener 2');  
// });

// a = 1;
// b = 5; 

// emt.emit('x', {id: 10}, b, a)


emt.on('x', () => {
	setTimeout(function () {
		console.log('Listener 1'); 
	}, 1000)
     
 });

emt.on('x', () => {
    console.log('Listener 2');  
 });

emt.on('x', () => {
    console.log('Listener 3');  
 });

emt.emit('x')