class EnemyBullets extends Phaser.Group {

    constructor(game) {

        super(game);

        this.BULLET_SPEED = 200;

        this.enableBody = true;

    }

    createEnemyBullet(enemy) {

        let bullet = this.getFirstExists(false);

        if(bullet) {
            bullet.reset(enemy.x, enemy.y);
        } else {
            bullet = new globalObjects.Bullet(this.game, enemy.x, enemy.bottom);
            this.add(bullet);
        }

        bullet.body.velocity.y = this.BULLET_SPEED;

    }


}

export default EnemyBullets;
