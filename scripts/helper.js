class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    let totalTime = 'null';
    if (song !== undefined){
      totalTime = player.prettyTime(song.duration);
    } else {
      totalTime = player.getDuration();
  }

  $('#time-control .total-time').text(player.prettyTime(totalTime));

};

}
const helper = new Helper();
