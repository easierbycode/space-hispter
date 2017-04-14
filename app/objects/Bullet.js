class Bullet extends Phaser.Sprite {

    constructor(game, x, y) {

        super(game, x, y, 'bullet');

        this.anchor.setTo(0.5);
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

    }

}

export default Bullet;
