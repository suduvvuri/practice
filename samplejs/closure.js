var outerFunc = (name) => {
    var innerFunc = () => {
return name;
    }  

    return innerFunc;

}

console.log(outerFunc('surya')()); // this can also be put as var outputOfOuterFunc = outerFunc('surya'); this returns innerFunc then  outputOfOuterFunc();