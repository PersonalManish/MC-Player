let checkbug = 0
let audioChecker = 0
let songIndex = 0;
const songArea = document.querySelector('.songArea');
let audioElement = new Audio('songs/music/Aaja-We-Mahiya(PaglaSongs).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.querySelector('.mastersongname');
let mainImg = document.querySelector(".mainImg")
let Img = mainImg.querySelector("img")
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    { songName: "Aja-we-Mahiya", filePath: "songs/music/Aaja-We-Mahiya(PaglaSongs).mp3", coverPath: "songs/Avtar/mahiya.jfif" },
    { songName: "Beleiver", filePath: "songs/music/Believer(PagalWorld).mp3", coverPath: "songs/Avtar/beleiverImg.jfif" },
    { songName: "Excuses", filePath: "songs/music/Excuses_1.mp3", coverPath: "songs/Avtar/excuses.jfif" },
    { songName: "Brown Munde", filePath: "songs/music/Brown-Munde-AP-Dhillon-Gurinder-Gill.mp3", coverPath: "songs/Avtar/brownmundeImg.jfif" },
    { songName: "Chaleya", filePath: "songs/music/Chaleya Jawan 128 Kbps.mp3", coverPath: "songs/Avtar/chaleyaing.jpg" },
    { songName: "Daku", filePath: "songs/music/Daku_1.mp3", coverPath: "songs/Avtar/daku.jfif" },
    { songName: "Desi-Kalakar", filePath: "songs/music/Desi Kalakaar-(PagalWorld).mp3", coverPath: "songs/Avtar/desi kalakar.jfif" },
    { songName: "Breathless", filePath: "songs/music/Breathless-Shankar-Mahadevan.mp3", coverPath: "songs/Avtar/breathelessImg.jfif" },
    { songName: "Habibi", filePath: "songs/music/Habibi (Albanian Remix)-(Mr-Jat.in).mp3", coverPath: "songs/Avtar/habibi.jfif" },
    { songName: "Heeriya", filePath: "songs/music/Heeriye (feat. Arijit Singh) - Dulquer Salmaan 128 Kbps.mp3", coverPath: "songs/Avtar/heeriya.jfif" },
    { songName: "Illigal Weapon", filePath: "songs/music/Illegal Weapon 2.0 Street Dancer 3d 128 Kbps.mp3", coverPath: "songs/Avtar/illweapon.jfif" },
    { songName: "Jaadugar", filePath: "songs/music/Jaadugar Hustle 2.0 128 Kbps.mp3", coverPath: "songs/Avtar/jadugar.jfif" },
    { songName: "Kalaastar", filePath: "songs/music/Kalaastar Honey 3 0 128 Kbps.mp3", coverPath: "songs/Avtar/kalaatar.jfif" },
    { songName: "No Love", filePath: "songs/music/No Love Shubh 128 Kbps.mp3", coverPath: "songs/Avtar/no love.jfif" },
    { songName: "Raabta", filePath: "songs/music/Raabta Agent Vinod 128 Kbps.mp3", coverPath: "songs/Avtar/rabta.jfif" },
    { songName: "Sage", filePath: "songs/music/Sage Ved 128 Kbps.mp3", coverPath: "songs/Avtar/sage.jfif" },
    { songName: "Sooraj Dooba Hain", filePath: "songs/music/Sooraj Dooba Hain - Roy 128 Kbps.mp3", coverPath: "songs/Avtar/sooraj.jfif" },
    { songName: "Sultan", filePath: "songs/music/Sultan Kgf Chapter 1 128 Kbps.mp3", coverPath: "songs/Avtar/sultan.jfif" },
    { songName: "Tera Yar Hoon Main", filePath: "songs/music/Tera Yaar Hoon Main_192(Ghantalele.com).mp3", coverPath: "songs/Avtar/terayarmain.jfif" },
    { songName: "Tigni", filePath: "songs/music/Tigini - Kikimoteleba-(DJMaza).mp3", coverPath: "songs/Avtar/tigni.jfif" },
    { songName: "We Rollin", filePath: "songs/music/We Rollin Its_devilrony 128 Kbps.mp3", coverPath: "songs/Avtar/sultan.jfif" },
    { songName: "Yadav Brand", filePath: "songs/music/Yadav Brand 2-(DJMaza).mp3", coverPath: "songs/Avtar/yadav.jfif" },
  ]

  // songItems.forEach((element, i) => {
  //   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  //   // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  // })

  masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      
    }
    else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      
    }
  })

  const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    })
  }
  
  Array.from(document.querySelectorAll('.songItems')).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      console.log(e.target.id)
      console.log(e.target.id)
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      Img.src = songs[songIndex].coverPath;
      audioElement.currentTime = 0;
      audioElement.play();
      // gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    })
  })
  
  document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length) {
      songIndex = 0
    }
    else {
      songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    Img.src = songs[songIndex].coverPath;
    // audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  
  })
  
  document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
      songIndex = 0
    }
    else {
      songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    Img.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })




// Select all the song items (images) within the swiper slides
const songItems1 = document.querySelectorAll('.swiper-slide img');
let currentAudio = null
// Function to play the song based on the index
const playSong = (index) => {
  if (currentAudio) {
    currentAudio.pause(); // Pause the current playing audio
  }

  const audio = new Audio(songs[index].filePath);
  audio.play();
  audioChecker = 1;
  currentAudio = audio;
  Img.src = songs[index].coverPath;

  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

  masterPlay.addEventListener("click", () => {
    if (audioChecker === 1) {
      audio.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      audioChecker = 0;
    } else {
      audio.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      audioChecker = 1;
    }
  });



  document.getElementById('next').addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause(); // Pause the current playing audio
    }
    if(audioChecker === 1){ 
      audio.pause()
      console.log(index)
    index+=1
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    Img.src = songs[index].coverPath;
    // audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');}
   
  
  })

  
  document.getElementById('previous').addEventListener('click', () => {
   
  
    if(audioChecker === 1){ 
      audio.pause()
      index-=1
      console.log(index)
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    Img.src = songs[index].coverPath;
    // audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');}

   
   
  
  })
  



};

// Rest of your code...

// Iterate through each image and add a click event listener to play the respective song
songItems.forEach((item, index) => {
 
  item.addEventListener('click', () => {
   
    playSong(index);
  });
});

  



// Get the container where the song items will be added
const swiperWrapper = document.querySelector('.swiper-wrapper');






// Get the container where the song items will be added


// Function to create song items dynamically
const createSongItems = () => {
  songs.forEach((song, index) => {
    if (!swiperWrapper.querySelector(`[data-index="${index}"]`)) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide', 'songItems');
      slide.setAttribute('data-index', index);

      const image = document.createElement('img');
      image.src = song.coverPath;
      image.alt = song.songName;
      image.addEventListener('click', () => playSong(index)); // Play song on click

      slide.appendChild(image);
      swiperWrapper.appendChild(slide);
    }
  });
};

// Create the song items
createSongItems();




