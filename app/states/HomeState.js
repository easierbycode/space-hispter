class HomeState extends Phaser.State {

  init() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.BULLET_SPEED = -1000;

  }

  create() {

    this.background = new globalObjects.Background(this.game);
    this.player = new globalObjects.Player(
      this.game,
      this.game.world.centerX,
      this.game.world.height - 50
    );

  }

  update() {

    this.player.body.velocity.x = 0;

    if(this.game.input.activePointer.isDown) {
      let direction = this.background.getClickDirection();
      this.player.setSpeed(direction);
    }

    

  }

}

export default HomeState;
