document.addEventListener('DOMContentLoaded', () => {
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

});