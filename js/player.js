const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const seek = document.getElementById('seek');
const volume = document.getElementById('volume');
const timeDisplay = document.getElementById('time');

// Play / Pause
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2.5"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  }
});

// Atualizar barra de progresso e tempo
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  seek.value = percent;
  
  // Efeito da cor verde preenchendo
  seek.style.background = `linear-gradient(to right, #84cc16 ${percent}%, #e2e8f0 ${percent}%)`;
  
  // Formatar tempo (ex: 03:03)
  let mins = Math.floor(audio.currentTime / 60);
  let secs = Math.floor(audio.currentTime % 60);
  timeDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
});

// Ir para parte específica do áudio
seek.addEventListener('input', () => {
  const time = (seek.value * audio.duration) / 100;
  audio.currentTime = time;
});

// Controle de Volume
volume.addEventListener('input', () => {
  audio.volume = volume.value;
});