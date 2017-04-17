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
    this.enemies = new globalObjects.Enemies(this.game);

    this.player.startShootingTimer();

  }

  update() {

    // enemies & player bullet overlap detection
    this.game.physics.arcade.overlap(
      this.player.playerBullets, 
      this.enemies, 
      this.enemies.damageEnemy, 
      null,
      this
    );

    // enemy bullets & player detection
    this.game.physics.arcade.overlap(
      this.enemies.enemyBullets, 
      this.player,
      () => {
        this.player.killPlayer()
      },
      null,
      this
    );

    // moves/stops player
    if(this.game.input.activePointer.isDown) {
      let direction = this.background.getClickDirection();
      this.player.setSpeed(direction);
    } else if(this.game.input.activePointer.isUp) {
        this.player.body.velocity.x = 0;
    }

  }

}

export default HomeState;
