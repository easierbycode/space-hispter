import BootState from './states/BootState';
import PreloadState from './states/PreloadState';
import HomeState from './states/HomeState';

class Application extends Phaser.Game {

  constructor() {

    super(405, 720, Phaser.AUTO, 'game');

    this.state.add('BootState', BootState);
    this.state.add('PreloadState', PreloadState);
    this.state.add('HomeState', HomeState);

    this.state.start('BootState');
  }

}

export default Application;
