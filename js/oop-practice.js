// STEP 1: Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
class Cat {
    constructor(name) {
        this.name = name;
    }
};
let Dog = class {
    constructor(name) {
        this.name = name;
    }
};

// STEP 2: Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
// const cat1 = new Cat('Leo');
// const dog1 = new Dog('Teddy');

// STEP 3: Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 
// class Animal {
//     constructor(){
//         console.log('Animal class');
//     }
//     create = function() {
//         console.log('The Animal has been created');
//     }
// }
// const animal1 = new Animal();
// animal1.create();

// STEP 4: Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
// class Animal {
//         constructor(msg){
//             console.log(msg);
//         }       
// }
// const animal1 = new Animal('Hey! Animal has been created');

// STEP 5: Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
// class Animal {
//     constructor(type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }    
// }
// const ani1 = new Animal('cat', 'Bengal', 'Snow Mink', '13inches', '7inches');

// STEP 6: Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// for (const property in ani1) {
//     console.log(`${property}: ${ani1[property]}`);
// }

// STEP 7: Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
// class Animal {
//     constructor(type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }    
//     speak = function() {
//         switch(this.type) {
//             case 'dog': 
//                 console.log(`The ${this.color} dog is barking!`);
//                 break;
//             case 'cat':
//                 console.log(`The ${this.color} cat is meowing!`);
//                 break;
//         }        
//     }
// }
// const ani1 = new Animal('cat', 'Bengal', 'Snow Mink', '13inches', '7inches');
// ani1.speak();

// STEP 8: Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
// class Animal {
//     constructor(type, breed, color, height, length){
//         this._type = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//     }  
//     _checkType = function() {
//         switch(this._type) {
//             case 'dog': 
//                 return `dog`;
//                 break;
//             case 'cat':
//                 return `cat`;
//                 break;
//         } 
//     }

//     speak = function(){
//         console.log(`The ${this._checkType()} has made a noise!`);
//     }
// }
// const ani1 = new Animal('cat', 'Bengal', 'Snow Mink', '13inches', '7inches');
// ani1.speak();

// STEP 9: Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.

// String.prototype.findWords = function(word)  {
//     return (this.split(word).length - 1);
// }
// let testStr = new String('I scream, you scream, we all scream, for ice cream!');
// console.log(testStr.findWords('scream'));