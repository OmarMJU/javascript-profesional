function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pasa: () => this.pausa(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(isMuted) {
            this.media.muted = isMuted;
        }
    }

    this.plugins.forEach(element => {
        element.run(player);
    });
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

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function() {
    if(this.media.muted) {
        this.unmute();
    } else {
        this.mute();
    }
}

export default MediaPlayer;