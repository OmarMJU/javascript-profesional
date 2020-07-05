class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach(element => {
            element.run(this);
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