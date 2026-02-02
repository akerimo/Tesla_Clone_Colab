const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};

document.querySelector(".backdrop").onclick = (e) => {
  closeMenu();
};

//scroll effect
document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener("scroll", () => {
  const direction =
    window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up";
  document.lastScrollPosition = window.pageYOffset;
  const sections = [...document.querySelectorAll("section")];

  if (document.onWayTo === null) {
    const destIndex =
      direction === "up"
        ? document.lastCentered - 1
        : document.lastCentered + 1;

    if (destIndex >= 0 && destIndex < sections.length) {
      document.onWayTo = destIndex;
      window.scroll(0, sections[destIndex].offsetTop);
    }
  }

  sections.forEach(sections, (index) => {
    if (window.pageYOffset === sections.offsetTop) {
      document.lastCentered = index;
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    }
  });

  document.lastScrollPosition = window.pageYOffset;
});
