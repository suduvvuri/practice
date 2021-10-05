var test = function() {
    console.log('simple func1');
}

test();

 function test1() {
    console.log('simple func2');
}

test1();

let test2 = function(param1) {
     console.log('printing ' + param1);
}
test2('my name is surya');
//Another way of representing above func
let test4 = (param1) => {
    console.log('printing again ' + param1);
}
test4('my name again')
//passing arguments

var test3 = function() {
    let sum = 0;
    for(let i =0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(test3(1,2,3));

//function in a function

setTimeout(()=> console.log('Print after 1 sec'), 1000);

//Calling an anonymous function immediately
let obj = {
    fname : 'surya',
    lname : 'duvvuri'
};
(() =>  console.log(obj.fname+ ", "+obj.lname))(obj);