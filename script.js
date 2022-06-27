const container = querySelector(".container");
const toggle = querySelector(".toggle");

toggle.addEventListener("click", () => {
    container.classList.toggle("dark")?(toggle.fistElementChild.className = "far-fa-moon");
})
