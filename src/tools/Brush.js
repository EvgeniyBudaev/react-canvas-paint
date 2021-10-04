import {Tool} from "./Tool";

export class Brush extends Tool {
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
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop); // moveTo - перемещение курсора
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop); // draw - рисовать
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y); // lineTo - рисовать линию
    this.ctx.stroke(); // stroke - чтобы цвет появился у линии
  }
}
