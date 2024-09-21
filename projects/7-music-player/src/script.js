const converImage = document.querySelector(".music-cover");
const titleText = document.querySelector(".title");
const artistText = document.querySelector(".artist");
const timeline = document.querySelector("")
const buttons = document.querySelectorAll(".button");
const timePassedText = document.querySelector(".time-passed");
const musicLengthText = document.querySelector(".music-length");

let isPlaying = false;
let nowPlaying = 1;
let LoadedMsuic = null;
const musicsInfo = {
  1: {
    title: "Reloaded Installer #1",
    artist: "LHS",
    file: "./src/songs/1.mp3",
    cover: "https://images.unsplash.com/photo-1659959104077-d7f31aa44d92?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  2: {
    title: "Reloaded Installer #2",
    artist: "LHS",
    file: "./src/songs/2.mp3",
    cover: "https://images.unsplash.com/photo-1659959103925-b40b9108a5b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  3: {
    title: "Reloaded Installer #3",
    artist: "LHS",
    file: "./src/songs/3.mp3",
    cover: "https://images.unsplash.com/photo-1677080865283-26f94ed332f1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  4: {
    title: "Reloaded Installer #4",
    artist: "LHS",
    file: "./src/songs/4.mp3",
    cover: "https://images.unsplash.com/photo-1659959103888-ea4ab754e6f6?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  5: {
    title: "Reloaded Installer #5",
    artist: "LHS",
    file: "./src/songs/5.mp3",
    cover: "https://images.unsplash.com/photo-1695916295837-a65e21580e52?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
}


function loadMusic(music) {
  if(LoadedMsuic !== null) {
    pauseMusic();
  }
  LoadedMsuic = new Audio(musicsInfo[music].file);
  LoadedMsuic.addEventListener('loadedmetadata', () => {
    updateMusicLength(LoadedMsuic);
  });

  titleText.innerHTML = musicsInfo[music].title;
  artistText.innerHTML = musicsInfo[music].artist;
  converImage.src = musicsInfo[music].cover;

}

function pauseMusic(){
    buttons[1].classList.remove("hidden");
    buttons[2].classList.add("hidden");
    LoadedMsuic.pause();
    isPlaying = false;

}

function playMusic() {
  buttons[1].classList.add("hidden");
  buttons[2].classList.remove("hidden");
  LoadedMsuic.play()
  isPlaying = true;
}

function updateMusicLength(audio){
  const duration = audio.duration;
  const mins = Math.floor(duration/60);
  const secs = Math.floor(duration - mins*60);

  musicLengthText.innerHTML = `${mins}:${secs}`;
}

function handlingTimeline(){

}

buttons[1].addEventListener("click", playMusic);
buttons[2].addEventListener("click", pauseMusic);
buttons[0].addEventListener("click", () => {
  if(nowPlaying>1) {
    loadMusic(nowPlaying-1);
    nowPlaying--;
  }
});
buttons[3].addEventListener("click", () => {
  if(nowPlaying<Object.values(musicsInfo).length) {
    loadMusic(nowPlaying+1);
    nowPlaying++;
  }
})

loadMusic(1);