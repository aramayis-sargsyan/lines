import { Graphics } from 'pixi.js';

export class Cell extends Graphics {
  constructor() {
    super();
  }

  buildCell(count) {
    if (count % 2 === 0) {
      // this.lineStyle(5, 0x555555);
      this.beginFill(0x888888);
    } else {
      // this.lineStyle(5, 0xaaaaaa);
      this.beginFill(0xbbbbbb);
    }

    this.drawRoundedRect(0, 0, 50, 50, 8);
    this.endFill();
  }
}
