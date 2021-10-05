let func1 = (name) =>  new Promise((resolve, reject) => {
    if(name != '')
    resolve(name);
    reject(new Error('throw error'));
})

Promise.all([
    func1('surya'),
    func1('prakash'),
    func1('duvvuri')

]).then((names) => {
    names.forEach(name =>  console.log(name));
   }
    ).catch(errors => console.error(errors.message) );
