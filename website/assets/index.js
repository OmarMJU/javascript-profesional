import MediaPlayer from "./MediaPlayer.js";
import AutoPlayer from "./plugins/AutoPlayer.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const boton = document.getElementById("playButton");
const botonMute = document.getElementById("muteButton");

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlayer(), new AutoPause()]
});
boton.onclick = () => player.togglePlay();
botonMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => console.log(error.message));
}