

let addition = document.querySelector(".incrementBtn");
let subtraction = document.querySelector(".decrementBtn");
let counter = parseInt(document.querySelector(".count").innerHTML);

addition.addEventListener("click", function () {
  counter += 1;
  document.querySelector(".count").innerText = counter;
});

subtraction.addEventListener("click", function () {
  counter.innerText = counter > 0 ? (counter -= 1) : 0;
  document.querySelector(".count").innerText = counter;
});
console.log(counter);

const addtocart = document.querySelector(".add-to-cart");
// addtocart.onclick = () =>{
//     document.querySelector(".cart-items").innerText = counter;
// }
//--- send the amount of order to the cart icon thru the "addtocart Btn"
addtocart.onclick = () => {
  document.querySelector(".cart-items").innerText = counter;
  document.querySelector(".price-by-quantity").innerText =
    "$120 x" + document.querySelector(".cart-items").innerText;

  const Total = 120 * parseInt(document.querySelector(".cart-items").innerText);
  document.querySelector(".total").innerText = "$" + Total;
};

function displayFunc() {
  let x = document.querySelector(".whole-cart-window");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function onhoverBtn(){
  addtocart.style.setproperty('animate__pulse')
}