// const songs = [
//     { name: "Song 1", file: "audio/song1.mp3", image: "images/song1.jpg" },
//     { name: "Song 2", file: "audio/song2.mp3", image: "images/song2.jpg" },
//     { name: "Song 3", file: "audio/song3.mp3", image: "images/song3.jpg" },
// ];

// const audio = document.getElementById("audio");
// const playlist = document.getElementById("playlist");

// // Create a container to display the currently selected song
// function displaySong(song) {
//     playlist.innerHTML = ""; // Clear existing song details

//     const songItem = document.createElement("div");
//     songItem.classList.add("grid", "items-center", "p-2", "bg-gray-800", "rounded");

//     // Image element for the song thumbnail
//     const img = document.createElement("img");
//     img.src = song.image;
//     img.alt = `${song.name} cover`;
//     img.classList.add("w-16", "h-16", "object-cover", "rounded");

//     // Song title text
//     const songName = document.createElement("span");
//     songName.textContent = song.name;
//     songName.classList.add("text-white", "text-xl", "font-bold");

//     songItem.appendChild(img);       // Add image to the song item
//     songItem.appendChild(songName);  // Add song name to the song item

//     playlist.appendChild(songItem); // Display only the selected song in the playlist
// }

// // Initialize with the first song displayed
// displaySong(songs[0]);
// audio.src = songs[0].file;

// // Set up a click event for each song to display it when selected
// songs.forEach((song) => {
//     const songButton = document.createElement("button");
//     songButton.classList.add("hidden");
//     songButton.addEventListener("click", () => {
//         audio.src = song.file;
//         audio.play();
//         displaySong(song);
//     });
//     document.body.appendChild(songButton);
// });
