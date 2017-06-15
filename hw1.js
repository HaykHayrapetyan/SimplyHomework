var faker = require('faker');

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.increment();
    }

    
    
    increment(age){
    
            setInterval(() => {
                this.age++;
            
            }, 1000);
    
    }
}

var p1 = new Person("Vazgen", 37);
var p2 = new Person("Babken", 15);
var p3 = new Person("Garik", 48);
var p4 = new Person("Vardan", 32);
var arr = [p1, p2, p3, p4];

function checkAge(arr){
     setInterval(()=>{
         for(index in arr){
                if (arr[index].age > 40){
                    arr.splice(index, 1);
                }
         }
     }, 1000);
     
};

function addPerson(arr){
     setInterval(()=>{
         var x = Math.floor((Math.random() * 50) + 1);
         var anun = faker.name.findName();
         arr.push(new Person(anun, x));
         console.log(arr);
     }, 2000);
     
};

checkAge(arr);
addPerson(arr);

