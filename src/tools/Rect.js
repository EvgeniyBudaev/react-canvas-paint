import {Tool} from "./Tool";

export class Rect extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    this.mouseDown = true;
    this.ctx.beginPath(); // beginPath - начали рисовать новую линию
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL(); // сохраняем изображение с canvas
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height); // draw - рисовать
    }
  }

  draw(x, y, w, h) {
      const img = new Image();
      img.src = this.saved;
      img.onload = () => {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      }
      this.ctx.beginPath();
      this.ctx.rect(x, y, w, h);
      this.ctx.fill(); // заполняем прямоугольник цветом
      this.ctx.stroke(); // обводка прямоугольника
  }
}
