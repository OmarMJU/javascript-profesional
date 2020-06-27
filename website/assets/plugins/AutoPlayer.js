function AutoPlayer() {}

AutoPlayer.prototype.run = function(player) {
    player.mute();
    player.play();
}

export default AutoPlayer;