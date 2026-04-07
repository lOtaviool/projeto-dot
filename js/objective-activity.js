const radioButtons = document.querySelectorAll('input[name="opcao"]');
const btnResponder = document.getElementById('btnResponder');
const feedbackErro = document.getElementById('feedback-erro');

// Habilita o botão ao selecionar uma opção
radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    btnResponder.disabled = false;
    btnResponder.style.backgroundColor = '#e2e8f0';
    btnResponder.style.color = '#475569';
    btnResponder.style.cursor = 'pointer';
  });
});

function verificarResposta() {
  // Simula a exibição do erro ao clicar em alterar/responder
  feedbackErro.classList.remove('hidden');
}

function fecharErro() {
  feedbackErro.classList.add('hidden');
}