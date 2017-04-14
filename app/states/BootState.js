class BootState extends Phaser.State {

  init() {

    this.stage.disableVisibilityChange = true; //if browser loses focus, game will not pause
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //stretches to fit screen
    this.game.scale.refresh();
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(false, true);

  }

  preload() {

  }

  create() {

    this.game.stage.backgroundColor = '#F55449';
    this.state.start('PreloadState');

  }

}

export default BootState;
