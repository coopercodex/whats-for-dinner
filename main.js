// QuerySelectors
var newSides = document.querySelector(".side");
var newMains = document.querySelector(".main-dish");
var newDesserts = document.querySelector(".dessert");
var randomFood = document.querySelector(".random-food");
var randomButton = document.querySelector(".show-random");
var crockPot = document.querySelector(".crockPot");
var menuRecipe = document.querySelector(".menu-recipe");


var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var desserts = [
  "Crem Brulee",
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
]

//Eventlisteners
randomButton.addEventListener("click", getRandomFood);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSide() {
  var sideIndex = sides[getRandomIndex(sides)];
  newSides.value = sideIndex;
  if (newSides.checked) {
    return randomFood.innerHTML = newSides.value;
  } else {
    return undefined;
  }
}

function getRandomMain() {
  var mainIndex = mains[getRandomIndex(mains)];
  newMains.value = mainIndex;
  if (newMains.checked) {
    return randomFood.innerHTML = newMains.value;
  }
  else {
    return undefined;
  }
}

function getRandomDessert() {
  var dessertIndex = desserts[getRandomIndex(desserts)];
  newDesserts.value = dessertIndex;
  if (newDesserts.checked) {
    return randomFood.innerHTML = newDesserts.value;
  } else {
    return undefined;
  }
}

function getRandomFood() {
  crockPot.classList.add("hidden");
  menuRecipe.classList.remove("hidden");
  console.log(randomFood);
  getRandomSide();
  getRandomMain();
  getRandomDessert();
}


