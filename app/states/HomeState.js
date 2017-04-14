class HomeState extends Phaser.State {

  init() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

  }

  create() {

    this.background = new globalObjects.Background(this.game);
    this.player = new globalObjects.Player(
      this.game,
      this.game.world.centerX,
      this.game.world.height - 50
    );
    this.bullets = new globalObjects.Bullets(this.game);

    this.shootingTimer = this.game.time.events.loop(
      Phaser.Timer.SECOND/5,
      () => {
        this.bullets.createPlayerBullet(this.player);
      });

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
