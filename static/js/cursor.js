{
  const MathUtils = {
    lineEq: (y2, y1, x2, x1, currentVal) => {
      const m = (y2 - y1) / (x2 - x1);
      const b = y1 - m * x1;
      return m * currentVal + b;
    },
    lerp: (a, b, n) => (1 - n) * a + n * b,
    getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
  };

  const getMousePos = (ev) => {
    let posx = 0;
    let posy = 0;
    if (!ev) e = window.event;
    if (ev.pageX || ev.pageY)   {
      posx = ev.pageX;
      posy = ev.pageY;
    }
    else if (ev.clientX || ev.clientY)  {
      posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
      posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }
    return { x : posx, y : posy }
  };

  let winsize;
  const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  calcWinsize();
  window.addEventListener('resize', calcWinsize);

  let mousepos = {x: winsize.width/2, y: winsize.height/2};
  window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));




}
