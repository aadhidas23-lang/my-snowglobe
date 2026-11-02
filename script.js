const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
"one million earths could fit inside the Sun",
"comets are made of sand, ice and carbon dioxide",
"flying on a plane to Pluto would take more than 800 years",
"the sunset on Mars appears blue",
"space smells different to different people",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];

});
