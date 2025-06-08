const musicas = [
  { nome: "Música 1", arquivo: "musicas/musica1.mp3" },
  { nome: "Música 2", arquivo: "musicas/musica2.mp3" },
  { nome: "Música 3", arquivo: "musicas/musica3.mp3" }
];

let indiceAtual = 0;
const player = document.getElementById('audio-player');
const info = document.getElementById('info-musica');
const volumeControl = document.getElementById('controle-volume');

function tocarMusica(indice) {
  indiceAtual = indice;
  player.src = musicas[indiceAtual].arquivo;
  player.play();
  atualizarInfo();
}

function atualizarInfo() {
  info.textContent = `Tocando agora: ${musicas[indiceAtual].nome}`;
}

function tocarOuPausar() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function proximaMusica() {
  indiceAtual = (indiceAtual + 1) % musicas.length;
  tocarMusica(indiceAtual);
}

function musicaAnterior() {
  indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
  tocarMusica(indiceAtual);
}

// Controle de volume
volumeControl.addEventListener("input", () => {
  player.volume = volumeControl.value;
});