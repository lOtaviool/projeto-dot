const section = document.getElementById("main-video");

const iframe = document.createElement("iframe");
iframe.src = "https://www.youtube.com/embed/MU8B4XDI3Uw";
iframe.width = "960";
iframe.height = "540";
iframe.allow = "autoplay; encrypted-media";
iframe.allowFullscreen = true;

section.appendChild(iframe);