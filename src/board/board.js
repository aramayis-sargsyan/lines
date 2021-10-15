import { sampleSize } from 'lodash';
import { Container } from 'pixi.js';
import { BoardConfig } from '../config';
import { colors } from '../constants';
import { getRandomInRange } from '../utils';
import { Ball } from './ball';
import { Cell } from './cell';
export class Board extends Container {
  constructor() {
    super();
    this.cells = [];
  }

  buildBoard() {
    const { cell_count, cell_width, cell_line_style } = BoardConfig;

    for (let i = 0; i < cell_count; i++) {
      for (let j = 0; j < cell_count; j++) {
        const cell = new Cell();
        cell.ball = null;
        cell.i = i;
        cell.j = j;
        cell.buildCell();
        cell.position.set(i * (cell_width + cell_line_style), j * (cell_width + cell_line_style));
        cell.tint = (i + j) % 2 === 0 ? 0x888888 : 0xbbbbbb;
        this.cells.push(cell);
        this.addChild(cell);
      }
    }
  }

  buildBalls(ballCount) {
    const { cell_width, cell_line_style } = BoardConfig;

    const emtyCells = this.cells.filter((cell) => {
      return cell.ball === null;
    });
    const initial_cell = sampleSize(emtyCells, ballCount);
    for (let i = 0; i < ballCount; i++) {
      const ball = new Ball();
      ball.buildBall();
      initial_cell[i].ball = ball;

      let color = Math.floor(getRandomInRange(0, 5));
      initial_cell[i].ball.tint = colors[color];
      initial_cell[i].ball.position.set(initial_cell[i].i * cell_width, initial_cell[i].j * cell_width);
      this.addChild(initial_cell[i].ball);
    }
  }
}
