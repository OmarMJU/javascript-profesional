const video = document.querySelector("video");
const boton = document.querySelector("button");

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pausa = function() {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play();
    } else {
        this.pausa();
    }
}

const player = new MediaPlayer({el: video});
boton.onclick = () => player.togglePlay();