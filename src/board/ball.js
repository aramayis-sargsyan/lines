import { BoardConfig } from '../config';
import { Graphics } from 'pixi.js';

export class Ball extends Graphics {
  constructor() {
    super();
  }

  buildBall() {
    this.beginFill(0xffffff);
    this.drawCircle(0, 0, 17);
    this.endFill();
  }
}
