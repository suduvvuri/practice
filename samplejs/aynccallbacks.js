let api = 'test1/api';

var foo = () => {
    setTimeout(()=>console.log('foo is to download: '+ api), 2000 );
    
}


var bar = () => {
    console.log('bar is to work on downloaded data: '+ api);
}

//foo();
//bar();

//You want foo to execute first then bar
// fix this with call back function

var foo1 = (callback) =>  {
    setTimeout(()=>
    {
        console.log('foo is to download: '+ api);
        callback();
    }, 2000 );
} 

var bar1 = () => {
    console.log('bar is to work on downloaded data: '+ api);
}

//foo1(bar1);

//the call back is called async callback

//Another way of representing. Callbacks are function that are executed after function is executed. Hence it can be re written as

var foo2 = (callback) => setTimeout(() => 
{
    console.log('foo is to download: '+ api)
     callback();
}, 2000);


foo2(()=>  console.log('bar is to work on downloaded data: '+ api));

// in cleaner way

function foo3(api, callback) {
    setTimeout(() => {
        console.log('foo is to download: '+ api)
        callback();
    }, 3000)
}

foo3(api, function(api) {
    console.log('bar is to work on downloaded data: '+ api);  
})