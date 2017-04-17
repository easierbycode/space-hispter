class Enemies extends Phaser.Group {

    constructor(game) {

        super(game);

        this.enemyBullets = new globalObjects.EnemyBullets(this.game);
        
        
        let enemy = new globalObjects.Enemy(
            game,
            100,
            100,
            'greenEnemy',
            10,
            this.enemyBullets
        );
        this.add(enemy);

    }

    damageEnemy(bullet, enemy) {

        enemy.damage(1);
        bullet.kill();

    }

}

export default Enemies;
