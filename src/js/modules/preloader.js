function onWindowLoad() {
  let preloader = document.getElementById('page-preloader');
  let preloaderLogo = preloader.querySelector('.preloader-logo');
  let pageContent = document.getElementById('fullpage');
  let images = Array.from(document.images);
  let imagesCount = 0;
  let currentPreloaderHeight = 0;
  let preloaderHeight = 340;

  images.forEach((el) => {
    let imageClone = new Image();
    imageClone.onload = onImageLoad;
    imageClone.onerror = onImageLoad;
    imageClone.src = el.src;
  })

  function onImageLoad() {
    imagesCount++;
    currentPreloaderHeight = Math.floor(preloaderHeight / images.length * imagesCount);
    preloaderLogo.style.height = currentPreloaderHeight + 'px';
    if (imagesCount == images.length) {
      setTimeout(onPreloaderTransitionend, 1500);
    }
  }

  // preloaderLogo.addEventListener('mozTransitionEnd', onPreloaderTransitionend);
  // preloaderLogo.addEventListener('oTransitionEnd', onPreloaderTransitionend);
  // preloaderLogo.addEventListener('webkitTransitionEnd ', onPreloaderTransitionend);
  // preloaderLogo.addEventListener('transitionend', onPreloaderTransitionend);


  function onPreloaderTransitionend() {
    if (!preloader.classList.contains('hide')) {
      preloader.classList.add('hide');
    }
    // document.body.style.backgroundColor = 'white';
    pageContent.style.opacity = '1';
  }

}
window.onload = onWindowLoad;


// Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
