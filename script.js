document.addEventListener('DOMContentLoaded', () => {
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

    const leftNav = document.getElementById('left-nav');
    const mainContainer = document.getElementById('layout-container');

    const navToggleButton = document.getElementById('nav-toggle-btn');
    if (navToggleButton) {
        navToggleButton.addEventListener('click', () => {
            leftNav.classList.toggle('is-collapsed');
            mainContainer.classList.toggle('nav-collapsed');
        });
    }

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navCloseButton = document.getElementById('nav-close-btn');

    if (mobileMenuToggle && navCloseButton && leftNav) {
        mobileMenuToggle.addEventListener('click', () => {
            leftNav.classList.add('is-open');
        });

        navCloseButton.addEventListener('click', () => {
            leftNav.classList.remove('is-open');
        });
    }

    const profileBtn = document.getElementById('profile-btn');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');

    if (profileBtn && profileDropdownMenu) {
        profileBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            profileDropdownMenu.classList.toggle('is-visible');
        });

        document.addEventListener('click', (event) => {
            if (!profileDropdownMenu.contains(event.target) && !profileBtn.contains(event.target)) {
                profileDropdownMenu.classList.remove('is-visible');
            }
        });
    }

    const carouselStage = document.getElementById('carousel-track');
    if (carouselStage) {
        carouselStage.innerHTML = slidesData.map(data => `
            <div class="carousel__slide" data-id="${data.id}">
                <div class="slide__content">
                    <div class="slide__main-image-wrapper">
                        <img class="slide__main-image" src="${data.mainImg}" alt="${data.title}">
                        <div class="slide__overlay">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                            <div class="video-controls">
                                <div class="controls-left">
                                    <button class="control-btn play-pause-btn" title="Play/Pause"><i class="fa-solid fa-play"></i></button>
                                    <div class="volume-control">
                                        <button class="control-btn" title="Volume"><i class="fa-solid fa-volume-high"></i></button>
                                        <input type="range" min="0" max="100" value="70" class="volume-slider">
                                    </div>
                                </div>
                                <div class="controls-right">
                                    <button class="control-btn" title="Video Player"><i class="fa-solid fa-film"></i></button> <button class="control-btn" title="Settings"><i class="fa-solid fa-gear"></i></button>
                                    <button class="control-btn fullscreen-btn" title="Tela Cheia"><i class="fa-solid fa-expand"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide__info-panel">
                        <img class="info-panel__art" src="${data.albumArt}" alt="${data.artist}">
                        <p class="info-panel__label">Currently Playing:</p>
                        <h3 class="info-panel__song-title">${data.title}</h3>
                        <div class="info-panel__artist-info">
                            <h4>${data.artist}</h4>
                            <p class="genre">${data.genre}</p>
                            <p class="viewers">${data.views} viewers</p>
                        </div>
                        <div class="info-panel__location">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>${data.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        const slides = Array.from(carouselStage.children);
        const totalSlides = slides.length;
        let currentIndex = 0;

        let isDragging = false;
        let startX = 0;
        let finalDiffX = 0;
        let animationFrameId = 0;
        const dragThreshold = 150;
        const dragLimit = 250;
        
        let autoplayInterval;
        const autoplayDelay = 20000;
        let autoplayPausedByUser = false;

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarouselClasses(true);
        };

        const startAutoplay = () => {
            if (autoplayInterval) clearInterval(autoplayInterval);
            autoplayInterval = setInterval(() => {
                if (!autoplayPausedByUser) {
                    nextSlide();
                }
            }, autoplayDelay);
        };

        const pauseAutoplayTemporarily = () => {
            autoplayPausedByUser = true;
            if (autoplayInterval) clearInterval(autoplayInterval);
            setTimeout(() => {
                autoplayPausedByUser = false;
                startAutoplay();
            }, 3000);
        };

        function updateCarouselClasses(animate = true) {
            slides.forEach((slide, i) => {
                slide.style.transition = animate ? 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out, filter 0.6s ease-in-out' : 'none';
                slide.classList.remove('is-main', 'is-prev', 'is-next', 'is-hidden');
                slide.style.transform = '';
                slide.style.opacity = '';
                slide.style.filter = '';
                slide.style.zIndex = '';

                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                const nextIndex = (currentIndex + 1) % totalSlides;

                if (i === currentIndex) {
                    slide.classList.add('is-main');
                } else if (i === prevIndex) {
                    slide.classList.add('is-prev');
                } else if (i === nextIndex) {
                    slide.classList.add('is-next');
                } else {
                    slide.classList.add('is-hidden');
                }
            });
        }

        function setCarouselTransformsDuringDrag(diffX) {
            slides.forEach((slide, i) => {
                let baseTranslatePercent, baseOpacity, baseFilterValue, baseScale;
                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                const nextIndex = (currentIndex + 1) % totalSlides;

                if (isMobileView()) {
                    if (i === currentIndex) { baseTranslatePercent = -50; baseOpacity = 1; baseFilterValue = 0; baseScale = 1; } 
                    else if (i === prevIndex) { baseTranslatePercent = -100; baseOpacity = 0.7; baseFilterValue = 0.5; baseScale = 0.8; }
                    else if (i === nextIndex) { baseTranslatePercent = 0; baseOpacity = 0.7; baseFilterValue = 0.5; baseScale = 0.8; }
                    else { baseTranslatePercent = -50; baseOpacity = 0; baseFilterValue = 0; baseScale = 0.5; }
                } else {
                    if (i === currentIndex) { baseTranslatePercent = 0; baseOpacity = 1; baseFilterValue = 0; baseScale = 1; }
                    else if (i === prevIndex) { baseTranslatePercent = -30; baseOpacity = 0.6; baseFilterValue = 1.5; baseScale = 0.75; }
                    else if (i === nextIndex) { baseTranslatePercent = 30; baseOpacity = 0.6; baseFilterValue = 1.5; baseScale = 0.75; }
                    else { baseTranslatePercent = 0; baseOpacity = 0; baseFilterValue = 0; baseScale = 0.5; }
                }

                const slideRefWidth = slides[currentIndex].offsetWidth;
                const diffXNormalized = diffX / slideRefWidth;
                let newTranslatePercent = baseTranslatePercent, newOpacity = baseOpacity, newFilterValue = baseFilterValue, newScale = baseScale;
                const transitionThreshold = isMobileView() ? slideRefWidth * 0.5 : slideRefWidth * 0.3;
                const transitionRatio = Math.min(1, Math.abs(diffX) / transitionThreshold);

                if (i === currentIndex) {
                    newTranslatePercent = baseTranslatePercent + (diffXNormalized * 100);
                    newOpacity = baseOpacity - transitionRatio * 0.3;
                    newFilterValue = baseFilterValue + transitionRatio * 0.5;
                    newScale = baseScale - transitionRatio * 0.2;
                } else if (i === prevIndex && diffX > 0) {
                    const targetTranslate = isMobileView() ? -50 : 0;
                    newTranslatePercent = baseTranslatePercent + (targetTranslate - baseTranslatePercent) * transitionRatio;
                    newOpacity = baseOpacity + (1 - baseOpacity) * transitionRatio;
                    newFilterValue = baseFilterValue - baseFilterValue * transitionRatio;
                    newScale = baseScale + (1 - baseScale) * transitionRatio;
                } else if (i === nextIndex && diffX < 0) {
                    const targetTranslate = isMobileView() ? -50 : 0;
                    newTranslatePercent = baseTranslatePercent + (targetTranslate - baseTranslatePercent) * transitionRatio;
                    newOpacity = baseOpacity + (1 - baseOpacity) * transitionRatio;
                    newFilterValue = baseFilterValue - baseFilterValue * transitionRatio;
                    newScale = baseScale + (1 - baseScale) * transitionRatio;
                }

                slide.style.transform = `translateX(${Math.max(-100, Math.min(100, newTranslatePercent))}%) scale(${Math.max(0.5, Math.min(1, newScale))})`;
                slide.style.opacity = Math.max(0, Math.min(1, newOpacity));
                slide.style.filter = `blur(${Math.max(0, Math.min(1.5, newFilterValue))}px)`;
                slide.style.zIndex = (i === currentIndex) ? 10 : 5;
            });
        }

        function dragStart(e) {
            if (e.target.closest('.carousel__button')) return;
            isDragging = true;
            startX = e.touches ? e.touches[0].clientX : e.clientX;
            finalDiffX = 0;
            slides.forEach(slide => slide.style.transition = 'none');
            const carouselViewport = document.getElementById('carousel');
            carouselViewport.style.userSelect = 'none';
            carouselViewport.style.webkitUserSelect = 'none';
            cancelAnimationFrame(animationFrameId);
        }

        function dragMove(e) {
            if (!isDragging) return;
            const currentX = e.touches ? e.touches[0].clientX : e.clientX;
            finalDiffX = Math.max(-dragLimit, Math.min(currentX - startX, dragLimit));
            setCarouselTransformsDuringDrag(finalDiffX);
        }

        function dragEnd(e) {
            if (!isDragging) return;
            isDragging = false;
            cancelAnimationFrame(animationFrameId);
            const carouselViewport = document.getElementById('carousel');
            carouselViewport.style.userSelect = '';
            carouselViewport.style.webkitUserSelect = '';
            if (Math.abs(finalDiffX) > dragThreshold) {
                currentIndex = finalDiffX < 0 ? (currentIndex + 1) % totalSlides : (currentIndex - 1 + totalSlides) % totalSlides;
            }
            updateCarouselClasses(true);
            setTimeout(() => slides.forEach(slide => { slide.style.transform = ''; slide.style.opacity = ''; slide.style.filter = ''; slide.style.zIndex = ''; }), 50);
            startAutoplay();
        }

        function isMobileView() {
            return window.innerWidth <= 768;
        }

        const carouselViewport = document.getElementById('carousel');
        carouselViewport.addEventListener('mousedown', dragStart);
        carouselViewport.addEventListener('mouseup', dragEnd);
        carouselViewport.addEventListener('mouseleave', dragEnd);
        carouselViewport.addEventListener('mousemove', dragMove);
        carouselViewport.addEventListener('touchstart', dragStart, { passive: true });
        carouselViewport.addEventListener('touchend', dragEnd);
        carouselViewport.addEventListener('touchcancel', dragEnd);
        carouselViewport.addEventListener('touchmove', dragMove, { passive: false });
        
        carouselViewport.ondragstart = () => false;

        carouselViewport.addEventListener('click', (e) => {
            const clickedSlideElement = e.target.closest('.carousel__slide');
            if (!clickedSlideElement) return;

            const playBtn = e.target.closest('.play-pause-btn');
            const fullscreenBtn = e.target.closest('.fullscreen-btn');

            if (playBtn || fullscreenBtn) {
                e.preventDefault();
                const videoId = clickedSlideElement.dataset.id;
                if (videoId) {
                    window.location.href = `video-page.html?id=${videoId}`;
                }
                return;
            }

            
            if (Math.abs(finalDiffX) < 10) { 
                const isPrev = clickedSlideElement.classList.contains('is-prev');
                const isNext = clickedSlideElement.classList.contains('is-next');
                if (isPrev || isNext) {
                    pauseAutoplayTemporarily();
                    currentIndex = slides.indexOf(clickedSlideElement);
                    updateCarouselClasses(true);
                }
            }
        });

        document.getElementById('carousel-next').addEventListener('click', () => {
            pauseAutoplayTemporarily();
            nextSlide();
        });

        document.getElementById('carousel-prev').addEventListener('click', () => {
            pauseAutoplayTemporarily();
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarouselClasses(true);
        });

        updateCarouselClasses(false);
        startAutoplay();
    }

    const showMoreButtons = document.querySelectorAll('.nav-section__show-more');
    showMoreButtons.forEach(button => {
        const parentSection = button.closest('.nav-section');
        const list = parentSection.querySelector('ul');
        if (!list) return;
        const hiddenItems = list.querySelectorAll('li.is-hidden');
        if (hiddenItems.length === 0) {
            button.style.display = 'none';
            return;
        }
        button.dataset.state = 'more';
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const currentState = button.dataset.state;
            if (currentState === 'more') {
                hiddenItems.forEach(item => item.classList.remove('is-hidden'));
                button.textContent = 'Show Less';
                button.dataset.state = 'less';
            } else {
                hiddenItems.forEach(item => item.classList.add('is-hidden'));
                button.textContent = 'Show More';
                button.dataset.state = 'more';
            }
        });
    });

    const navItems = document.querySelectorAll('.nav-item, .genre-list__item');
    navItems.forEach(item => {
        const textElement = item.querySelector('.left-nav__text, span');
        if (textElement) {
            const text = textElement.textContent.trim();
            if (text) {
                item.setAttribute('title', text);
            }
        }
    });

    const navItemsWithLinks = document.querySelectorAll('.nav-section ul li a.nav-item');
    navItemsWithLinks.forEach(navLink => {
        const artistNameElement = navLink.querySelector('.left-nav__text');
        if (artistNameElement) {
            const artistName = artistNameElement.textContent.trim();
            const artistData = slidesData.find(data => data.artist === artistName);

            if (artistData) {
                navLink.href = `video-page.html?id=${artistData.id}`;
            }
        }
    });
});