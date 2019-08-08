const onWindowLoad = function () {
  let preloader = document.getElementById('page-preloader');
  let pageContent = document.getElementById('fullpage');
  // let images = Array.from(document.images);

  // images.forEach((el) => {
  //   image_clone = new Image();
  //   image_clone.src = el.src;
  // })

  if (!preloader.classList.contains('hide')) {
    preloader.classList.add('hide');
  }

  document.body.style.backgroundColor = 'white';
  if (mainMenu) {
    mainMenu.style.opacity = '1';
  }
  pageContent.style.opacity = '1';
}
window.onload = onWindowLoad;


// Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
