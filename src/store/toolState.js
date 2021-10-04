import {makeAutoObservable} from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this) // делает данные, которые хранятся в этом классе - отслеживаемыми
  }

  setTool(tool) {
    this.tool = tool
  }
}

export default new ToolState()