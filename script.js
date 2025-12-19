document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.hero-img');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => {
            img.classList.remove('active');
        });
        images[index].classList.add('active');
    }

    // Next Button
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        });
    }

    
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        });
    }

   
    setInterval(() => {
        if(nextBtn) nextBtn.click();
    }, 2000);

    // Sidebar Logic
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('overlay');
    const sidebarTrigger = document.getElementById('sidebar-trigger'); 
    const sidebarClose = document.getElementById('sidebar-close'); 

    function openNav() {
        if(sidebar && overlay) {
            sidebar.style.left = "0";
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }

    function closeNav() {
        if(sidebar && overlay) {
            sidebar.style.left = "-380px";
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    if(sidebarTrigger) {
        sidebarTrigger.addEventListener('click', openNav);
    }

    if(sidebarClose) {
        sidebarClose.addEventListener('click', closeNav);
    }

    if(overlay) {
        overlay.addEventListener('click', closeNav);
    }

});