import { sampleSize } from 'lodash';
import { Container } from 'pixi.js';
import { BoardConfig } from '../config';
import { colors } from '../constants';
import { getRandomInRange } from '../utils';
import { Ball } from './ball';
import { Cell } from './cell';
import { Circle } from './circle';

export class Board extends Container {
  constructor() {
    super();
    this.cells = [];
    this.balls = [];
    this.matrixCells = [];
    this._circle = null;
  }

  buildBoard() {
    const { cell_count, cell_width } = BoardConfig;

    for (let i = 0; i < cell_count; i++) {
      let arr = [];
      for (let j = 0; j < cell_count; j++) {
        arr.push(0);
        const cell = new Cell(i, j);
        cell.emiter.on('onClick', (cell) => {
          this.buildCircle(cell);
        });
        cell.ball = null;
        cell.i = j;
        cell.j = i;
        cell.buildCell(0);
        cell.position.set(j * (cell_width + 1), i * (cell_width + 1));
        cell.tint = (i + j) % 2 === 0 ? 0x888888 : 0xbbbbbb;

        this.cells.push(cell);
        this.addChild(cell);
      }
      this.matrixCells.push(arr);
    }
  }

  buildBalls(ballCount) {
    const { cell_width } = BoardConfig;

    const emtyCells = this.cells.filter((cell) => {
      return cell.ball === null;
    });
    const initial_cell = sampleSize(emtyCells, ballCount);
    for (let i = 0; i < ballCount; i++) {
      const ball = new Ball();
      ball.buildBall();
      ball.ballActive = false;
      initial_cell[i].ball = ball;
      let color = Math.floor(getRandomInRange(0, 5));
      initial_cell[i].ball.tint = colors[color];
      initial_cell[i].ball.position.set(initial_cell[i].i * (cell_width + 1), initial_cell[i].j * (cell_width + 1));
      this.balls.push(initial_cell[i].ball);

      this.addChild(initial_cell[i].ball);
      this.matrixCells[initial_cell[i].j][initial_cell[i].i] = 1;
    }
  }

  buildCircle(cell) {
    if (this._circle !== null) {
      this._circle.destroy();
    }
    if (cell.ball === null) {
      this._circle = null;
      for (let i = 0; i < this.balls.length; i++) {
        // if (this.balls[i].ballActive) {
        this._phathfinder();
        // }
      }
      // console.log(this.balls[i].ballActive);
    } else {
      this._circle = new Circle();
      cell.ball.ballActive = true;
      cell.ball.addChild(this._circle);
    }
  }
  _phathfinder() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.balls[i].ballActive) {
        this.balls[i].destroy();
      } else {
        // const ball = new Ball();
        // ball.buildBall();
        console.log('hello');
      }
    }
  }
}
