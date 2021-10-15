import { Container } from 'pixi.js';
import { Cell } from './board/cell';
import { Ball } from './board/ball';
import { BoardConfig } from './config';
import { colors } from './constants';
import { getRandomInRange } from './utils';

export class Queue extends Container {
  constructor() {
    super();
  }

  buildQueueCell() {
    const { queue_balls_count } = BoardConfig;

    for (let i = 0; i < queue_balls_count; i++) {
      const cell = new Cell();
      cell.buildCell();
      cell.position.set(i * 51, 25);
      cell.tint = 0x555555;

      this.addChild(cell);
    }
  }

  _buildBalls() {
    const { queue_balls_count } = BoardConfig;

    for (let j = 0; j < queue_balls_count; j++) {
      const ball = new Ball();
      ball.buildBall();
      let colorNumber = Math.floor(getRandomInRange(0, 5));
      ball.tint = colors[colorNumber];
      ball.position.set(0, 25);

      this.addChild(ball);
    }
  }
}
