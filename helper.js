const info = document.getElementById("info");
const info_section = document.getElementById("info-section");
const profile = document.getElementById("image");
let info_displayed = false;

info.addEventListener("click", () => {
  if (!info_displayed) {
    info_section.style.display = "inline-block";
    info_displayed = true;
  } else if (info_displayed) {
    info_section.style.display = "none";
    info_displayed = false;
  }
});

info.addEventListener("mouseenter", () => {
  info.style.color = "var(--red)";
  info.style.fontSize = "40px";
  info.style.top = "-5px";
});

info.addEventListener("mouseleave", () => {
  info.style.color = "black";
  info.style.fontSize = "30px";
  info.style.top = "-10px";
});
