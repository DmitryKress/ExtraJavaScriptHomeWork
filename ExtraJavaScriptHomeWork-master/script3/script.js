var product = prompt("Please,type a number");

product = Number(product);
console.log(product);

if (product >= 0 && product <= 24) {
  alert(product + " is extra small");
} else if (product >= 25 && product <= 49) {
  alert(product + " is small");
} else if (product >= 50 && product <= 74) {
  alert(product + " is medium");
} else if (product >= 75 && product <= 99) {
  alert(product + " is large");
} else {
  alert("Can not define, please try another value");
}
