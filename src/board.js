import createCell from './create-cell';
import { Application } from 'pixi.js';

export class Board extends Application {
  constructor() {
    super();
    let x = createCell();
    console.log(x);
    this.stage.addChild(x);
  }
}
