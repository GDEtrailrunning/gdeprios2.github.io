document.addEventListener("DOMContentLoaded", function () {
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24*60*60*1000);
  
  let video1 = document.createElement("video");
  let video2 = document.createElement("video");
  let video3 = document.createElement("video");
  let video4 = document.createElement("video");

  video1.src = "video 1.mp4";
  video2.src = "video 2.mp4";
  video3.src = "video 3.mp4";
  video4.src = "video 4.mp4";

  video1.controls = true;
  video1.autoplay = false;
  video1.loop = false;

  video2.controls = true;
  video2.autoplay = false;
  video2.loop = false;

  video3.controls = true;
  video3.autoplay = false;
  video3.loop = false;

  video4.controls = true;
  video4.autoplay = false;
  video4.loop = false;

  document.getElementById("Semana 1").appendChild(video1);
  document.getElementById("Semana 1").appendChild(video2);
  document.getElementById("Semana 2").appendChild(video3);
  document.getElementById("Semana 2").appendChild(video4);

});
