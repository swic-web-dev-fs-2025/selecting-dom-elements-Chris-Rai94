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
