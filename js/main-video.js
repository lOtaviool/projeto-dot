const section = document.getElementById("main-video");

const iframe = document.createElement("iframe");
iframe.src = "https://www.youtube.com/embed/1wn-OSiNVjE";
iframe.width = "960";
iframe.height = "540";
iframe.allow = "autoplay; encrypted-media";
iframe.allowFullscreen = true;

section.appendChild(iframe);