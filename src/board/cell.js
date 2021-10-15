import { Graphics } from 'pixi.js';
import { BoardConfig } from '../config';

export class Cell extends Graphics {
  constructor() {
    super();
  }

  buildCell() {
    const { cell_width } = BoardConfig;
    const { cell_line_style } = BoardConfig;
    const { cell_radius } = BoardConfig;
    this.lineStyle(cell_line_style, 0xff0000);
    this.beginFill(0xffffff);
    console.log(cell_radius);
    this.drawRoundedRect(0, 0, cell_width, cell_width, cell_radius);
    this.endFill();
    this.pivot.set((cell_width + cell_line_style) / 2);
  }
}
