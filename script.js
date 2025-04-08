document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const slides = Array.from(wrapper.querySelectorAll('img'));
    const buttons = Array.from(document.querySelectorAll('.pagination button'));

    let currentIndex = 0;   
    updateSlider();
  
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = Number(btn.dataset.index);
        currentIndex = index;
        updateSlider();
      });
    });
  

    slides.forEach((img, index) => {
      img.addEventListener('click', () => {
        if (index === slides.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex = index+1;
        }
        updateSlider();
      });
    });
  

    function updateSlider() {
        if (currentIndex === 0){
            wrapper.style.transform = `translateX(50%)`;
        }
        const isMobilePortrait = window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches;

        const shift = isMobilePortrait ? 82 : 30;
        wrapper.style.transform = `translateX(-${currentIndex * shift}%)`;
        
  
      slides.forEach((slide, idx) => {
        slide.classList.remove('opacity-03');
  
        if (idx <= currentIndex - 1 || idx >= currentIndex + 1) {
          slide.classList.add('opacity-03');
        }
      });
  
      buttons.forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === currentIndex) {
          btn.classList.add('active');
        }
      });
    }
  });
  