//The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

async function f() {
    return Promise.resolve(1);
}

f().then(s => console.log(s));

//take the example from promises1


//better way of writing callbacks

var callFunc1 = async (name) => {
    let prom = new Promise((resolve, reject) => {
        if(name != '') {
       setTimeout(() => resolve('print my name:' + name), 2000);
        } 
       // reject(new Error('Name not found!'));
    });
     let result = await  prom;
    console.log(result)
    
} 

callFunc1('surya');
