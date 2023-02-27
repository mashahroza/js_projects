const ballEl = document.querySelector('#ball');
const fieldEl = document.querySelector('#field');

fieldEl.addEventListener('click', onFieldEl);

function onFieldEl(event) {
    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - fieldCoords.top - fieldEl.clientTop - ballEl.clientHeight / 2,
      left: event.clientX - fieldCoords.left - fieldEl.clientLeft - ballEl.clientWidth / 2
    };

    // console.log(ballCoords.top)

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (ballCoords.left + ballEl.clientWidth > fieldEl.clientWidth) {
      ballCoords.left = fieldEl.clientWidth - ballEl.clientWidth;
    }

    if (ballCoords.top + ballEl.clientHeight > fieldEl.clientHeight) {
      ballCoords.top = fieldEl.clientHeight - ballEl.clientHeight;
    }

    ballEl.style.left = ballCoords.left + 'px';
    ballEl.style.top = ballCoords.top + 'px';
  }
