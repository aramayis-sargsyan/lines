import { Application } from 'pixi.js';
import { Board } from './board/board';
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
    this._board = new Board();
    this._board.buildBoard();
    this._board.position.set(this.screen.width * 0.5, this.screen.height * 0.6);
    this._board.pivot.set(this._board.width * 0.5, this._board.height * 0.5);
    this.stage.addChild(this._board);
  }

  _buildQueue() {
    this._queue = new Queue();
    this._queue.buildQueueCell();
    this._queue.position.set(this.screen.width * 0.5, this.screen.height * 0.05);
    this._queue.pivot.set(this._queue.width * 0.5, this._queue.height * 0.5);
    this.stage.addChild(this._queue);
  }

  _update() {}
}
