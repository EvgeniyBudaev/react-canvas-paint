import {makeAutoObservable} from "mobx";

class CanvasState {
  canvas = null;
  constructor() {
    makeAutoObservable(this) // делает данные, которые хранянтся в этом классе - отслеживаемыми
  }

  setCanvas(canvas) {
    this.canvas = canvas
  }
}

export default new CanvasState()