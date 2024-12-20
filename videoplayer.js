const myVideo = document.getElementById("video_main");

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}
