import { Container } from 'pixi.js';
import { Cell } from './board/cell';
import { BoardConfig } from './config';

export class Queue extends Container {
  constructor() {
    super();
  }

  buildQueueCell() {
    const { queue_balls_count, cell_width } = BoardConfig;

    for (let i = 0; i < queue_balls_count; i++) {
      const cell = new Cell();
      cell.buildCell();
      cell.position.set(i * (cell_width + 3), 25);
      cell.tint = 0x555555;

      this.addChild(cell);
    }
  }
  _buildBalls() {
    //
  }
}
