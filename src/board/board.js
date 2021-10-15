import { Container } from 'pixi.js';
import { BoardConfig } from '../config';
import { Cell } from './cell';

export class Board extends Container {
  constructor() {
    super();
    this.cells = [];
  }

  buildBoard() {
    const { cell_count } = BoardConfig;

    for (let i = 0; i < cell_count; i++) {
      for (let j = 0; j < cell_count; j++) {
        this.cells.push({ ball: 0, i, j });
        const cell = new Cell();

        cell.buildCell();
        cell.position.set(i * 51, j * 51);
        if ((i + j) % 2 === 0) {
          cell.tint = 0x888888;
        } else {
          cell.tint = 0xbbbbbb;
        }
        this.addChild(cell);
      }
    }
  }

  _buildBalls() {}
}
