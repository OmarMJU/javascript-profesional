import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handleIntersecion = this.handleIntersecion.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    run(player) {
        this.player = player;
        
        const intersectionObsever = new IntersectionObserver(this.handleIntersecion, {
            threshold: this.threshold
        });
        
        intersectionObsever.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibility);
    }
    
    private handleIntersecion(entries: IntersectionObserverEntry[]) {
        const enrtie = entries[0];
        const isVisible = enrtie.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pausa();
        }
    }
    
    private handleVisibility() {
        const isVisible = document.visibilityState === "visible";

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pausa();
        }
    }
}

export default AutoPause;