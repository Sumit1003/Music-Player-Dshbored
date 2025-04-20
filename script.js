document.querySelector(".logo").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // Ensure the music keeps playing
    let audio = document.querySelector("audio"); // Adjust selector if needed
    let isPlaying = !audio.paused; // Check if the song is playing

    // Scroll smoothly to the top
    document.querySelector("h1").scrollIntoView({ behavior: "smooth" });

    // Resume playing music if it was already playing
    if (isPlaying) {
        audio.play();
    }
});


// Sample music data
const musicData = [
    {
        id: 1,
        title: "Syahi",
        artist: "Sinta Bhai",
        album: "Haryanvi Songs",
        duration: "4:26",
        image: "Music-Player-Dshbored/assets/syahi.jpg",
        audio: "Music-Player-Dshbored/songs/syahi.mp3"
    },
    {
        id: 2,
        title: "Chand_Chhupa_Badal_Mein",
        artist: "Udit Narayan and Alka Yagnik.",
        album: "Bollywood Songs",
        duration: "5:47",
        audio: "Music-Player-Dshbored/songs/Chand_Chhupa_Badal_Mein.mp3",
        image: "Music-Player-Dshbored/assets/chand chupa.jpeg",
    },
    {
        id: 3,
        title: "Chahun_Main_Ya_Naa",
        artist: "Arijit Singh and Palak Muchha",
        album: "Bollywood Songs",
        duration: "5:04",
        audio: "Music-Player-Dshbored/songs/Chahun_Main_Ya_Naa.mp3",
        image: "Music-Player-Dshbored/assets/Chahun-Main.jpg",
    },
    {
        id: 4,
        title: "Channa_Mereya",
        artist: "Arijit Singh",
        album: "Bollywood Songs",
        duration: "4:49",
        audio: "Music-Player-Dshbored/songs/Channa_Mereya.mp3",
        image: "Music-Player-Dshbored/assets/Channa_Mereya.jpg",
    },
    {
        id: 5,
        title: "Ishq hai",
        artist: "Mismatched",
        album: "Bollywood Songs",
        duration: "2:02",
        audio: "Music-Player-Dshbored/songs/Ishq Hai.mp3",
        image: "Music-Player-Dshbored/assets/Ishq hai.jpeg",
    },
    {
        id: 6,
        title: "Channa",
        artist: "Gippy Grewal, Jatinder Shah",
        album: "Punjabi Songs",
        duration: "5:54",
        audio: "Music-Player-Dshbored/songs/Channa.mp3",
        image: "Music-Player-Dshbored/assets/Channa.jpg",
    },
    {
        id: 7,
        title: "Ijazat.mp3",
        artist: "Nehaal Naseem | Falak Shabir",
        album: "Punjabi Songs",
        duration: "1:30",
        audio: "Music-Player-Dshbored/songs/Ijazat.mp3",
        image: "Music-Player-Dshbored/assets/Ijazat.avif",
    },
    {
        id: 8,
        title: "Jhol",
        artist: "Annural Khalid and Maanu ‧ 2024",
        album: "Punjabi Songs",
        duration: "4:38",
        audio: "Music-Player-Dshbored/songs/Jhol  Coke Studio Pakistan  Season 15  Maanu x Annural Khalid.mp3",
        image: "Music-Player-Dshbored/assets/jhol.jpg",
    },
    {
        id: 9,
        title: "Dil_To_Pagal_Hai",
        artist: "Lata Mangeshkar and Udit Narayan",
        album: "Bollywood Songs",
        duration: "5:36",
        audio: "Music-Player-Dshbored/songs/Dil_To_Pagal_Hai.mp3",
        image: "Music-Player-Dshbored/assets/dil to pagal.jpeg",
    },
    {
        id: 10,
        title: "Jeene_Laga_Hoon__",
        artist: " Atif Aslam and Shreya Ghoshal",
        album: "Bollywood Songs",
        duration: "3:56",
        audio: "Music-Player-Dshbored/songs/Jeene_Laga_Hoon__28From__26quot_3BRamaiya_Vastavaiya_26quot_3B_29.mp3",
        image: "Music-Player-Dshbored/assets/jeene laga hoon.jpeg",
    },
    {
        id: 11,
        title: "Kaabil_Hoon",
        artist: " Jubin Nautiyal and Palak Muchhal ‧",
        album: "Bollywood Songs",
        duration: "5:14",
        audio: "Music-Player-Dshbored/songs/Kaabil_Hoon.mp3",
        image: "Music-Player-Dshbored/assets/kaabil.jpg",
    },
    {
        id: 12,
        title: "Main_Rang_Sharbaton_Ka",
        artist: " Atif Aslam and Chinmayi  ‧",
        album: "Bollywood Songs",
        duration: "4:37",
        audio: "Music-Player-Dshbored/songs/Main_Rang_Sharbaton_Ka__28Reprise_29__28From__22Phata_Poster_Nikhla_Hero_22_29.mp3",
        image: "Music-Player-Dshbored/assets/rang.jpeg",
    },
    {
        id: 13,
        title: "Manwa_Laage",
        artist: " Arijit Singh, Shreya Ghoshal ‧",
        album: "Bollywood Songs",
        duration: "4:32",
        audio: "Music-Player-Dshbored/songs/Manwa_Laage.mp3",
        image: "Music-Player-Dshbored/assets/Manwa_Laage_Cover.jpeg",
    },

    {
        id: 14,
        title: "Jogi - Lyrical  Shaadi Mein Zaroor Aana",
        artist: " Akanksha Sharma and Yasser Desai",
        album: "Bollywood Songs",
        duration: "4:39",
        audio: "Music-Player-Dshbored/songs/Jogi - Lyrical  Shaadi Mein Zaroor Aana.mp3",
        image: "Music-Player-Dshbored/assets/jogi.jpeg",
    },
    {
        id: 15,
        title: "Syahi (Official audio) ",
        artist: " Sinta Bhai  Gold E Gill  Mahi Dhaka ",
        album: "Haryanvi Songs",
        duration: "4:26",
        audio: "Music-Player-Dshbored/songs/syahi.mp3",
        image: "Music-Player-Dshbored/assets/syahi.jpg",
    },
    {
        id: 16,
        title: "Jhumke  Parmish Verma  Wamiqa Gabbi   ",
        artist: "Parmish Verma, Sajjan Adeeb",
        album: "Punjabi Songs",
        duration: "2:59",
        audio: "Music-Player-Dshbored/songs/Jhumke  Parmish Verma  Wamiqa Gabbi.mp3",
        image: "Music-Player-Dshbored/assets/jhumke.jpg",
    },
    {
        id: 17,
        title: "Churake - Vilen X Kanika Kapoor (Official Audio)",
        artist: " Vilen X Kanika Kapoor",
        album: "Punjabi Songs",
        duration: "2:34",
        audio: "Music-Player-Dshbored/songs/Churake - Vilen X Kanika Kapoor (Official Audio).mp3",
        image: "Music-Player-Dshbored/assets/churke.jpg",
    },
    {
        id: 18,
        title: "Sifat _ Parmish Verma Ft. Mahira Sharma ",
        artist: " Parmish Verma Ft. Mahira Sharma",
        album: "Punjabi Songs",
        duration: "1:52",
        audio: "Music-Player-Dshbored/songs/Sifat _ Parmish Verma Ft. Mahira Sharma.mp3",
        image: "Music-Player-Dshbored/assets/sifat.jpeg",
    },
    {
        id: 19,
        title: "Jaane Dil Mein - Full Song  ",
        artist: " Lata Mangeshkar and Sonu Nigam",
        album: "Bollywood Songs",
        duration: "5:48",
        audio: "Music-Player-Dshbored/songs/Jaane Dil Mein - Full Song.mp3",
        image: "Music-Player-Dshbored/assets/jaane dil mein.jpg",
    },
    {
        id: 20,
        title: "Saiyaara Full Song  Ek Tha Tiger",
        artist: "Mohit Chauhan, Tarannum, Sohail Sen",
        album: "Bollywood Songs",
        duration: "3:30",
        audio: "Music-Player-Dshbored/songs/Saiyaara Full Song  Ek Tha Tiger.mp3",
        image: "Music-Player-Dshbored/assets/Saiyaara.jpeg",
    },
    {
        id: 21,
        title: "Cheema Y - Intro (Official Audio) ",
        artist: "Cheema Y | Gur Sidhu",
        album: "Punjabi Songs",
        duration: "2:37",
        audio: "Music-Player-Dshbored/songs/Cheema Y - Intro (Official Audio).mp3",
        image: "Music-Player-Dshbored/assets/anyway.jpeg",
    },
    {
        id: 22,
        title: "Pasandida Aurat",
        artist: "Akhil and Nirmaan",
        album: "Punjabi Songs",
        duration: "3:48",
        audio: "Music-Player-Dshbored/songs/Pasandida Aurat.mp3",
        image: "Music-Player-Dshbored/assets/pasand.jpeg",
    },
    {
        id: 23,
        title: "Shree Hanuman Chalisa",
        artist: "Shankar Mahadevan",
        album: "Bhakti Songs",
        duration: "11:36",
        audio: "Music-Player-Dshbored/songs/शर हनमन चलस Shree Hanuman Chalisa.mp3",
        image: "Music-Player-Dshbored/assets/hanuman.jpg",
    },
    {
        id: 24,
        title: "A.R. Rahman - Tum Tak",
        artist: "Javed Ali, Keerthi Sagathia",
        album: "Bollywood Songs",
        duration: "5:03",
        audio: "Music-Player-Dshbored/songs/A.R. Rahman - Tum Tak.mp3",
        image: "Music-Player-Dshbored/assets/Tum-Tak.jpg",
    },
    {
        id: 25,
        title: "Jinde Meriye",
        artist: "Prabh Gill",
        album: "Punjabi Songs",
        duration: "3:18",
        audio: "Music-Player-Dshbored/songs/Prabh Gill_  Jinde Meriye.mp3",
        image: "Music-Player-Dshbored/assets/Jinde-Meriye.jpg",
    },
    {
        id: 26,
        title: "Thoda Thoda Pyaar",
        artist: "Kumaar, Nilesh Ahuja, and Stebin Ben",
        album: "Bollywood Songs",
        duration: "4:32",
        audio: "Music-Player-Dshbored/songs/Thoda Thoda Pyaar.mp3",
        image: "Music-Player-Dshbored/assets/Thoda Thoda Pyaar.jpg",
    },
    {
        id: 27,
        title: "Tu Hukam Taan Karda ve ",
        artist: "Parmish Verma",
        album: "Punjabi Songs",
        duration: "6:50",
        audio: "Music-Player-Dshbored/songs/Tu Hukam Taan Karda ve.mp3",
        image: "Music-Player-Dshbored/assets/Tu Hukam Taan Karda ve.jpg",
    },
    {
        id: 28,
        title: "Tujh Mein Rab Dikhta Hai ",
        artist: "Roopkumar Rathod",
        album: "Bollywood Songs",
        duration: "4:41",
        audio: "Music-Player-Dshbored/songs/Tujh Mein Rab Dikhta Hai.mp3",
        image: "Music-Player-Dshbored/assets/Tujh Mein Rab Dikhta Hai.jpeg",
    },
    {
        id: 29,
        title: "Sheera Jasvir Jatt Sikka",
        artist: "Sheera Jasvir",
        album: "Punjabi Songs",
        duration: "3:38",
        audio: "Music-Player-Dshbored/songs/Sheera Jasvir Jatt Sikka.mp3",
        image: "Music-Player-Dshbored/assets/Sheera Jasvir Jatt Sikka.jpg",
    },
    {
        id: 30,
        title: "The Medley Song  Mujhse Dosti Karoge ",
        artist: " Lata Mangeshkar, Pamela Chopra",
        album: "Bollywood Songs",
        duration: "12:10",
        audio: "Music-Player-Dshbored/songs/The Medley Song  Mujhse Dosti Karoge.mp3",
        image: "Music-Player-Dshbored/assets/The Medley Song  Mujhse Dosti Karoge.jpg",
    },
    {
        id: 31,
        title: "Teri Jhaki Ke Ma Gola Maru",
        artist: " Masoom Sharma  Amanraj Gill",
        album: "Haryanvi Songs",
        duration: "3:50",
        audio: "Music-Player-Dshbored/songs/Teri Jhaki Ke Ma Gola Maru.mp3",
        image: "Music-Player-Dshbored/assets/Teri Jhaki Ke Ma Gola Maru.jpg",
    },
    {
        id: 32,
        title: "Mann Basgi ",
        artist: "Sinta Bhai",
        album: "Haryanvi Songs",
        duration: "3:29",
        audio: "Music-Player-Dshbored/songs/Mann Basgi.mp3",
        image: "Music-Player-Dshbored/assets/Mann Basgi.jpeg",
    },
    {
        id: 33,
        title: "Mann Basgi 2 ",
        artist: "Sinta Bhai",
        album: "Haryanvi Songs",
        duration: "3:44",
        audio: "Music-Player-Dshbored/songs/Mann Basgi2.mp3",
        image: "Music-Player-Dshbored/assets/Mann Basgi 2.jpg",
    },
    {
        id: 34,
        title: "Pagal Banawe",
        artist: "Sinta Bhai",
        album: "Haryanvi Songs",
        duration: "3:42",
        audio: "Music-Player-Dshbored/songs/Pagal Banawe.mp3",
        image: "Music-Player-Dshbored/assets/Pagal Banawe.jpg",
    },
];

// Playlist data
const playlists = [
    { id: 1, name: "Bollywood Songs", tracks: [2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 19, 20, 24, 26, 28, 30] },
    { id: 2, name: "Punjabi Songs", tracks: [6, 7, 8, 16, 17, 18, 21, 22, 25, 27, 29] },
    { id: 3, name: "Haryanvi Songs", tracks: [1, 15, 31, 32, 33, 34] },
    { id: 4, name: "Bhakti Songs", tracks: [22] },
    { id: 5, name: "All Songs", tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] },
];

// Recently played tracks (for demo purposes)
const recentlyPlayed = [
    { trackId: 3, timestamp: Date.now() - 1000 * 60 * 30 }, // 30 minutes ago
    { trackId: 1, timestamp: Date.now() - 1000 * 60 * 60 }, // 1 hour ago
    { trackId: 4, timestamp: Date.now() - 1000 * 60 * 120 }, // 2 hours ago
    { trackId: 2, timestamp: Date.now() - 1000 * 60 * 180 } // 3 hours ago
];

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('progress');
const progressHandle = document.getElementById('progress-handle');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeProgress = document.getElementById('volume-progress');
const volumeHandle = document.getElementById('volume-handle');
const volumeSlider = document.querySelector('.volume-slider');
const albumArtwork = document.getElementById('album-artwork');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const playlistTracks = document.getElementById('playlist-tracks');
const mainContainer = document.querySelector('.main-container');
const contentTitle = document.querySelector('.content h1');

// Player state
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 'none'; // 'none', 'all', 'one'
let volume = 0.7;
let currentPlaylist = null;
let currentView = 'home';
let isLoggedIn = false;
let currentUser = null;
let likedSongs = []; // For demo purposes
let lastPlaylistBeforeSwitch = null; // Store the last playlist before switching views

// Initialize player
function initPlayer() {
    // Set initial volume
    audioPlayer.volume = volume;
    volumeProgress.style.width = `${volume * 100}%`;
    volumeHandle.style.left = `${volume * 100}%`;

    // Load first track
    loadTrack(currentTrackIndex);

    // Render playlist
    renderPlaylist();

    // Initialize sidebar
    initSidebar();

    // Initialize user menu
    initUserMenu();

    // Add scroll to top button
    addScrollToTopButton();
}

// Initialize sidebar functionality
function initSidebar() {
    // Menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Get the menu item text
            const menuText = this.querySelector('span').textContent.toLowerCase();

            // If we're switching away from home, store the current playlist
            if (currentView === 'home' && menuText !== 'home') {
                lastPlaylistBeforeSwitch = {
                    playlist: currentPlaylist,
                    title: document.querySelector('.playlist-container h2').textContent
                };
            }

            // Change view based on menu item
            changeView(menuText);
        });
    });

    // Playlist items
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.textContent === 'Create Playlist') {
                createNewPlaylist();
                return;
            }

            if (this.textContent === 'Liked Songs') {
                showLikedSongs();
                return;
            }

            // Find the playlist by name
            const playlistName = this.textContent;
            const playlist = playlists.find(p => p.name === playlistName);

            if (playlist) {
                showPlaylist(playlist);
            }
        });
    });
}

// Change view based on menu selection
function changeView(view) {
    currentView = view;

    switch (view) {
        case 'home':
            contentTitle.textContent = 'Recently Played';
            if (lastPlaylistBeforeSwitch) {
                // Restore the last playlist that was playing
                document.querySelector('.now-playing-container').style.display = 'flex';
                document.querySelector('.playlist-container h2').textContent = lastPlaylistBeforeSwitch.title;

                if (lastPlaylistBeforeSwitch.playlist) {
                    showPlaylist(lastPlaylistBeforeSwitch.playlist);
                } else {
                    renderPlaylist();
                }
            } else {
                renderRecentlyPlayed();
            }
            break;
        case 'search':
            contentTitle.textContent = 'Search';
            renderSearchView();
            break;
        case 'library':
            contentTitle.textContent = 'Your Library';
            renderLibraryView();
            break;
        default:
            contentTitle.textContent = 'Recently Played';
            renderRecentlyPlayed();
    }

    // Scroll to top
    mainContainer.scrollTop = 0;
}

// Render recently played view
function renderRecentlyPlayed() {
    // Show the now playing container
    document.querySelector('.now-playing-container').style.display = 'flex';

    // Update playlist title
    document.querySelector('.playlist-container h2').textContent = 'Recently Played';

    // Sort recently played by timestamp (most recent first)
    const sortedRecent = [...recentlyPlayed].sort((a, b) => b.timestamp - a.timestamp);

    // Render the recently played tracks
    playlistTracks.innerHTML = '';

    sortedRecent.forEach((recent, index) => {
        const trackIndex = recent.trackId - 1; // Adjust for 0-based index
        const track = musicData[trackIndex];

        if (!track) return; // Skip if track not found

        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        if (trackIndex === currentTrackIndex) {
            trackElement.classList.add('active');
        }

        // Format timestamp
        const timeAgo = getTimeAgo(recent.timestamp);

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${timeAgo}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = trackIndex;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }
        });

        playlistTracks.appendChild(trackElement);
    });

    // If no recently played tracks, show all tracks
    if (sortedRecent.length === 0) {
        renderPlaylist();
    }
}

// Get time ago string
function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + ' years ago';
    if (interval === 1) return '1 year ago';

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + ' months ago';
    if (interval === 1) return '1 month ago';

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + ' days ago';
    if (interval === 1) return '1 day ago';

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + ' hours ago';
    if (interval === 1) return '1 hour ago';

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + ' minutes ago';
    if (interval === 1) return '1 minute ago';

    return 'Just now';
}

// Render search view
function renderSearchView() {
    // Hide the now playing container
    document.querySelector('.now-playing-container').style.display = 'none';

    // Create search interface
    const searchHTML = `
        <div class="search-container">
            <div class="search-input-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" class="search-input" placeholder="Search for songs, artists, or albums">
            </div>
            <div class="search-results">
                <p class="search-prompt">Start typing to search</p>
            </div>
        </div>
    `;

    // Replace playlist container with search container
    const playlistContainer = document.querySelector('.playlist-container');
    playlistContainer.innerHTML = searchHTML;

    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const searchResults = document.querySelector('.search-results');

        if (query.length < 2) {
            searchResults.innerHTML = '<p class="search-prompt">Start typing to search</p>';
            return;
        }

        // Filter tracks based on query
        const filteredTracks = musicData.filter(track =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query)
        );

        if (filteredTracks.length === 0) {
            searchResults.innerHTML = '<p class="search-prompt">No results found</p>';
            return;
        }

        // Render search results
        searchResults.innerHTML = '<h3>Search Results</h3>';
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results-list';

        filteredTracks.forEach((track, index) => {
            const trackElement = document.createElement('div');
            trackElement.className = 'search-result-item';
            trackElement.innerHTML = `
                <img src="${track.image}" alt="${track.title}" class="result-image">
                <div class="result-info">
                    <div class="result-title">${track.title}</div>
                    <div class="result-artist">${track.artist} • ${track.album}</div>
                </div>
                <div class="result-duration">${track.duration}</div>
            `;

            trackElement.addEventListener('click', () => {
                const trackIndex = musicData.findIndex(t => t.id === track.id);
                currentTrackIndex = trackIndex;
                loadTrack(currentTrackIndex);

                if (!isPlaying) {
                    togglePlay();
                } else {
                    audioPlayer.play();
                }

                // Add to recently played
                addToRecentlyPlayed(track.id);

                // Switch back to home view
                changeView('home');
            });

            resultsContainer.appendChild(trackElement);
        });

        searchResults.appendChild(resultsContainer);
    });

    // Focus the search input
    setTimeout(() => searchInput.focus(), 100);
}

// Add track to recently played
function addToRecentlyPlayed(trackId) {
    // Remove if already exists
    const existingIndex = recentlyPlayed.findIndex(item => item.trackId === trackId);
    if (existingIndex !== -1) {
        recentlyPlayed.splice(existingIndex, 1);
    }

    // Add to the beginning
    recentlyPlayed.unshift({
        trackId: trackId,
        timestamp: Date.now()
    });

    // Keep only the last 10 items
    if (recentlyPlayed.length > 10) {
        recentlyPlayed.pop();
    }
}

// Render library view
function renderLibraryView() {
    // Hide the now playing container
    document.querySelector('.now-playing-container').style.display = 'none';

    // Create library interface
    const libraryHTML = `
        <div class="library-container">
            <div class="library-tabs">
                <button class="library-tab active" data-tab="playlists">Playlists</button>
                <button class="library-tab" data-tab="artists">Artists</button>
                <button class="library-tab" data-tab="albums">Albums</button>
            </div>
            <div class="library-content">
                <div class="library-grid" id="library-grid"></div>
            </div>
        </div>
    `;

    // Replace playlist container with library container
    const playlistContainer = document.querySelector('.playlist-container');
    playlistContainer.innerHTML = libraryHTML;

    // Render playlists in the library
    renderLibraryPlaylists();

    // Add tab switching functionality
    const tabs = document.querySelectorAll('.library-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const tabName = this.dataset.tab;
            switch (tabName) {
                case 'playlists':
                    renderLibraryPlaylists();
                    break;
                case 'artists':
                    renderLibraryArtists();
                    break;
                case 'albums':
                    renderLibraryAlbums();
                    break;
            }
        });
    });
}

// Render playlists in the library
function renderLibraryPlaylists() {
    const libraryGrid = document.getElementById('library-grid');
    libraryGrid.innerHTML = '';

    // Add "Liked Songs" card
    const likedSongsCard = document.createElement('div');
    likedSongsCard.className = 'library-card';
    likedSongsCard.innerHTML = `
        <div class="library-card-image liked-songs-card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="heart-icon-large">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </div>
        <div class="library-card-title">Liked Songs</div>
        <div class="library-card-subtitle">Playlist • ${likedSongs.length} songs</div>
    `;

    likedSongsCard.addEventListener('click', () => {
        showLikedSongs();
    });

    libraryGrid.appendChild(likedSongsCard);

    // Add playlist cards
    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'library-card';

        // Get a random track from the playlist for the cover image
        const randomTrackIndex = playlist.tracks[Math.floor(Math.random() * playlist.tracks.length)];
        const coverImage = musicData[randomTrackIndex]?.image || 'https://via.placeholder.com/300';

        playlistCard.innerHTML = `
            <div class="library-card-image">
                <img src="${coverImage}" alt="${playlist.name}">
            </div>
            <div class="library-card-title">${playlist.name}</div>
            <div class="library-card-subtitle">Playlist • ${playlist.tracks.length} songs</div>
        `;

        playlistCard.addEventListener('click', () => {
            showPlaylist(playlist);
        });

        libraryGrid.appendChild(playlistCard);
    });

    // Add "Create Playlist" card
    const createPlaylistCard = document.createElement('div');
    createPlaylistCard.className = 'library-card create-playlist-card';
    createPlaylistCard.innerHTML = `
        <div class="library-card-image create-playlist-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plus-icon">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </div>
        <div class="library-card-title">Create Playlist</div>
        <div class="library-card-subtitle">Start a new playlist</div>
    `;

    createPlaylistCard.addEventListener('click', () => {
        createNewPlaylist();
    });

    libraryGrid.appendChild(createPlaylistCard);
}

// Render artists in the library
function renderLibraryArtists() {
    const libraryGrid = document.getElementById('library-grid');
    libraryGrid.innerHTML = '';

    // Get unique artists
    const artists = [...new Set(musicData.map(track => track.artist))];

    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'library-card artist-card';

        // Get a track from this artist for the cover image
        const artistTrack = musicData.find(track => track.artist === artist);
        const coverImage = artistTrack?.image || 'https://via.placeholder.com/300';

        artistCard.innerHTML = `
            <div class="library-card-image artist-image">
                <img src="${coverImage}" alt="${artist}">
            </div>
            <div class="library-card-title">${artist}</div>
            <div class="library-card-subtitle">Artist</div>
        `;

        artistCard.addEventListener('click', () => {
            showArtist(artist);
        });

        libraryGrid.appendChild(artistCard);
    });
}

// Render albums in the library
function renderLibraryAlbums() {
    const libraryGrid = document.getElementById('library-grid');
    libraryGrid.innerHTML = '';

    // Get unique albums
    const albums = [...new Set(musicData.map(track => track.album))];

    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'library-card album-card';

        // Get a track from this album for the cover image
        const albumTrack = musicData.find(track => track.album === album);
        const coverImage = albumTrack?.image || 'https://via.placeholder.com/300';

        albumCard.innerHTML = `
            <div class="library-card-image">
                <img src="${coverImage}" alt="${album}">
            </div>
            <div class="library-card-title">${album}</div>
            <div class="library-card-subtitle">Album</div>
        `;

        albumCard.addEventListener('click', () => {
            showAlbum(album);
        });

        libraryGrid.appendChild(albumCard);
    });
}

// Show a specific playlist
function showPlaylist(playlist) {
    currentPlaylist = playlist;
    contentTitle.textContent = playlist.name;

    // Show the now playing container
    document.querySelector('.now-playing-container').style.display = 'flex';

    // Update playlist title
    document.querySelector('.playlist-container h2').textContent = playlist.name;

    // Render the playlist tracks
    playlistTracks.innerHTML = '';

    playlist.tracks.forEach((trackIndex, index) => {
        const track = musicData[trackIndex];
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        if (trackIndex === currentTrackIndex && currentPlaylist === playlist) {
            trackElement.classList.add('active');
        }

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${track.duration}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = trackIndex;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }

            // Add to recently played
            addToRecentlyPlayed(track.id);
        });

        playlistTracks.appendChild(trackElement);
    });

    // Update the last playlist before switch
    lastPlaylistBeforeSwitch = {
        playlist: playlist,
        title: playlist.name
    };

    // Scroll to top
    mainContainer.scrollTop = 0;
}

// Show liked songs
function showLikedSongs() {
    contentTitle.textContent = 'Liked Songs';

    // Show the now playing container
    document.querySelector('.now-playing-container').style.display = 'flex';

    // Update playlist title
    document.querySelector('.playlist-container h2').textContent = 'Liked Songs';

    // Render the liked tracks
    playlistTracks.innerHTML = '';

    likedSongs.forEach((trackIndex, index) => {
        const track = musicData[trackIndex];
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        if (trackIndex === currentTrackIndex) {
            trackElement.classList.add('active');
        }

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${track.duration}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = trackIndex;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }

            // Add to recently played
            addToRecentlyPlayed(track.id);
        });

        playlistTracks.appendChild(trackElement);
    });

    // Update the last playlist before switch
    lastPlaylistBeforeSwitch = {
        playlist: null,
        title: 'Liked Songs'
    };

    // Scroll to top
    mainContainer.scrollTop = 0;
}

// Show artist
function showArtist(artist) {
    contentTitle.textContent = artist;

    // Show the now playing container
    document.querySelector('.now-playing-container').style.display = 'flex';

    // Update playlist title
    document.querySelector('.playlist-container h2').textContent = `Songs by ${artist}`;

    // Filter tracks by artist
    const artistTracks = musicData.filter(track => track.artist === artist);

    // Render the artist tracks
    playlistTracks.innerHTML = '';

    artistTracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        const trackIndex = musicData.findIndex(t => t.id === track.id);
        if (trackIndex === currentTrackIndex) {
            trackElement.classList.add('active');
        }

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${track.duration}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = trackIndex;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }

            // Add to recently played
            addToRecentlyPlayed(track.id);
        });

        playlistTracks.appendChild(trackElement);
    });

    // Update the last playlist before switch
    lastPlaylistBeforeSwitch = {
        playlist: null,
        title: `Songs by ${artist}`
    };

    // Scroll to top
    mainContainer.scrollTop = 0;
}

// Show album
function showAlbum(album) {
    contentTitle.textContent = album;

    // Show the now playing container
    document.querySelector('.now-playing-container').style.display = 'flex';

    // Update playlist title
    document.querySelector('.playlist-container h2').textContent = album;

    // Filter tracks by album
    const albumTracks = musicData.filter(track => track.album === album);

    // Render the album tracks
    playlistTracks.innerHTML = '';

    albumTracks.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        const trackIndex = musicData.findIndex(t => t.id === track.id);
        if (trackIndex === currentTrackIndex) {
            trackElement.classList.add('active');
        }

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${track.duration}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = trackIndex;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }

            // Add to recently played
            addToRecentlyPlayed(track.id);
        });

        playlistTracks.appendChild(trackElement);
    });

    // Update the last playlist before switch
    lastPlaylistBeforeSwitch = {
        playlist: null,
        title: album
    };

    // Scroll to top
    mainContainer.scrollTop = 0;
}

// Create new playlist
function createNewPlaylist() {
    // Create a modal for new playlist (no login required now)
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Create New Playlist</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="playlist-name">Playlist Name</label>
                    <input type="text" id="playlist-name" placeholder="My Playlist">
                </div>
                <div class="form-group">
                    <label for="playlist-description">Description (optional)</label>
                    <textarea id="playlist-description" placeholder="Add an optional description"></textarea>
                </div>
                <div class="playlist-illustration">
                    <img src="https://via.placeholder.com/300/1DB954/FFFFFF?text=New+Playlist" alt="New Playlist">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary modal-cancel">Cancel</button>
                <button class="btn btn-primary modal-create">Create</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add animation class after a small delay
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('modal-animate');
    }, 10);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });

    modal.querySelector('.modal-cancel').addEventListener('click', () => {
        closeModal(modal);
    });

    modal.querySelector('.modal-create').addEventListener('click', () => {
        const playlistName = document.getElementById('playlist-name').value.trim();

        if (playlistName) {
            // Create new playlist
            const newPlaylist = {
                id: playlists.length + 1,
                name: playlistName,
                tracks: []
            };

            playlists.push(newPlaylist);

            // Update sidebar playlists
            updateSidebarPlaylists();

            // Show the new playlist
            showPlaylist(newPlaylist);

            // Close modal
            closeModal(modal);

            // Show notification
            showNotification(`Playlist "${playlistName}" created successfully!`);
        }
    });
}

// Close modal with animation
function closeModal(modal) {
    modal.querySelector('.modal-content').classList.remove('modal-animate');
    modal.querySelector('.modal-content').classList.add('modal-animate-out');

    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Update sidebar playlists
function updateSidebarPlaylists() {
    const playlistSection = document.querySelector('.playlist-section');

    // Keep the first two items (Create Playlist and Liked Songs)
    const firstItems = playlistSection.querySelectorAll('.playlist-item:nth-child(-n+2)');
    const divider = playlistSection.querySelector('.playlist-divider');

    // Clear playlist section
    playlistSection.innerHTML = '';

    // Add back the first items and divider
    firstItems.forEach(item => {
        playlistSection.appendChild(item);
    });
    playlistSection.appendChild(divider);

    // Add playlists
    playlists.forEach(playlist => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.textContent = playlist.name;

        playlistItem.addEventListener('click', () => {
            showPlaylist(playlist);
        });

        playlistSection.appendChild(playlistItem);
    });
}

// Initialize user menu
function initUserMenu() {
    const userMenu = document.querySelector('.user-menu');
    const username = document.querySelector('.username');

    userMenu.addEventListener('click', () => {
        if (isLoggedIn) {
            showUserDropdown();
        } else {
            showLoginModal();
        }
    });
}

// Show user dropdown
function showUserDropdown() {
    // Remove existing dropdown if any
    const existingDropdown = document.querySelector('.user-dropdown');
    if (existingDropdown) {
        document.body.removeChild(existingDropdown);
        return;
    }

    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown';

    const userMenuRect = document.querySelector('.user-menu').getBoundingClientRect();

    dropdown.style.top = `${userMenuRect.bottom + 5}px`;
    dropdown.style.right = `${window.innerWidth - userMenuRect.right}px`;

    dropdown.innerHTML = `
        <div class="dropdown-item">Profile</div>
        <div class="dropdown-item">Account</div>
        <div class="dropdown-item">Settings</div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item logout">Log out</div>
    `;

    document.body.appendChild(dropdown);

    // Add event listeners
    dropdown.querySelector('.logout').addEventListener('click', () => {
        logoutUser();
        document.body.removeChild(dropdown);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target) && !document.querySelector('.user-menu').contains(e.target)) {
            document.body.removeChild(dropdown);
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Show login modal
function showLoginModal() {
    // Create a modal for login
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Login to Soundwave</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="login-container">
                    <div class="login-form">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your username">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password">
                        </div>
                        <div class="form-options">
                            <label>
                                <input type="checkbox" id="remember-me"> Remember me
                            </label>
                            <a href="#" class="forgot-password">Forgot password?</a>
                        </div>
                    </div>
                    <div class="login-illustration">
                        <img src="assets/cartoon-illustration.jpg" alt="Login Illustration">
                        <p>Unlock your music experience</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary switch-to-register">Register</button>
                <button class="btn btn-primary login-btn">Login</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add animation class after a small delay
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('modal-animate');
    }, 10);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });

    modal.querySelector('.switch-to-register').addEventListener('click', () => {
        closeModal(modal);
        setTimeout(() => {
            showRegisterModal();
        }, 300);
    });

    modal.querySelector('.login-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username && password) {
            // Simulate login (in a real app, this would validate against a server)
            loginUser(username);
            closeModal(modal);
        }
    });
}

// Show register modal
function showRegisterModal() {
    // Create a modal for registration
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Create an Account</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="login-container">
                    <div class="login-form">
                        <div class="form-group">
                            <label for="reg-username">Username</label>
                            <input type="text" id="reg-username" placeholder="Choose a username">
                        </div>
                        <div class="form-group">
                            <label for="reg-email">Email</label>
                            <input type="email" id="reg-email" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="reg-password">Password</label>
                            <input type="password" id="reg-password" placeholder="Create a password">
                        </div>
                        <div class="form-group">
                            <label for="reg-confirm-password">Confirm Password</label>
                            <input type="password" id="reg-confirm-password" placeholder="Confirm your password">
                        </div>
                    </div>
                    <div class="login-illustration">
                        <img src="assets/3d-cartoon-dj-illustration.jpg" alt="Register Illustration">
                        <p>Start your musical journey today</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary switch-to-login">Login</button>
                <button class="btn btn-primary register-btn">Register</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add animation class after a small delay
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('modal-animate');
    }, 10);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });

    modal.querySelector('.switch-to-login').addEventListener('click', () => {
        closeModal(modal);
        setTimeout(() => {
            showLoginModal();
        }, 300);
    });

    modal.querySelector('.register-btn').addEventListener('click', () => {
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (username && email && password && password === confirmPassword) {
            // Simulate registration (in a real app, this would send data to a server)
            loginUser(username);
            closeModal(modal);

            // Show welcome notification
            showNotification(`Welcome to Soundwave, ${username}! Your account has been created.`);
        }
    });
}

// Login user
function loginUser(username) {
    isLoggedIn = true;
    currentUser = username;

    // Update UI
    document.querySelector('.username').textContent = username;

    // Show a notification
    showNotification(`Welcome, ${username}!`);
}

// Logout user
function logoutUser() {
    isLoggedIn = false;
    currentUser = null;

    // Update UI
    document.querySelector('.username').textContent = 'Guest';

    // Show a notification
    showNotification('You have been logged out');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    mainContainer.addEventListener('scroll', () => {
        if (mainContainer.scrollTop > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        mainContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Load track
function loadTrack(index) {
    const track = musicData[index];

    // Update audio source
    audioPlayer.src = track.audio;

    // Update track info
    albumArtwork.src = track.image;
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;

    // Reset progress
    progressBar.style.width = '0%';
    progressHandle.style.left = '0%';
    currentTimeEl.textContent = '0:00';

    // Highlight current track in playlist
    const playlistItems = document.querySelectorAll('.playlist-track');
    playlistItems.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === track.id) {
            item.classList.add('active');
        }
    });

    // Preload audio
    audioPlayer.load();
}

// Play/Pause track
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        audioPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }

    isPlaying = !isPlaying;
}

// Play next track
function playNext() {
    if (isShuffled) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * musicData.length);
        } while (randomIndex === currentTrackIndex);

        currentTrackIndex = randomIndex;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % musicData.length;
    }

    loadTrack(currentTrackIndex);

    if (isPlaying) {
        audioPlayer.play();
    }
}

// Play previous track
function playPrev() {
    if (audioPlayer.currentTime > 3) {
        // If current time is more than 3 seconds, restart the track
        audioPlayer.currentTime = 0;
    } else {
        // Play previous track
        currentTrackIndex = (currentTrackIndex - 1 + musicData.length) % musicData.length;
        loadTrack(currentTrackIndex);

        if (isPlaying) {
            audioPlayer.play();
        }
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
}

// Toggle repeat
function toggleRepeat() {
    if (repeatMode === 'none') {
        repeatMode = 'all';
        repeatBtn.classList.add('active');
    } else if (repeatMode === 'all') {
        repeatMode = 'one';
        repeatBtn.classList.add('active');
        repeatBtn.classList.add('repeat-one');
    } else {
        repeatMode = 'none';
        repeatBtn.classList.remove('active');
        repeatBtn.classList.remove('repeat-one');
    }
}

// Update progress bar
function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;

    progressBar.style.width = `${progressPercent}%`;
    progressHandle.style.left = `${progressPercent}%`;

    // Update time displays
    currentTimeEl.textContent = formatTime(currentTime);

    if (!isNaN(duration)) {
        totalDurationEl.textContent = formatTime(duration);
    }
}

// Set progress when clicking on progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
}

// Set volume when clicking on volume slider
function setVolume(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;

    volume = clickX / width;
    audioPlayer.volume = volume;

    volumeProgress.style.width = `${volume * 100}%`;
    volumeHandle.style.left = `${volume * 100}%`;
}

// Format time in MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Render playlist
function renderPlaylist() {
    playlistTracks.innerHTML = '';

    musicData.forEach((track, index) => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.dataset.id = track.id;

        if (index === currentTrackIndex) {
            trackElement.classList.add('active');
        }

        trackElement.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-info">
                <img class="track-image" src="${track.image}" alt="${track.title}">
                <div class="track-name-artist">
                    <div class="track-name">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration">${track.duration}</div>
        `;

        trackElement.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);

            if (!isPlaying) {
                togglePlay();
            } else {
                audioPlayer.play();
            }

            // Add to recently played
            addToRecentlyPlayed(track.id);
        });

        playlistTracks.appendChild(trackElement);
    });
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
progressContainer.addEventListener('click', setProgress);
volumeSlider.addEventListener('click', setVolume);

// Audio player events
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 'one') {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else if (repeatMode === 'all' || currentTrackIndex < musicData.length - 1) {
        playNext();
    } else {
        // Last track ended and not repeating
        isPlaying = false;
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

// Initialize player when page loads
window.addEventListener('load', initPlayer);

// Add drag functionality to progress and volume sliders
let isDraggingProgress = false;
let isDraggingVolume = false;

progressContainer.addEventListener('mousedown', () => {
    isDraggingProgress = true;
});

volumeSlider.addEventListener('mousedown', () => {
    isDraggingVolume = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDraggingProgress) {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / progressContainer.clientWidth;
        const clampedPos = Math.max(0, Math.min(1, pos));

        progressBar.style.width = `${clampedPos * 100}%`;
        progressHandle.style.left = `${clampedPos * 100}%`;

        audioPlayer.currentTime = clampedPos * audioPlayer.duration;
    }

    if (isDraggingVolume) {
        const rect = volumeSlider.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / volumeSlider.clientWidth;
        const clampedPos = Math.max(0, Math.min(1, pos));

        volumeProgress.style.width = `${clampedPos * 100}%`;
        volumeHandle.style.left = `${clampedPos * 100}%`;

        volume = clampedPos;
        audioPlayer.volume = volume;
    }
});

document.addEventListener('mouseup', () => {
    isDraggingProgress = false;
    isDraggingVolume = false;
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space bar: Play/Pause
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
    }

    // Left arrow: Rewind 5 seconds
    if (e.code === 'ArrowLeft') {
        audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
    }

    // Right arrow: Forward 5 seconds
    if (e.code === 'ArrowRight') {
        audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
    }

    // Up arrow: Volume up
    if (e.code === 'ArrowUp') {
        volume = Math.min(1, volume + 0.1);
        audioPlayer.volume = volume;
        volumeProgress.style.width = `${volume * 100}%`;
        volumeHandle.style.left = `${volume * 100}%`;
    }

    // Down arrow: Volume down
    if (e.code === 'ArrowDown') {
        volume = Math.max(0, volume - 0.1);
        audioPlayer.volume = volume;
        volumeProgress.style.width = `${volume * 100}%`;
        volumeHandle.style.left = `${volume * 100}%`;
    }
});