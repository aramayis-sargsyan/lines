import { Container } from 'pixi.js';
import { Ball } from './board/ball';
import { Board } from './board/board';
import { Cell } from './board/cell';
import { BoardConfig } from './config';
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
  buildQueueBalls() {
    const { queue_balls_count } = BoardConfig;
    let collors = [];
    for (let i = 0; i < queue_balls_count; i++) {
      const ball = new Ball();
      ball.buildBall();
      let color = Math.floor(getRandomInRange(0, 5));
      this.queueCells[i].ball = ball;
      this.queueCells[i].ball.tint = colors[color];
      collors.push(color);
      const cell = new Cell();
      this.queueCells[i].addChild(ball);
      cell.setBall(this.queueCells[i], ball);
    }
    const board = new Board();
    board.buildBalls(queue_balls_count, collors);
  }
}
