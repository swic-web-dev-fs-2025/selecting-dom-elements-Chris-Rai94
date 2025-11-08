import "./style.css";

const header = document.getElementById("main-header");
const navLinks = document.querySelectorAll(".navbar a");

document.querySelector("#app").innerHTML = `
  <h3 class="text-3xl font-bold underline">
    The main header is: ${header.textContent}
  </h3>
  <p>
  Number of navigation links: ${navLinks.length}
  </p>
`;

navLinks?.forEach((link) => {
  if (link.getAttribute("href").startsWith("/")) {
    link.textContent += " [internal]";
  }
});

const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs?.forEach((input) => {
  input.style.outline = "2px solid gold";
});

const cards = document.querySelectorAll(".card");
cards?.forEach((card) => {
  card.setAttribute("data-viewed", "true");
});

// Select the product with data-product-id="2" and change its price to "$24.99".
const productB = document.querySelector('[data-product-id="2"]');
productB.querySelector(".price").textContent = "$24.99";

// lab 2
//const title = document.querySelector("main .card .card-title");

const updatedTitle = document.querySelector('[data-title-id="1"]');

if (updatedTitle) {
  updatedTitle.textContent = "Updated Title";
}
