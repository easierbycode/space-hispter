class Player extends Phaser.Sprite {

    constructor(game, x, y) {

        super(game, x, y, 'player');

        this.PLAYER_SPEED = 200;

        this.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;

        game.add.existing(this);

    }

    setSpeed(direction) {

        this.body.velocity.x = direction * this.PLAYER_SPEED;

    }

}

export default Player;
