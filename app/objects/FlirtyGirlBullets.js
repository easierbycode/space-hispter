class FlirtyGirlBullets extends Phaser.Group {

    constructor(game) {

        super(game);

        this.BULLET_SPEED = 400;

        this.enableBody = true;

    }

    createEnemyBullet(enemy) {

        let bullet = this.getFirstExists(false);

        if(bullet) {
            bullet.reset(enemy.x, enemy.y, enemy.scale.x);
        } else {
            bullet = new globalObjects.KissBullet( this.game, enemy.x, enemy.bottom );
            this.add(bullet);
        }

        bullet.body.velocity.y = this.BULLET_SPEED;

        // TODO: instead of velocity.y fire at angleToPlayer

    }


}

export default FlirtyGirlBullets;