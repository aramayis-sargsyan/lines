import { Application, Graphics } from 'pixi.js';
import { Board } from './board';

export class Game extends Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x009334,
    });

    document.body.appendChild(this.view);

    this.ticker.add(this._update, this);
    this.ticker.start();

    this.loader.onComplete.add(this._onLoadComplete, this);
    this.loader.load();
  }

  _onLoadComplete() {
    this._createCell();
    // console.warn('load complete');
  }

  _createCell() {
    const cellGraphic = new Graphics();
    cellGraphic.lineStyle(5, 0x222222);
    cellGraphic.beginFill(0x333333);
    cellGraphic.drawRect(0, 0, 80, 80);
    cellGraphic.endFill();
  }

  _update() {
    // console.log('update');
  }
}
