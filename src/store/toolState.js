import {makeAutoObservable} from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this) // делает данные, которые хранянтся в этом классе - отслеживаемыми
  }

  setTool(tool) {
    this.tool = tool
  }
}

export default new ToolState()