// -------------------
// Part 1: Variables, Data Types, Operators, Conditionals
// -------------------
let userName = prompt("Enter your name:"); // Capture user input
let age = prompt("Enter your age:");       // String input

age = Number(age); // convert to number

// Conditional
let greetingMessage;
if (age >= 18) {
  greetingMessage = `Hello ${userName}, you are an adult ✅`;
} else {
  greetingMessage = `Hi ${userName}, you are still a minor 👶`;
}
document.getElementById("greeting").innerText = greetingMessage;


// -------------------
// Part 2: Functions
// -------------------
function calculateTotal(a, b) {
  return a + b; // reusable block
}

function showTotal() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let total = calculateTotal(n1, n2);

  document.getElementById("totalResult").innerText = "Total: " + total;
}


// -------------------
// Part 3: Loops
// -------------------

// Example 1: Countdown using for loop
function countdown(start) {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before new run

  for (let i = start; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Array iteration using forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
fruits.forEach(fruit => {
  console.log("I like " + fruit);
});


// -------------------
// Part 4: DOM Manipulation
// -------------------
let toggleBtn = document.getElementById("toggleBtn");
let surpriseText = document.getElementById("surprise");

toggleBtn.addEventListener("click", function() {
  if (surpriseText.style.display === "none") {
    surpriseText.style.display = "block";
  } else {
    surpriseText.style.display = "none";
  }
});
