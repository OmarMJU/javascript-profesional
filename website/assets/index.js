import MediaPlayer from "./MediaPlayer.js";
import AutoPlayer from "./plugins/AutoPlayer.js";

const video = document.querySelector("video");
const boton = document.getElementById("playButton");
const botonMute = document.getElementById("muteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlayer()] });
boton.onclick = () => player.togglePlay();
botonMute.onclick = () => player.toggleMute();