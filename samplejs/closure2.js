let employee = (empName) => {
var gender;
return {
  setName: (newName) => {
      empName = newName;
  },
  getName: () => empName,

  setGender: (newGender) => {
      gender = newGender;
  } ,
  getGender: () => gender


}

} 

var empoutput = employee('surya');
console.log(empoutput.getName());
empoutput.setName('duvvuri');
console.log(empoutput.getName());