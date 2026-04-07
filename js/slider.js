const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slidesContainer = document.querySelector(".slides");

let current = 0;

function updateSlider() {
    console.log('CHEGUEI')
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[current].classList.add("active");
}

// botões
document.getElementById("next").onclick = () => {
  current = (current + 1) % slides.length;
  updateSlider(current);
};

document.getElementById("prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider(current);
};

// dots clicáveis
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    updateSlider(current);
  });
});