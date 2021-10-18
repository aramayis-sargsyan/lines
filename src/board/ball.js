import { Graphics } from 'pixi.js';
import { BoardConfig } from '../config';

export class Ball extends Graphics {
  constructor() {
    super();
    this.interactive = true;
    this.on('pointerdown', this._onClick, this);
  }

  buildBall() {
    const { ball_width } = BoardConfig;

    this.beginFill(0xffffff);
    this.drawCircle(0, 0, ball_width);
    this.endFill();
  }
  _onClick() {
    const circle = new Circle();

    this.addChild(circle);
    console.warn('aaaaa');
  }
}
