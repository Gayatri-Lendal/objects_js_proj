console.log('Object Revision');

//objects 
//java is an OOP lang i.e.Object Oriented Programming Language
 
 //human is an object
 //properties of human are 2 legs,2 hands,1 face
 //functions of human(i.e.Methods) are eat(),sleep(),walk()
 
 //bird is an object
 //properties of birds are 2 wings,2 legs
 //functions are eat(),fly()
 
 
 //human object (high level overview)

//for gayatri
//.name= "Gayatri";
//gayatri.painting();
//.eat();


//for radha
//human.name= "Radha";
//radha.eat();

//bike object
const bike = {type:"Pulsar",model:"309",color:"Black"};
 
const human_gayatri = {
  //property_name : property_value;
  name:"Gayatri",
  age:19,
  gender:"female",
  weight:42,
  tenth_board_passed: true,
  favourite_fruits: ["Mango","Banana"],
  //method_name: method_value
  eat: function(){
    console.log("gayatri is eating");
  }
};

console.log(human_gayatri.favourite_fruits);
console.log(human_gayatri.age);
console.log(human_gayatri.gender);
console.log(human_gayatri.weight); 

const human_diskha = {
  name: "Diksha",
  age:18,
  gender: "female",
  weight: 50,
  tenth_board_passed: true,
  favourite_fruits: ["Apple", "Kiwi"],
  sleep:function(){
    return "Diksha sleeps alot";
  }
}

const human_rajat = {
  name: "Rajat",
  age: 22,
  gender: "male",
  tenth_board_passed:true,
  favourite_fruits: ["Cherry","Orange"],
  walk:function(){
    console.log("Rajat bhaiya can walk");
    return true;
  }
}

console.log(human_diskha.weight);
console.log(human_rajat.favourite_fruits);
console.log(human_rajat.tenth_board_passed);
//or we write it as
console.log(human_rajat["favourite_fruits"]);
console.log(human_gayatri.eat()); 
console.log(human_diskha.sleep());
console.log(human_rajat.walk());

// functions are also know as objects.

//arrays of object
const humans = [human_gayatri, human_diskha, human_rajat];

var unknown = humans[1];
console.log(unknown.name); 
var unknown = humans[2];
console.log(unknown.walk()); 
var unknown = humans[0];
console.log(unknown.weight); 


//if property are defined in the code and we try to print that 
// it will print undefined

//if method isn't present in the code and if we try to call that function 
//then it will give an error 

var something = humans[0].name + " " + humans[1].name + " " + humans[2].name;
console.log(something); 

var output2 = (humans[0].age * humans[1].age) / humans[2].age;
console.log(output2);