const TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

function saveCurrentTime(data) {
  localStorage.setItem(TIME_KEY, data.seconds);
}

player.on("timeupdate", _.throttle(saveCurrentTime, 1000));

function setSavedTime() {
  const savedTime = localStorage.getItem(TIME_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).catch(function (error) {
      console.error("Error setting the current time:", error);
    });
  }
}
player.on("loaded", setSavedTime);
