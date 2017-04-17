class Player extends Phaser.Sprite {

    constructor(game, x, y) {

        super(game, x, y, 'player');

        this.PLAYER_SPEED = 200;
        this.playerBullets = new globalObjects.PlayerBullets(this.game);

        this.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;

        game.add.existing(this);

    }

    setSpeed(direction) {

        this.body.velocity.x = direction * this.PLAYER_SPEED;

    }

    startShootingTimer() {
    
        this.shootingTimer = this.game.time.events.loop(
            Phaser.Timer.SECOND/5,
            () => {
                this.playerBullets.createPlayerBullet(this);
        });
    }

    killPlayer() {

        this.kill();
        this.game.state.restart();
        
    }

}

export default Player;
