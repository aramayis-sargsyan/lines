import { Container } from 'pixi.js';
import { Cell } from './board/cell';
import { BoardConfig } from './config';
import { Ball } from './board/ball';
import { colors } from './constants';
import { getRandomInRange } from './utils';

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
      queueCell.buildCell(cell_line_style);
      queueCell.position.set(queueCell.i * (cell_width + 1), cell_width);
      queueCell.tint = 0x555555;
      this.queueCells.push(queueCell);
      this.addChild(queueCell);
    }
  }
  buildBalls() {
    const { cell_width, queue_balls_count } = BoardConfig;
    for (let i = 0; i < queue_balls_count; i++) {
      const ball = new Ball();
      ball.buildBall();
      let color = Math.floor(getRandomInRange(0, 5));
      this.queueCells[i].ball = ball;
      this.queueCells[i].ball.tint = colors[color];
      this.queueCells[i].ball.position.set(this.queueCells[i].i * (cell_width + 1), cell_width);
      this.addChild(this.queueCells[i].ball);
    }
  }
}
