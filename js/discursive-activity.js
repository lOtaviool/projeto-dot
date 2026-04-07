const feedback = document.getElementById('feedback');
const textarea = document.getElementById('resposta');
const btnResponder = document.querySelector('.btn-responder');

// Ativa o botão responder se houver texto
textarea.addEventListener('input', () => {
  if (textarea.value.trim().length > 0) {
    btnResponder.style.backgroundColor = '#e2e8f0'; // leve destaque
    btnResponder.style.color = '#475569';
    btnResponder.style.cursor = 'pointer';
    btnResponder.disabled = false;
  } else {
    btnResponder.disabled = true;
    // reset do estilo original
    btnResponder.style.backgroundColor = '#f1f5f9';
    btnResponder.style.color = '#94a3b8';
  }
});