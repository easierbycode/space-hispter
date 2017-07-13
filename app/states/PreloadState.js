import globalObjects from '../globals/globalObjects';

class PreloadState extends Phaser.State {

  preload() {

    this.load.atlasJSONHash( 'flirtyGirl', './images/flirty-girl.png', './images/flirty-girl.json' );

    // this.load.image('space', './images/space.png');
    this.load.image('space', './images/everwing-space-bg.png');
    this.load.image('player', './images/player.png');
    this.load.image('bullet', './images/bullet.png');
    this.load.image('enemyParticle', './images/enemyParticle.png');
    this.load.spritesheet('yellowEnemy', './images/yellow_enemy.png', 50, 46, 3, 1, 1);
    this.load.spritesheet('redEnemy', './images/red_enemy.png', 50, 46, 3, 1, 1);
    this.load.spritesheet('greenEnemy', './images/green_enemy.png', 50, 46, 3, 1, 1);
    this.load.spritesheet( 'kissBullet', './images/kiss-bullet.png', 25, 21 );
    this.load.spritesheet('redDevil', './images/red-devil.png', 90, 71);
    this.load.spritesheet('magentaMan', './images/magenta-man.png', 80, 74);

    //load level data
    this.load.text('level1', './data/level1.json');
    this.load.text('level2', './data/level2.json');
    this.load.text('level3', './data/level3.json');

    this.load.audio('orchestra', ['./audio/8bit-orchestra.mp3', './audio/8bit-orchestra.ogg']);

  }

  create() {

    this.state.start('HomeState');

  }

}

export default PreloadState;
