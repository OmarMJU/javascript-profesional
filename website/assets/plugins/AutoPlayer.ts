import MediaPlayer from "../MediaPlayer";

class AutoPlayer {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }

        player.play();
    }
}

export default AutoPlayer;