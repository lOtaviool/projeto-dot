document.querySelectorAll('.accordion-question').forEach(button => {
  button.addEventListener('click', () => {
    const currentItem = button.parentElement;
    
    // Opcional: Fecha todos os outros antes de abrir o atual
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });

    // Alterna o item atual
    currentItem.classList.toggle('active');
  });
});