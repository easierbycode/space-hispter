import Enemy from './Enemy';

class Enemies extends Phaser.Group {

    constructor(game) {

        super(game);

        let enemyBullets = new globalObjects.EnemyBullets(this.game);
        
        let enemy = new Enemy(
            game,
            100,
            100,
            'greenEnemy',
            10,
            enemyBullets
        );
        this.add(enemy);

    }

    damageEnemy(bullet, enemy) {

        enemy.damage(1);
        bullet.kill();

    }

}

export default Enemies;
