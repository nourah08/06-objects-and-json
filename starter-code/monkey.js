console.log("monkey.js loaded");
/*Work with a partner to create a monkey object, which has the following properties:*/

var monkey = function ( name , species) {

    this.name= name;
    this.species=species;
    this.foodsEaten= [];
};

monkey.prototype.eatSomething = function(food) {
    this.foodsEaten.push(food)
  }
 
  Monkey.prototype.introduce = function(){
    console.log(`Hi,my name is ${this.name} and i am ${this.species} and i love eating ${this.foodsEaten.join()}`)
}

var monkeyOne = new Monkey('hiko','Japanese macaque')
monkeyOne.eatSomething('mature leaves')
monkeyOne.introduce()
var monkeyTow = new Monkey('ponma','Bonnet macaque')
monkeyTow.eatSomething('flowers')
monkeyTow.introduce()
var monkeyThree = new Monkey('jack','Common squirrel monkey')
monkeyThree.eatSomething('banana')
monkeyThree.introduce()

/*And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
