import { Graphics } from 'pixi.js';

export class Cell extends Graphics {
  constructor() {
    super();
  }

  buildCell() {
    this.lineStyle(5, 0x222222);
    this.beginFill(0x333333);
    this.drawRect(0, 0, 50, 50);
    this.endFill();
  }
}
