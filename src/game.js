import { Application } from 'pixi.js';
import { Board } from './board/board';
import { BoardConfig } from './config';
import { Queue } from './queue';
export class Game extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x333333,
    });

    document.body.appendChild(this.view);

    this.ticker.add(this._update, this);
    this.ticker.start();

    this.loader.onComplete.add(this._onLoadComplete, this);
    this.loader.load();
  }

  _onLoadComplete() {
    this._buildBoard();
    this._buildQueue();
  }

  _buildBoard() {
    const { initial_balls_count, cell_width, cell_line_style } = BoardConfig;
    this._board = new Board();
    this._board.buildBoard();
    this._board.buildBalls(initial_balls_count);
    this._board.position.set(this.screen.width * 0.5 + (cell_width + cell_line_style) / 2, this.screen.height * 0.6);
    this._board.pivot.set(this._board.width * 0.5, this._board.height * 0.5);
    this.stage.addChild(this._board);
  }

  _buildQueue() {
    const { cell_width, cell_line_style } = BoardConfig;
    this._queue = new Queue();
    this._queue.buildQueueCell();
    this._queue.buildQueueBalls();
    this._queue.position.set(this.screen.width * 0.5 + (cell_width + cell_line_style) / 2, this.screen.height * 0.05);
    this._queue.pivot.set(this._queue.width * 0.5, this._queue.height * 0.5);
    this.stage.addChild(this._queue);
  }

  addQueueBall(counte, colors) {
    this._queue.collors;
    console.log(counte);
    this._board.buildBalls(counte, colors);
  }
  _updateBallCell(cell) {
    this._board.addChild(cell);
    this.stage.addChild(this._board);
  }

  _update() {}
}
