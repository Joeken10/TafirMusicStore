let musicContainer = document.getElementById("musicList-container");
let modalContainer = document.getElementById("myModal");
let modalClose = document.getElementById("modal-close");
let musicList = [
  {
    id: 1,
    musicImageLink:
      "/TafirMusicStore/Store/chronixx 2024-06-21 at 17.24.30_72a84388.jpg",
    musicTitle: "Black is beautiful",
    artistName: "Chronixx",
    audioLink:
      "/TafirMusicStore/Store/Chronixx 2024-06-21 at 16.49.20_700d0573.mp3",
  },
  {
    class: 2,
    musicImageLink:
      "/TafirMusicStore/Store/Da baby 2024-06-21 at 17.51.29_8754dee9.jpg",
    musicTitle: "Rockstar",
    artistName: "Da Baby",
    audioLink:
      "/TafirMusicStore/Store/Da baby Audio 2024-06-21 at 17.45.59_f9c65e48.mp3",
  },
  {
    id: 3,
    musicImageLink: "/TafirMusicStore/Store/Jadakiss.jpg",
    musicTitle: "Lord give me a sign",
    artistName: "Jadakiss ft DMX",
    audioLink:
      "/TafirMusicStore/Store/DMX Jadakiss 2024-06-19 at 12.08.54_58df01c7.mp3",
  },
  {
    id: 4,
    musicImageLink:
      "/TafirMusicStore/Store/Feels 2024-06-21 at 17.24.32_2373d321.jpg",
    musicTitle: "Feels",
    artistName: "Pharell Williams ft Calvin Harris",
    audioLink:
      "/TafirMusicStore/Store/Feels 2024-06-21 at 16.43.54_be78b614.mp3",
  },
  {
    id: 5,
    musicImageLink: "/TafirMusicStore/Store/sia 1.jpg",
    musicTitle: "California Dreaming",
    artistName: "Sia",
    audioLink: "/TafirMusicStore/Store/Sia 2024-06-19 at 11.59.04_008aa38b.mp3",
  },
  {
    id: 6,
    musicImageLink: "/TafirMusicStore/Store/Sia 2_.jpg",
    musicTitle: "Genius",
    artistName: "Sia",
    audioLink:
      "/TafirMusicStore/Store/Sia Lsd Audio 2024-06-19 at 15.28.25_eef911c9.mp3",
  },
];
function displayMusicAlbum() {
  musicList.map((musicItem) => {
    let albumCard = document.createElement("li");
    console.log(albumCard);
    albumCard.innerHTML = `
    <div class="card" style="width: 18rem;">
          <img src="${musicItem.musicImageLink}" class="card-img-top"
            alt="music-album">
          <div class="card-body">
            <h5 class="card-title">${musicItem.musicTitle}</h5>
            <p class="card-text">${musicItem.artistName}</p>
          
          </div>
     </div>
          `;
    function selectMusicItem() {
      function openModal() {
        let modalContent = document.getElementById("modal-info");
        modalContainer.style.display = "block";
        modalContent.innerHTML = `
        <div class="image-container">
                  <img src="${musicItem.musicImageLink}" alt="album-image" />
              </div>
              <div class="music-information">
                  <h5>${musicItem.musicTitle}</h5>
                  <p class="card-text">${musicItem.artistName}</p>
                  <audio controls id ="audio-controls">
                      <source src="${musicItem.audioLink}"  type="audio/mpeg" /></audio>
        </div>
              `;
      }
      function closeModal() {
        modalContainer.style.display = "none";
        document.getElementById("audio-controls").src = ""
        
      }
      albumCard.addEventListener("click",openModal);
      modalClose.addEventListener("click", closeModal);
    }
    selectMusicItem(musicItem.id);
    musicContainer.appendChild(albumCard);
  });
}
displayMusicAlbum();
