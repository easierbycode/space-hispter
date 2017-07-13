class FlirtyGirls extends Phaser.Group {

    constructor(game) {

        super(game);

        this.enemyBullets = new globalObjects.FlirtyGirlBullets(this.game);

    }

    createEnemy(x, y, health, key, scale, speedX, speedY) {
        let enemy = this.getFirstExists(false);

        if (!enemy) {
            enemy = new globalObjects.FlirtyGirl(
                this.game,
                x,
                y,
                key,
                health,
                this.enemyBullets
            );
            this.add(enemy);
        }

        enemy.reset(x, y, health, key, scale, speedX, speedY);

    }

    damageEnemy(bullet, enemy) {

        enemy.damage(1);
        bullet.kill();

    }

}

export default FlirtyGirls;