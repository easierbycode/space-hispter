import Enemy from './Enemy';

class Enemies extends Phaser.Group {

    constructor(game) {

        super(game);
        
        let enemy = new Enemy(
            game,
            100,
            100,
            'greenEnemy',
            10,
            []
        );
        this.add(enemy);

    }

    damageEnemy(bullet, enemy) {

        enemy.damage(1);
        bullet.kill();

    }

}

export default Enemies;
