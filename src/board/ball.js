import { Graphics } from 'pixi.js';
export class Ball extends Graphics {
  constructor() {
    super();
  }



  buildBall() {
    this.lineStyle(5, 0x222222);
    this.beginFill(0x333333);
    this.drawCircle(0, 0, 20);
    this.endFill();
  }
}
