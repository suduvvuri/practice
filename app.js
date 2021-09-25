/*var f_name = 'Surya';
console .log(f_name);

var a1 = 30;
var a2 = 40;
var result = a1 == a2;
console.log(result); */

function sayHello(name) {
    return 'Hello ' + name;
}
console.log(sayHello('Surya'));

//Anonymous func 

var sayHello = function() {
    return 'anonymous way!';
}
console.log(sayHello());

//objects

var surya = {
 age: 30,
 address: 212
};

console.log(surya.age);

//file system
//read file
var fs = require('fs');
fs.readFile('./text.txt', function(err, data){
    if(!err){
        console.log(data.toString());
    }
});

//write file
fs.writeFile('./text.txt','Hello Surya in a file!', function(err){
     if(!err){

        fs.readFile('./text.txt', function(err, data){
            if(!err){
                console.log(data.toString());
            }
        });

     }
});