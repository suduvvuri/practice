let array = [1, 2, 7, 4, 5, 6];
var odd = array.filter((num) => num % 2);
console.log(odd);

//sync functions

array.sort((a, b) => a - b);
console.log(array);

//another example, this time it's async
array.sort((a,b) => {
    setTimeout(() => b - a, 4000);
   
                });

                console.log(array);