document.addEventListener("mousedown", grabHero);

function grabHero(event) {
  event.preventDefault();
  if (!event.target.classList.contains("draggable")) return;

  let targetHero = event.target;
  let shiftX = event.clientX - targetHero.getBoundingClientRect().left;
  let shiftY = event.clientY - targetHero.getBoundingClientRect().top;

  targetHero.style.position = "absolute";
  let bodyHeight = document.body.scrollHeight;
  let heroHeight = targetHero.getBoundingClientRect().height;
  moveHero(event.pageX, event.pageY);

  function moveHero(pageX, pageY) {
    targetHero.style.left = pageX - shiftX + "px";

    if (pageY - shiftY < 0) {
      targetHero.style.top = "0px";
    } else if (pageY - shiftY + heroHeight > bodyHeight) {
      targetHero.style.top = bodyHeight - heroHeight + "px";
    } else {
      targetHero.style.top = pageY - shiftY + "px";
    }

    if (pageY - window.pageYOffset < shiftY) {
      window.scrollBy(0, targetHero.getBoundingClientRect().top);
    }

    if (
      pageY - window.pageYOffset + heroHeight - shiftY >
      document.documentElement.clientHeight
    ) {
      window.scrollBy(
        0,
        bodyHeight - targetHero.getBoundingClientRect().top - heroHeight
      );
    }
  }

  function onMouseMove(event) {
    moveHero(event.pageX, event.pageY);
  }
  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}
