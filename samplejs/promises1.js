//better way of writing callbacks

var callFunc1 = (name) => {
    return new Promise((resolve, reject) => {
        if(name != '') {
        resolve('print my name:' + name);
        } 
        reject(new Error('Name not found!'));
    })
    
} 

callFunc1('Surya').then(
     success =>
     {
        console.log(success);
     } 
).catch( error => console.error(error.message));
    

//chain
callFunc1('Surya1').
then(success => console.log(success)).catch( error => console.error(error.message))
.then(
    callFunc1('').then( success => console.log(success)).catch( error => console.error(error.message)).
    then(
        callFunc1('duvvuri1').then( success => console.log(success)).catch( error => console.error(error.message))
    )
)
    
    
       
//this above chaining can be written better using promise all.