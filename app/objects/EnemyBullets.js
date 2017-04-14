import EnemyBullet from './Bullet';

class EnemyBullets extends Phaser.Group {

    constructor(game) {

        super(game);

        this.BULLET_SPEED = -1000;

        this.enableBody = true;

    }

    createEnemyBullet(enemy) {

        let bullet = this.getFirstExists(false);

        if(bullet) {
            bullet.reset(enemy.x, enemy.y);
        } else {
            bullet = new EnemyBullet(this.game, enemy.x, enemy.bottom);
            this.add(bullet);
        }

        bullet.body.velocity.y = this.BULLET_SPEED;
    }


}

export default EnemyBullets;
