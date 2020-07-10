import MediaPlayer from "./MediaPlayer";
import AutoPlayer from "./plugins/AutoPlayer";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const boton: HTMLElement = document.getElementById("playButton");
const botonMute: HTMLElement = document.getElementById("muteButton");

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlayer(), new AutoPause(), new Ads()]
});
boton.onclick = () => player.togglePlay();
botonMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => console.log(error.message));
}