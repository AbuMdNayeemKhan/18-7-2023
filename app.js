//Array Filter Javascript

var numArray = [30, 32, 40, 55, 60, 80, 90];
// var result = numArray.filter(function(items){
//     return items > 55;
// });

// console.log(result);

// Array Find Methode

// var result2 = numArray.find(function(items){
//     return items > 50;
// });

// console.log(result2);

let result = numArray.findIndex(function(items){
    items < 50;
});

console.log(result);