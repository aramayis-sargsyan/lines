import { Cell } from './cell';
import { Ball } from './ball';
import { BoardConfig } from '../config';
import { Container } from 'pixi.js';
import { sampleSize } from 'lodash';
import { getRandomInRange } from '../utils';
import { colors } from '../constants';

export class Board extends Container {
  constructor() {
    super();
    this.cells = [];
    this.matrix = [];
    this.sapleArr = [];
  }

  buildBoard() {
    const { cell_count } = BoardConfig;
    let count = 0;
    for (let i = 0; i < cell_count; i++) {
      for (let j = 0; j < cell_count; j++) {
        const cell = new Cell();
        cell.buildCell();
        cell.position.set(i * 51, j * 51);
        if (count % 2 === 0) {
          cell.tint = 0x888888;
        } else {
          cell.tint = 0xbbbbbb;
        }
        this.addChild(cell);
        this.cells.push(count);
        count++;
      }
    }
  }
  _matrix() {
    this.matrix = this.cells.map((r, i) => {
      return r.map((c, j) => 0);
    });
  }

  _buildBalls() {
    const { initial_balls_count } = BoardConfig;
    let initialBall = sampleSize(this.cells, initial_balls_count);

    for (let k = 0; k < initial_balls_count; k++) {
      let i = initialBall[k] % 9;
      let j = Math.floor(initialBall[k] / 9);
      const ball = new Ball();
      ball.buildBall();
      let colorNumber = Math.floor(getRandomInRange(0, 5));

      ball.tint = colors[colorNumber];
      ball.position.set(i * 51, j * 51);

      this.addChild(ball);
    }
  }
}
