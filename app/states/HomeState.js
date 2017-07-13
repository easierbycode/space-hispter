class HomeState extends Phaser.State {

  init(currentLevel) {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // level data
    this.numLevels = 3;
    this.currentLevel = currentLevel ? currentLevel : 1;

  }

  create() {

    this.background = new globalObjects.Background(this.game);
    this.player = new globalObjects.Player(
      this.game,
      this.game.world.centerX,
      this.game.world.height - 50
    );
    // this.enemies = new globalObjects.Enemies(this.game);

    this.player.startShootingTimer();

    this.loadLevel();

    this.orchestra = this.add.audio('orchestra');
    this.orchestra.play();

  }

  update() {

    // enemies & player bullet overlap detection
    // this.game.physics.arcade.overlap(
    //   this.player.playerBullets, 
    //   this.enemies, 
    //   this.enemies.damageEnemy, 
    //   null,
    //   this
    // );

    // enemy bullets & player detection
    var self  = this;
    
    this.levelData.groups.forEach(( group ) => {

      this.game.physics.arcade.overlap(
        self[ group ].enemyBullets, 
        this.player,
        () => {
          this.player.killPlayer()
          this.orchestra.stop();
        },
        null,
        this
      );

      // enemies & player bullet overlap detection
      this.game.physics.arcade.overlap(
        this.player.playerBullets, 
        self[ group ], 
        self[ group ].damageEnemy, 
        null,
        this
      );

    })

    // moves/stops player
    if(this.game.input.activePointer.isDown) {
      let direction = this.background.getClickDirection();
      this.player.setSpeed(direction);
    } else if(this.game.input.activePointer.isUp) {
        this.player.body.velocity.x = 0;
    }

  }

  loadLevel() {

    this.currentEnemyIndex = 0;
    this.levelData = JSON.parse(this.game.cache.getText('level' + this.currentLevel));

    // create groups
    let self = this;
    
    this.levelData.groups.forEach(( group ) => {
      let groupName     = globalObjects.Utils.titleize( group );
      self[ group ] = new globalObjects[ groupName ]( self.game );
    });

    // end of the level timer
    this.endOfLevelTimer = this.game.time.events.add(
      this.levelData.duration * Phaser.Timer.SECOND,
      () => {
        this.orchestra.stop();

        if(this.currentLevel < this.numLevels) {
          this.currentLevel++;
        }
        else {
          this.currentLevel = 1;
        }

        this.game.state.start('HomeState', true, false, this.currentLevel);
      }
    )
    this.scheduleNextEnemy();
            
  }

  scheduleNextEnemy() {

    let nextEnemy = this.levelData.enemies[this.currentEnemyIndex];
    let previousEnemy = this.levelData.enemies[this.currentEnemyIndex - 1];

    if(nextEnemy) {
      let nextTime = Phaser.Timer.SECOND * (nextEnemy.time - 
        (this.currentEnemyIndex == 0 ? 0 : previousEnemy.time));

        this.nextEnemyTimer = this.game.time.events.add(nextTime,
          () => {
            this[ nextEnemy.type ].createEnemy(
              nextEnemy.x * this.game.world.width, 
              -100, 
              nextEnemy.health,
              nextEnemy.key,
              nextEnemy.scale,
              nextEnemy.speedX,
              nextEnemy.speedY
            );
            this.currentEnemyIndex++;
            this.scheduleNextEnemy();
          });
    }

  }

}

export default HomeState;
