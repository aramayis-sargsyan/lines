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
    // const cell = new Graphics();
    // cell.lineStyle(1, 0x000000);
    // cell.beginFill(0xffffff);
    // cell.drawRoundedRect(0, 0, 50, 50, 10);
    // cell.endFill();
    // cell.position.set(200, 200);
    // cell.pivot.set(cell.width / 2, cell.height / 2);

    // const ball = new Graphics();
    // ball.lineStyle(1, 0x000000);
    // ball.beginFill(0x000000);
    // ball.drawCircle(0, 0, 20);
    // ball.endFill();
    // ball.position.set(cell.x, cell.y);

    // this.stage.addChild(cell);
    // this.stage.addChild(ball);

    // return;
    this._buildBoard();
    this._buildQueue();
    this._setCellsListeners();
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
    const { queue_balls_count, cell_width, cell_line_style } = BoardConfig;
    this._queue = new Queue();
    this._queue.buildQueueCell();
    this._queue.buildBalls();
    this._queue.position.set(this.screen.width * 0.5 + (cell_width + cell_line_style) / 2, this.screen.height * 0.05);
    this._queue.pivot.set(this._queue.width * 0.5, this._queue.height * 0.5);
    this.stage.addChild(this._queue);
  }

  _setCellsListeners() {
    // for (let i = 0; i < this._board.cells.length; i++) {
    //   // this._board.cells[i].on('pointerdown', this._onClickStart, this);
    // }
    // .on('pointerup', this._onClickEnd, this)
    // .on('pointerupoutside', this._onClickOutside, this);
  }

  _onClickStart(event) {
    console.log(event);
    console.log('hello');
  }
  _update() {}
}
