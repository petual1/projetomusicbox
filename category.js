// --- BANCO DE DADOS INICIAL ---
const initialArtistData = [
    { id: 1, artist: 'Linkin Park', title: 'Up From The Bottom', views: '192K', mainImg: 'images/mainimgs/linkin.jpg', albumArt: 'images/icons/linkinicon.jpg' },
    { id: 2, artist: 'Sabrina Carpenter', title: 'Busy Woman', views: '250K', mainImg: 'images/mainimgs/sabrina.webp', albumArt: 'images/icons/sabrinaicon.jpg' },
    { id: 3, artist: 'The Weeknd', title: 'Timeless', views: '310K', mainImg: 'images/mainimgs/thewknd.webp', albumArt: 'images/icons/thewinkidcon.jpg' },
    { id: 4, artist: 'Spiritbox', title: 'Fata Morgana', views: '112K', mainImg: 'images/mainimgs/spiritbox.jpg', albumArt: 'images/icons/spiritboxicon.jpg' },
    { id: 5, artist: 'Thornhill', title: 'The Hellfire Club', views: '88K', mainImg: 'images/mainimgs/thornhill.jpeg', albumArt: 'images/icons/thornhillicon.jpg' },
    { id: 6, artist: 'Architects', title: 'Seeing Red', views: '150K', mainImg: 'images/mainimgs/architects.jpg', albumArt: 'images/icons/architectsicon.jpg' },
    { id: 7, artist: 'Bring Me The Horizon', title: 'Kool-Aid', views: '215K', mainImg: 'images/mainimgs/bringme.webp', albumArt: 'images/icons/bringmeicon.jpg' },
    { id: 8, artist: 'Invent Animate', title: 'Heavener', views: '75K', mainImg: 'images/mainimgs/invent.jpg', albumArt: 'images/icons/inventicon.jpg' },
    { id: 9, artist: 'Cigarettes After Sex', title: 'Tejano Blue', views: '180K', location: 'El Paso, USA - Don Haskins Center', mainImg: 'images/mainimgs/cigarettes.jpg', albumArt: 'images/icons/cigarrettesicon.jpg' },
    { id: 10, artist: 'Ne Obliviscaris', title: 'Graal', views: '65K', location: 'Melbourne, AU - Max Watts', mainImg: 'images/mainimgs/neobli.jpg', albumArt: 'images/icons/neicon.jpg' },
    { id: 11, artist: 'Doja Cat', genre: 'Pop', title: 'Agora Hills', views: '450K', location: 'Los Angeles, USA - Crypto.com Arena', mainImg: 'images/mainimgs/dojacat.jpg', albumArt: 'images/icons/dojacaticon.jpg' },
    { id: 12, artist: 'Travis Scott', genre: 'Hip-Hop', title: 'FE!N', views: '510K', location: 'Houston, USA - Toyota Center', mainImg: 'images/mainimgs/travis scott.jpg', albumArt: 'images/icons/travisicon.jpg' }
];

// --- BANCO DE VÍDEOS  ---
const videoPool = initialArtistData.map(artist => ({
    id: artist.id, 
    title: artist.title,
    artist: artist.artist,
    artistIcon: artist.albumArt,
    thumb: artist.mainImg,
    viewers: artist.views
}));

function populateVideoList(targetSize) {
    let videos = [];
    for (let i = 0; i < targetSize; i++) {
        videos.push(videoPool[i % videoPool.length]);
    }
    return videos;
}

// --- DADOS DAS CATEGORIAS ---
const categoryData = {
    'pop': { title: 'Pop', stats: '31M Followers • 432K Viewers', bannerImg: 'images/mainimgs/sabrina.webp', videos: populateVideoList(20) },
    'country': { title: 'Country', stats: '15M Followers • 180K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'latin': { title: 'Latin', stats: '80M Followers • 750K Viewers', bannerImg: 'images/mainimgs/thewknd.webp', videos: populateVideoList(20) },
    'hip-hop': { title: 'Hip-Hop', stats: '60M Followers • 510K Viewers', bannerImg: 'images/mainimgs/travis scott.jpg', videos: populateVideoList(20) },
    'r-b': { title: 'R&B', stats: '40M Followers • 410K Viewers', bannerImg: 'images/mainimgs/thewknd.webp', videos: populateVideoList(20) },
    'rock': { title: 'Rock', stats: '45M Followers • 312K Viewers', bannerImg: 'images/mainimgs/linkin.jpg', videos: populateVideoList(20) },
    'trap': { title: 'Trap', stats: '25M Followers • 300K Viewers', bannerImg: 'images/mainimgs/travis scott.jpg', videos: populateVideoList(20) },
    'k-pop': { title: 'K-Pop', stats: '90M Followers • 1.2M Viewers', bannerImg: 'images/mainimgs/dojacat.jpg', videos: populateVideoList(20) },
    'metal': { title: 'Metal', stats: '10M Followers • 112K Viewers', bannerImg: 'images/mainimgs/spiritbox.jpg', videos: populateVideoList(20) },
    'mpb': { title: 'MPB', stats: '5M Followers • 95K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'indie': { title: 'Indie', stats: '12M Followers • 150K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'electronic': { title: 'Electronic', stats: '20M Followers • 250K Viewers', bannerImg: 'images/mainimgs/thewknd.webp', videos: populateVideoList(20) },
    'jazz': { title: 'Jazz', stats: '8M Followers • 70K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'classical': { title: 'Classical', stats: '9M Followers • 110K Viewers', bannerImg: 'images/mainimgs/neobli.jpg', videos: populateVideoList(20) },
    'folk-acoustic': { title: 'Folk & Acoustic', stats: '11M Followers • 130K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'blues': { title: 'Blues', stats: '7M Followers • 60K Viewers', bannerImg: 'images/mainimgs/thewknd.webp', videos: populateVideoList(20) },
    'reggae': { title: 'Reggae', stats: '30M Followers • 200K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'chill': { title: 'Chill', stats: '14M Followers • 100K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) },
    'instrumental': { title: 'Instrumental', stats: '4M Followers • 90K Viewers', bannerImg: 'images/mainimgs/neobli.jpg', videos: populateVideoList(20) },
    'sleep': { title: 'Sleep', stats: '6M Followers • 50K Viewers', bannerImg: 'images/mainimgs/cigarettes.jpg', videos: populateVideoList(20) }
};


document.addEventListener('DOMContentLoaded', () => {

    function renderVideos(videos, showLive) {
        const videoGrid = document.querySelector('.video-grid');
        if (!videoGrid) return;
        videoGrid.innerHTML = ''; 

        videos.forEach(video => {
            const liveBadgeHTML = showLive ? '<span class="live-badge">LIVE</span>' : '';
            const videoCardHTML = `
                <div class="video-card" data-video-id="${video.id}">
                    <img src="${video.thumb}" alt="Video thumbnail for ${video.title}" class="video-card__thumbnail">
                    <div class="video-card__overlay">
                        ${liveBadgeHTML}
                        <span class="viewer-count">${video.viewers} Viewers</span>
                    </div>
                    <div class="video-card__info">
                        <img src="${video.artistIcon}" alt="${video.artist} icon" class="video-card__artist-icon">
                        <div class="video-card__text">
                            <h4 class="video-card__title">${video.title}</h4>
                            <p class="video-card__artist">${video.artist}</p>
                        </div>
                    </div>
                </div>
            `;
            videoGrid.innerHTML += videoCardHTML;
        });
    }

    function loadCategoryPage() {
        const params = new URLSearchParams(window.location.search);
        const genre = params.get('genre');

        if (!genre || !categoryData[genre]) {
            const categoryPageContainer = document.querySelector('.category-page');
            if (categoryPageContainer) {
                categoryPageContainer.innerHTML = '<h1 style="text-align: center; margin-top: 50px;">Categoria não encontrada!</h1>';
            }
            return;
        }

        const data = categoryData[genre];

        document.title = `${data.title} - MusicBox`;
        document.querySelector('.category-banner__title').textContent = data.title;
        document.querySelector('.category-banner__image').src = data.bannerImg;
        document.querySelector('.category-banner__image').alt = `Banner para ${data.title}`;
        document.querySelector('.category-info__stats').textContent = data.stats;
        
        renderVideos(data.videos, true);
        document.querySelector('.video-grid').classList.add('is-clickable');
    }

    const followButton = document.querySelector('.category-info__follow-btn');
    if (followButton) {
        followButton.addEventListener('click', () => {
            followButton.classList.toggle('is-following');
            const followText = followButton.querySelector('span');
            followText.textContent = followButton.classList.contains('is-following') ? 'Following' : 'Follow';
        });
    }

    const categoryTabs = document.querySelectorAll('.tab-item');
    const videoGrid = document.querySelector('.video-grid');
    if (categoryTabs.length > 0 && videoGrid) {
        const genreParam = new URLSearchParams(window.location.search).get('genre');
        if (!genreParam || !categoryData[genreParam]) return; 
        
        const data = categoryData[genreParam];

        categoryTabs.forEach(clickedTab => {
            clickedTab.addEventListener('click', (e) => {
                e.preventDefault();
                categoryTabs.forEach(tab => tab.classList.remove('is-active'));
                clickedTab.classList.add('is-active');
                
                const tabType = clickedTab.dataset.tab;
                if (tabType === 'live') {
                    renderVideos(data.videos, true);
                    videoGrid.classList.add('is-clickable'); 
                } else if (tabType === 'videos') {
                    renderVideos(data.videos, false);
                    videoGrid.classList.remove('is-clickable'); 
                } else if (tabType === 'clips') {
                    videoGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Nenhum clipe disponível para esta categoria.</p>';
                    videoGrid.classList.remove('is-clickable'); 
                }
            });
        });
    }

    if (videoGrid) {
        videoGrid.addEventListener('click', (e) => {
            if (!videoGrid.classList.contains('is-clickable')) {
                return;
            }

            const clickedCard = e.target.closest('.video-card');
            if (clickedCard) {
                const videoId = clickedCard.dataset.videoId;
                if (videoId) {
                    window.location.href = `video-page.html?id=${videoId}`;
                }
            }
        });
    }

    function setupDropdown(btnId, menuId, labelId) {
        const dropdownBtn = document.getElementById(btnId);
        const dropdownMenu = document.getElementById(menuId);
        const dropdownLabel = document.getElementById(labelId);

        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllDropdowns(menuId);
                dropdownMenu.classList.toggle('is-active');
            });

            dropdownMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' && dropdownLabel) {
                    dropdownLabel.textContent = e.target.textContent;
                }
            });
        }
    }

    function closeAllDropdowns(excludeMenuId) {
        document.querySelectorAll('.filter-dropdown-menu').forEach(menu => {
            if (menu.id !== excludeMenuId) {
                menu.classList.remove('is-active');
            }
        });
    }

    setupDropdown('sort-dropdown-btn', 'sort-dropdown-menu', 'sort-label');
    setupDropdown('lang-dropdown-btn', 'lang-dropdown-menu', 'lang-label');

    document.addEventListener('click', () => {
        closeAllDropdowns(null);
    });
    
    if (document.querySelector('.category-page')) {
        loadCategoryPage();
    }
});