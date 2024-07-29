// let musicContainer = document.getElementById("musicList-container");
// let modalOpen = document.getElementById("myModal");
// let modalClose = document.getElementById("modal-close");
// let musicFormAdd = document.getElementById("musicSubmit-form");
// let musicUpdateModal = document.getElementById("updateMusicModal");
// let updateAlbumForm = document.getElementById("musicUpdate-form");

// function displayData() {
//   fetch("http://localhost:3000/musicList")
//     .then((response) => response.json())
//     .then((data) => {
//       data.map((item) => {
//         let albumCard = document.createElement("li");
//         albumCard.innerHTML = `
//           <div class="card">
//               <img src="${item.albumImage}" class="card-img-top" alt="music-album-image">
//               <div class="card-body">
//                   <h5 class="card-title">${item.albumTitle}</h5>
//                   <p class="card-text">${item.albumArtist}</p>
//               </div>
//           </div>
//         `;
//         function displayModal() {
//           function openModal() {
//             let modalContent = document.getElementById("modal-info");
//             modalOpen.style.display = "block";
//             modalContent.innerHTML = `
//             <div class="image-container">
//                 <img src="${item.albumImage}" alt="album-image" />
//             </div>
//             <div class="music-information">
//                 <h5>${item.albumTitle}</h5>
//                 <p class="card-text">${item.albumArtist}</p>
//                 <audio controls>
//                     <source src="${item.albumTrack}"
//                         type="audio/mpeg" />
//                 </audio>
//                 <button type="button" class="btn btn-secondary" data-id=${item.id}>Edit</button>
//                 <button type="button" class="btn btn-danger" data-id=${item.id}>Delete</button>
//             </div>
//             `;
//           }

//           function closeModal() {
//             modalOpen.style.display = "none";
//           }
//           albumCard.addEventListener("click", openModal);
//           modalClose.addEventListener("click", closeModal);
//         }
//         displayModal(item.id);
//         musicContainer.appendChild(albumCard);
//       });
//     });
// }

// function addMusicForm(event) {
//   event.preventDefault();

//   let albumImage = document.getElementById("addAlbum-image").value;
//   let albumTitle = document.getElementById("addAlbum-title").value;
//   let albumArtist = document.getElementById("addArtist-name").value;
//   let albumTrack = document.getElementById("addMusic-link").value;

//   let musicInfo = {
//     albumImage,
//     albumTitle,
//     albumArtist,
//     albumTrack,
//   };

//   fetch("http://localhost:3000/musicList", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(musicInfo),
//   })
//     .then((response) => response.json())
//     .then((data) => data);
// }

// function deleteMusicItem(id) {
//   fetch(`http://localhost:3000/musicList/${id}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   });
// }

// modalOpen.addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn-danger")) {
//     const musicId = event.target.dataset.id;
//     deleteMusicItem(musicId);
//   } else {
//     event.target.classList.contains("btn-secondary");
//     const updateMusicId = event.target.dataset.id;
//     updateForm(updateMusicId);
//   }
// });

// function updateForm(id) {
//   let modalClose = document.getElementById("updateModal-close");

//   modalOpen.style.display = "none";
//   musicUpdateModal.style.display = "block";

//   fetch("http://localhost:3000/musicList")
//     .then((response) => response.json())
//     .then((data) => {
//       let musicItemId = data.find((music) => music.id === id);
//       document.getElementById("form-id").value = musicItemId.id;
//       document.getElementById("album-image").value = musicItemId.albumImage;
//       document.getElementById("album-name").value = musicItemId.albumTitle;
//       document.getElementById("artist-name").value = musicItemId.albumArtist;
//       document.getElementById("album-link").value = musicItemId.albumTrack;
//     });

//   function closeModal() {
//     musicUpdateModal.style.display = "none";
//   }
//   modalClose.addEventListener("click", closeModal);
// }

// function updateMusicForm(event) {
//   event.preventDefault();

//   let musicId = document.getElementById("form-id").value;
//   let albumImage = document.getElementById("album-image").value;
//   let albumTitle = document.getElementById("album-name").value;
//   let albumArtist = document.getElementById("artist-name").value;
//   let albumTrack = document.getElementById("album-link").value;

//   let musicInfo = {
//     musicId,
//     albumImage,
//     albumTitle,
//     albumArtist,
//     albumTrack,
//   };

//   fetch(`http://localhost:3000/musicList/${musicId}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(musicInfo),
//   })
//     .then((response) => response.json())
//     .then((data) => data);
// }

// updateAlbumForm.addEventListener("submit", updateMusicForm);
// musicFormAdd.addEventListener("submit", addMusicForm);

// displayData();