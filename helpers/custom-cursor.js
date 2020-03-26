const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;
    return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

export default class {

  constructor(el) {

    this.DOM = {el: el};
    this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
    this.bounds = this.DOM.circle.getBoundingClientRect();
    this.lastMousePos = {x:0, y:0};
    this.mousepos = {x: window.innerWidth/2, y: window.innerHeight/2}
    this.scale = 1;
    this.lastScale = 1;
    this.lastY = 0;
    console.log(this);
    requestAnimationFrame(() => this.render());
  }

  render() {
    this.lastMousePos.x = MathUtils.lerp(this.lastMousePos.x, this.mousepos.x - this.bounds.width/2, 0.15);
    this.lastMousePos.y = MathUtils.lerp(this.lastMousePos.y, this.mousepos.y - this.bounds.height/2, 0.15);
    this.direction = this.lastY - this.mousepos.y > 0 ? 'up' : 'down';
    this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
    this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.x)}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
    this.lastY = this.mousepos.y;
    requestAnimationFrame(() => this.render());
  }

  enter() {
    this.scale = 1.5;
  }

  leave() {
    this.scale = 1;
  }

  click() {
    this.lastScale = .4;
  }

  getMousePos(ev) {
    let posx = 0;
    let posy = 0;
    if (!ev) e = window.event;
    if (ev.pageX || ev.pageY)   {
      posx = ev.pageX;
      posy = ev.pageY;
    }
    else if (ev.clientX || ev.clientY)  {
      posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    this.mousepos = { x : posx, y : posy }
  };
}
