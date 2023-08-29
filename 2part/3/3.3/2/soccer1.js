document.addEventListener("mousedown", grabHero);

function grabHero(event) {
  event.preventDefault();
  if (!event.target.classList.contains("draggable")) return;

  let targetHero = event.target;
  let shiftX = event.clientX - targetHero.getBoundingClientRect().left;
  let shiftY = event.clientY - targetHero.getBoundingClientRect().top;

  targetHero.style.position = "fixed";
  let bodyHeight = document.body.scrollHeight;
  let heroHeight = targetHero.getBoundingClientRect().height;

  moveHero(event.clientX, event.clientY);

  function moveHero(clientX, clientY) {
    console.log(clientX, clientY, shiftX, shiftY);
    if (clientY - shiftY < 0) {
      targetHero.style.top = "0px";
      window.scrollBy(0, -1);
    } else if (
      clientY - shiftY + heroHeight >
      document.documentElement.clientHeight
    ) {
      targetHero.style.top =
        document.documentElement.clienHeight - heroHeight + "px";
      window.scrollBy(0, 1);
    } else {
      targetHero.style.top = clientY - shiftY + "px";
    }

    if (clientX - shiftX < 0) {
    } else {
      targetHero.style.left = clientX - shiftX + "px";
    }
  }

  function onMouseMove(event) {
    moveHero(event.clientX, event.clientY);
  }
  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}
