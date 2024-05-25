const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

document.getElementById("demo").innerHTML = "Hello JavaScript!";

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
