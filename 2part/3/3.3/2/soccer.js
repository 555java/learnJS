document.addEventListener("mousedown", grabHero);

function grabHero(event) {
  event.preventDefault();
  if (!event.target.classList.contains("draggable")) return;

  let targetHero = event.target;
  let shiftX = event.clientX - targetHero.getBoundingClientRect().left;
  let shiftY = event.clientY - targetHero.getBoundingClientRect().top;

  targetHero.style.position = "absolute";
  let bodyHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  let heroHeight = targetHero.getBoundingClientRect().height;
  moveHero(event.pageX, event.pageY);

  function moveHero(pageX, pageY) {
    targetHero.style.left = pageX - shiftX + "px";

    if (pageY - shiftY <= 0) {
      targetHero.style.top = "0px";
    } else if (pageY - shiftY + heroHeight > bodyHeight) {
      targetHero.style.top = bodyHeight - heroHeight + "px";
    } else {
      targetHero.style.top = pageY - shiftY + "px";
    }

    if (targetHero.getBoundingClientRect().top < 0) {
      window.scrollBy(0, targetHero.getBoundingClientRect().top);
    }

    if (
      targetHero.getBoundingClientRect().bottom >
      document.documentElement.clientHeight
    ) {
      window.scrollBy(
        0,
        targetHero.getBoundingClientRect().bottom -
          document.documentElement.clientHeight
      );
    }
  }

  function onMouseMove(event) {
    moveHero(event.pageX, event.pageY);
  }
  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}
