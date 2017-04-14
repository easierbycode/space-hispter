import globalObjects from '../globals/globalObjects';

class PreloadState extends Phaser.State {

  preload() {

  }

  create() {

    this.state.start('HomeState');

  }

}

export default PreloadState;
