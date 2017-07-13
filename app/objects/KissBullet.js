class KissBullet extends Phaser.Sprite {

    constructor(game, x, y) {

        super(game, x, y, 'kissBullet');

        this.anchor.setTo(0.5);
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

        // this.scale.setTo( 0.5 );

        // this.animations.add( 'lick' );
        this.animations.add( 'lick', [0, 1, 2, 3, 2, 1, 0], 12, true );

        this.play( 'lick' );

    }

    reset( x, y, scale ) {
        super.reset( x, y );
        this.scale.setTo( scale / 2 );
    }

}

export default KissBullet;
