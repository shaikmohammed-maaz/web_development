function checkAge(){
  let val = document.getElementById("Age").value;
  let numberAge = Number(val);
  
  let textOfIfElse = "";
 if ( val > 18){
  textOfIfElse = "Great you are eligible for voting  ";
} else {
  textOfIfElse = " sorry you are not eligible";
}
document.getElementById("ifElse").innerHTML = textOfIfElse;
}


function switchFunc(){
const fruits = ["apple", "banana", "waterMelon"];
let val = document.getElementById("Age").value;
let actualVal = Number(val);

if(actualVal>1000){
  actualVal=0;
}else if(actualVal>2000){
  actualVal=1;
}else if(actualVal>3000){
  actualVal=2;
}

let listOfDishes;
switch (actualVal) {
  case 0:
    listOfDishes = [
      "Falafel (Middle Eastern)",
      "Dosa (South Indian)",
      "Paella (Spanish)",
      "Tom Yum Soup (Thai)",
      "Pho (Vietnamese)"
    ];
    break;
  case 1:
    listOfDishes = [
      "Chocolate Cake",
      "Ice Cream Sundae",
      "Apple Pie",
      "Cheesecake",
      "Tiramisu (Italian)"
    ];
    break;
  case 2:
    listOfDishes = [
      "Mac and Cheese",
      "Chicken Noodle Soup",
      "Mashed Potatoes and Gravy",
      "Meatloaf",
      "Grilled Cheese Sandwich"
    ];
    break;
  default:
    listOfDishes = [
      "Pumpkin Spice Latte (Fall)",  // Beverage with seasonal flavor
      "Grilled Salmon with Roasted Vegetables (Summer)",  // Light and fresh summer dish
      "Beef Stew (Winter)",  // Hearty and warming winter meal
      "Chilled Gazpacho (Spring)",  // Refreshing cold soup for spring
      "Apple Crisp (Fall)" // Classic dessert associated with fall harvest
    ];
    break;
}

let menuForYou = "Here are the dishes on our todays menu that suits your limit <br> ENJOY <br>";

for (let i = 0; i < fruits.length; i++) {
  menuForYou += listOfDishes[i]+"<Br>";
}


document.getElementById("switches").innerHTML = menuForYou;

}
var randomNumber;

function getRandomFunc(){ 
  randomNumber = Math.floor((Math.random() * 100) + 1);
}
getRandomFunc();
function GuessGameFunc(){
  let UserGuess = prompt("Please enter your guess", "");
  console.log(randomNumber);
  
  if (Number(UserGuess) == randomNumber) {
    document.getElementById("Guess").innerHTML =
    "Hurray You Won the game <Br> Restart the game to play again";
  }else if(Number(UserGuess)>randomNumber){
      document.getElementById("Guess").innerHTML = "answer guess is lower than this";
    }else if(Number(UserGuess)<randomNumber){
      document.getElementById("Guess").innerHTML = "answer guess is greater than this";
    }
}

function add() {
  return 5 + 5;
}
let arrowAdd = () => 5 * 5;

document.getElementById("func").innerHTML =
  "this is a function called named add : " +
  add() +
  "<Br> this is a arrow function with a and b params :" +
  arrowAdd();

// const h1 = document.createElement("h1");
// const texts = document.createTextNode("This is my heading");
// h1.appendChild(texts);
// document.body.appendChild(h1);
