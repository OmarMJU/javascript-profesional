function AutoPlayer() {}

AutoPlayer.prototype.run = function(player) {
    if (!player.muted) {
        player.muted = true;
    }

    player.play(false);
}

export default AutoPlayer;