// Part 1 - Grade
document.getElementById("gradeBtn").addEventListener("click", function () {

  let score = Number(document.getElementById("score").value);
  let letter;

  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else if (score >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

    let message = "Letter Grade: " + letter;

    console.log(message);
    document.getElementById("gradeResult").innerText = message;

});

// Part 3 - Discount
document.getElementById("checkBtn").addEventListener("click", function () {

  let age = Number(document.getElementById("age").value);
  let amountSpent = Number(document.getElementById("amount").value);

  if (age >= 65 || age <= 21 || amountSpent > 1000) {
    console.log("User gets a discount");
    document.getElementById("result").innerText = "User gets a discount";
  } else {
    console.log("No discount");
    document.getElementById("result").innerText = "No discount";
  }

});

class Car {
  constructor(brand, model, year, color, isElectric) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.isElectric = isElectric;
  }

  startEngine() {
    console.log(this.brand + " engine started.");
  }
}

let car1 = new Car("Toyota", "Camry", 2023, "Blue", false);
let car2 = new Car("Tesla", "Model 3", 2024, "White", true);

car1.startEngine();
car2.startEngine();


// Extended class
class SportsCar extends Car {
  constructor(brand, model, year, color, isElectric, topSpeed) {
    super(brand, model, year, color, isElectric); // inherit properties
    this.topSpeed = topSpeed; // new property
  }
}

let mySportsCar = new SportsCar(
  "Porsche",
  "911",
  2024,
  "Red",
  false,
  "190 mph"
);

console.log(mySportsCar.topSpeed);

class Clothing {
  constructor(brand, type, size, color, price) {
    this.brand = brand;
    this.type = type;
    this.size = size;
    this.color = color;
    this.price = price;
  }
}

let myShirt = new Clothing(
  "Nike",
  "T-Shirt",
  "M",
  "Black",
  35
);

console.log(myShirt.brand);
