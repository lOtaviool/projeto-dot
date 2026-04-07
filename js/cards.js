const botoes = document.querySelectorAll(".toggle");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const cardAtual = botao.closest(".card");
    const jaAtivo = cardAtual.classList.contains("ativo");

    // fecha todos
    cards.forEach(card => {
      card.classList.remove("ativo");
      card.querySelector(".toggle").textContent = "Abrir";
    });

    // abre apenas se não estava ativo
    if (!jaAtivo) {
      cardAtual.classList.add("ativo");
      botao.textContent = "Fechar";
    }
  });
});