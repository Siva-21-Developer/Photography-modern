let icon = document.querySelector(".bar-icon");
let navCon = document.querySelector(".nav-con");
let vid = document.querySelectorAll(".videos");

icon.addEventListener("click", () => {
  navCon.classList.toggle("active");
});

setInterval(() => {
  let container = document.querySelectorAll(".container");
  document.querySelector(".textcon").appendChild(container[0]);
}, 5000);

setInterval(() => {
  let photoContainer = document.querySelectorAll(".photo-container");
  document.querySelector(".photo-gallery").appendChild(photoContainer[0]);
}, 5000);

const moveforward = () => {
  let vid = document.querySelectorAll(".videos");
  document.querySelector(".video-container").appendChild(vid[0]);
};

setInterval(moveforward, 10000);

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".aboutcard");
  const imgCon = card.querySelector(".imgcon");

  card.addEventListener("mousemove", (e) => {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (mouseY / cardHeight) * 20;
    const rotateY = (mouseX / cardWidth) * -20;
    imgCon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    imgCon.style.boxShadow = `${-rotateY * 2}px ${
      rotateX * 2
    }px 40px rgba(0, 0, 0, 0.4)`;
  });

  card.addEventListener("mouseleave", () => {
    imgCon.style.transform = `rotateX(0deg) rotateY(0deg)`;
    imgCon.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.2)`;
  });
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
