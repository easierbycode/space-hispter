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

    this.playerBullets = new globalObjects.PlayerBullets(this.game);
    this.enemyBullets = new globalObjects.EnemyBullets(this.game);
    
    this.shootingTimer = this.game.time.events.loop(
      Phaser.Timer.SECOND/5,
      () => {
        this.playerBullets.createPlayerBullet(this.player);
      });

  }

  update() {

    // enemies & player bullet overlap detection
    this.game.physics.arcade.overlap(
      this.playerBullets, 
      this.enemies, 
      this.enemies.damageEnemy, 
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
