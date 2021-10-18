import { Graphics } from 'pixi.js';
import { BoardConfig } from '../config';
import { Circle } from './circle';

export class Cell extends Graphics {
  constructor() {
    super();

    this.interactive = true;
    this.on('pointerdown', this._onClick, this);
  }

  buildCell(lineStyle) {
    const { cell_width, cell_radius } = BoardConfig;
    this.lineStyle(lineStyle, 0x000000);
    this.beginFill(0xffffff);
    this.drawRoundedRect(lineStyle, lineStyle, cell_width - lineStyle, cell_width - lineStyle, cell_radius);
    this.endFill();

    this.pivot.x = this.width / 2;
    this.pivot.y = this.height / 2;
  }

  _onClick() {
    const circle = new Circle();

    this.addChild(circle);
    console.warn('aaaaa');
  }
}
