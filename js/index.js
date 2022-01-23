const d = document;
const $btnShare = d.getElementById("btn-share");
const $shareSocialMedia = d.querySelector(".share-social-media");
const $path = d.querySelector("path");
$btnShare.addEventListener("click", () => {
  $shareSocialMedia.classList.toggle("share-social-media--show");
  $btnShare.classList.toggle("main-personal-btn-is-active");
  $path.classList.toggle("share-icon-path");
});

window.addEventListener("resize", () => {
  if (
    $shareSocialMedia.classList.contains("share-social-media--show") &&
    $btnShare.classList.contains("main-personal-btn-is-active") &&
    $path.classList.contains("share-icon-path")
  ) {
    $shareSocialMedia.classList.remove("share-social-media--show");
    $btnShare.classList.remove("main-personal-btn-is-active");
    $path.classList.remove("share-icon-path");
  }
});
