function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');
  const sliderLogos = document.querySelectorAll('.appear');

  function checkSlide() {
    
    console.log(window.scrollY);
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      
      if (isHalfShown && window.scrollY > 250) {
        sliderImage.classList.add('active');
      }
      else {
        sliderImage.classList.remove('active');
      }
    });
    sliderLogos.forEach(sliderLogo => {
        
        if (window.scrollY > 1150) {
          sliderLogo.classList.add('now');
        }
        else{
          sliderLogo.classList.remove('now');
        }
        
      });
  }

  window.addEventListener('scroll', debounce(checkSlide));

