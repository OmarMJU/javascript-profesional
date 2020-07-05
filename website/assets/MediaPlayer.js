class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pausa: () => this.pausa(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(isMuted) {
                this.media.muted = isMuted;
            }
        };

        this.plugins.forEach(element => {
            element.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pausa() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pausa();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}

export default MediaPlayer;