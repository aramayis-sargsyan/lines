import { Cell } from './cell';
import { Ball } from './ball'
import { BoardConfig } from '../config';
import { Container } from 'pixi.js';
import { sampleSize } from 'lodash';

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
        cell.buildCell((i + j) % 2);
        cell.position.set(i * 51, j * 51);
        this.addChild(cell);
        this.cells.push(count);
        count++
      }

    }
    this._buildBalls();
  }
  _matrix() {
    this.matrix = this.cells.map((r, i) => {
      return r.map((c, j) => 0)
    })
  }

  _buildBalls() {
    const { initial_balls_count } = BoardConfig;
    let initialBall = sampleSize(this.cells, initial_balls_count);

    for (let k = 0; k < initial_balls_count; k++) {
      let i = initialBall[k] % 9;
      let j = Math.floor(initialBall[k] / 9)
      console.log(i)
      const ball = new Ball();
      ball.buildBall();

      ball.position.set(i * 51, j * 51);
      this.addChild(ball);


    }
  }
}
