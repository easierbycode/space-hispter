class Fireball extends Phaser.Sprite {

    constructor(game, x, y) {

        super(game, x, y, 'bowserFireball');

        this.anchor.setTo(0.5);
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

        this.animations.add( 'rotate', [0, 1, 2, 3], 6, true );

        this.play( 'rotate' );

    }

    reset( x, y, scale ) {
        
        super.reset( x, y );
        this.scale.setTo( scale );

    }

}

export default Fireball;