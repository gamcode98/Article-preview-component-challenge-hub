const d = document;
const $btnShare = d.getElementById("btn-share");
const $shareSocialMedia = d.querySelector(".share-social-media");
const $path = d.querySelector("path");
$btnShare.addEventListener("click", () => {
  $shareSocialMedia.classList.toggle("share-social-media--show");
  $btnShare.classList.toggle("main-personal-btn-is-active");
  $path.classList.toggle("share-icon-path");
});
