document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE ---
    const slidesData = [
        { id: 1, artist: 'Linkin Park', genre: 'Alternative Rock', title: 'Up From The Bottom', views: '192K', location: 'Sao Paulo, BR - Morumbi Stadium', mainImg: 'images/mainimgs/linkin.jpg', albumArt: 'images/icons/linkinicon.jpg' },
        { id: 2, artist: 'Sabrina Carpenter', genre: 'Pop', title: 'Busy Woman', views: '250K', location: 'New York, USA - Ball Arena', mainImg: 'images/mainimgs/sabrina.webp', albumArt: 'images/icons/sabrinaicon.jpg' },
        { id: 3, artist: 'The Weeknd', genre: 'R&B / Pop', title: 'Timeless', views: '310K', location: 'Toronto, CA - SoFi Stadium', mainImg: 'images/mainimgs/thewknd.webp', albumArt: 'images/icons/thewinkidcon.jpg' },
        { id: 4, artist: 'Spiritbox', genre: 'Metalcore', title: 'Fata Morgana', views: '112K', location: 'London, UK - Download Fest', mainImg: 'images/mainimgs/spiritbox.jpg', albumArt: 'images/icons/spiritboxicon.jpg' },
        { id: 5, artist: 'Thornhill', genre: 'Alternative Metal', title: 'The Hellfire Club', views: '88K', location: 'Melbourne, AU - Forum', mainImg: 'images/mainimgs/thornhill.jpeg', albumArt: 'images/icons/thornhillicon.jpg' },
        { id: 6, artist: 'Architects', genre: 'Metalcore', title: 'Seeing Red', views: '150K', location: 'London, UK - Wembley Arena', mainImg: 'images/mainimgs/architects.jpg', albumArt: 'images/icons/architectsicon.jpg' },
        { id: 7, artist: 'Bring Me The Horizon', genre: 'Rock', title: 'Kool-Aid', views: '215K', location: 'Sheffield, UK - FlyDSA Arena', mainImg: 'images/mainimgs/bringme.webp', albumArt: 'images/icons/bringmeicon.jpg' },
        { id: 8, artist: 'Invent Animate', genre: 'Progressive Metalcore', title: 'Heavener', views: '75K', location: 'Port Neches, USA - Hebert Hall', mainImg: 'images/mainimgs/invent.jpg', albumArt: 'images/icons/inventicon.jpg' },
        { id: 9, artist: 'Cigarettes After Sex', genre: 'Dream Pop', title: 'Tejano Blue', views: '180K', location: 'El Paso, USA - Don Haskins Center', mainImg: 'images/mainimgs/cigarettes.jpg', albumArt: 'images/icons/cigarrettesicon.jpg' },
        { id: 10, artist: 'Ne Obliviscaris', genre: 'Progressive Metal', title: 'Graal', views: '65K', location: 'Melbourne, AU - Max Watts', mainImg: 'images/mainimgs/neobli.jpg', albumArt: 'images/icons/neicon.jpg' },
        { id: 11, artist: 'Doja Cat', genre: 'Pop', title: 'Agora Hills', views: '450K', location: 'Los Angeles, USA - Crypto.com Arena', mainImg: 'images/mainimgs/dojacat.jpg', albumArt: 'images/icons/dojacaticon.jpg' },
        { id: 12, artist: 'Travis Scott', genre: 'Hip-Hop', title: 'FE!N', views: '510K', location: 'Houston, USA - Toyota Center', mainImg: 'images/mainimgs/travis scott.jpg', albumArt: 'images/icons/travisicon.jpg' }
    ];

    // --- PAGE INITIALIZATION ---
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    const videoData = slidesData.find(video => video.id == videoId);

    if (videoData) {
        document.title = `${videoData.artist} - MusicBox`;
        document.getElementById('video-player-image').src = videoData.mainImg;
        document.getElementById('video-background-image').src = videoData.mainImg;
        document.getElementById('channel-icon').src = videoData.albumArt;
        document.getElementById('channel-name').textContent = videoData.artist;
        document.getElementById('channel-location').textContent = videoData.location;
        document.getElementById('stream-views').textContent = videoData.views;
        document.getElementById('stream-duration').textContent = '03:06:23';
        document.getElementById('song-album-art').src = videoData.albumArt;
        document.getElementById('song-title').textContent = videoData.title;
        document.getElementById('song-genre').textContent = videoData.genre;
    } else {
        const infoColumn = document.querySelector('.video-info-column');
        if(infoColumn) {
            infoColumn.innerHTML = '<h1>Video not found.</h1>';
        }
    }

    // --- FULLSCREEN LOGIC ---
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const playerArea = document.querySelector('.video-player-area');
    if (fullscreenBtn && playerArea) {
        const fullscreenIcon = fullscreenBtn.querySelector('i');
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                playerArea.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else { document.exitFullscreen(); }
        }
        fullscreenBtn.addEventListener('click', toggleFullScreen);
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                fullscreenIcon.classList.replace('fa-expand', 'fa-compress');
            } else {
                fullscreenIcon.classList.replace('fa-compress', 'fa-expand');
            }
        });
    }

    // --- CHAT PANEL LOGIC ---
    const chatToggleButton = document.getElementById('chat-toggle-btn');
    const chatPanel = document.getElementById('stream-chat-panel');
    const chatCloseButton = document.getElementById('chat-close-btn');
    if (chatToggleButton && chatPanel && chatCloseButton) {
        function toggleChat() { chatPanel.classList.toggle('visible'); }
        chatToggleButton.addEventListener('click', toggleChat);
        chatCloseButton.addEventListener('click', toggleChat);
    }

    // --- FOLLOW BUTTON LOGIC ---
    const followButton = document.querySelector('.follow-btn');
    if (followButton) {
        followButton.addEventListener('click', () => {
            followButton.classList.toggle('is-following');
            const followText = followButton.querySelector('span');
            if (followButton.classList.contains('is-following')) {
                followText.textContent = 'Following';
            } else {
                followText.textContent = 'Follow';
            }
        });
    }

    // --- SUBSCRIBE DROPDOWN LOGIC ---
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeMenu = document.getElementById('subscribe-menu');
    const subscribeArrow = document.getElementById('subscribe-arrow');

    if (subscribeBtn && subscribeMenu && subscribeArrow) {
        subscribeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = subscribeMenu.classList.toggle('is-active');
            subscribeBtn.classList.toggle('is-open', isOpen);
            subscribeArrow.classList.toggle('fa-chevron-up', !isOpen);
            subscribeArrow.classList.toggle('fa-chevron-down', isOpen);
        });
        
        document.addEventListener('click', (e) => {
            if (!subscribeBtn.contains(e.target) && !subscribeMenu.contains(e.target)) {
                subscribeMenu.classList.remove('is-active');
                subscribeBtn.classList.remove('is-open');
                subscribeArrow.classList.remove('fa-chevron-down');
                subscribeArrow.classList.add('fa-chevron-up');
            }
        });
    }
});