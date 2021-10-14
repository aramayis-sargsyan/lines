import { Cell } from './cell';
import { BoardConfig } from '../config';
import { Container } from 'pixi.js';

export class Board extends Container {
  constructor() {
    super();
    this.cells = [];
  }

  buildBoard() {
    const { cell_count } = BoardConfig;

    // this._cells = Array(cell_count).fill(0).map((r, i) => {
    //   return Array(cell_count).fill(0).map((c, j) => {
    //     const cell = new Cell();
    //     cell.buildCell()
    //     cell.position.set(j * 51, i * 51)
    //     this.addChild(cell)

    //     return cell
    //   })
    // })
    let count = 0;
    for (let i = 0; i < cell_count; i++) {
      let row = [];
      for (let j = 0; j < cell_count; j++) {
        const cell = new Cell();
        cell.buildCell(count);
        cell.position.set(j * 51, i * 51);
        row.push(cell);
        this.addChild(cell);
        count++;
      }
      this.cells.push(row);
    }
  }
}
