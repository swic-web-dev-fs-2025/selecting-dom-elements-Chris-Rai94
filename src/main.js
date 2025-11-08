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

navLinks.forEach((link) => {
  if (link.getAttribute("href").startsWith("/")) {
    link.textContent += " [internal]";
  }
});

const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach((input) => {
  input.style.outline = "2px solid gold";
});
