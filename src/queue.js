import { Container } from 'pixi.js';
import { Cell } from './board/cell';
import { BoardConfig } from './config';
import { Ball } from './board/ball';
import { colors } from './constants';

export class Queue extends Container {
  constructor() {
    super();
    this.queueCells = [];
  }

  buildQueueCell() {
    const { queue_balls_count, cell_width, cell_line_style } = BoardConfig;

    for (let i = 0; i < queue_balls_count; i++) {
      const queueCell = new Cell();
      queueCell.ball = null;
      queueCell.i = i;
      queueCell.buildCell();
      queueCell.position.set(queueCell.i * (cell_width + cell_line_style + 1), cell_width + cell_line_style);
      queueCell.tint = 0x555555;
      this.queueCells.push(queueCell);
      this.addChild(queueCell);
    }
  }
  _buildBalls() {
    const { cell_width, cell_line_style, queue_balls_count } = BoardConfig;
    for (let i = 0; i < queue_balls_count; i++) {
      const ball = new Ball();
      ball.buildBall();
      let color = Math.floor(getRandomInRange(0, 5));
      queueCell[i].ball.tint = colors[color];
      initial_cell[i].ball.position.set(
        initial_cell[i].i * (cell_width + cell_line_style + 1),
        initial_cell[i].j * (cell_width + cell_line_style + 1)
      );
      this.addChild(initial_cell[i].ball);
    }
  }
}
