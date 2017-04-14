class Enemy extends Phaser.Sprite {

    constructor(game, x, y, key, health, enemyBullets) {

        super(game, x, y, key);

        this.health = health;
        this.enemyBullets = enemyBullets;

        this.anchor.setTo(0.5);

        game.physics.arcade.enable(this);
        this.body.velocity.x = 100;
        this.body.velocity.y = 50;
        
        this.animations.add('getHit', [0, 1, 2, 1, 0], false);


    }

    update() {

        if(this.x < 0.05 * this.game.world.width) {
            this.x = 0.05 * this.game.world.width + 2;
            this.body.velocity.x *= -1;
        }
        else if(this.x > 0.95 * this.game.world.width) {
            this.x = 0.95 * this.game.world.width -2;
            this.body.velocity.x *= -1;
        }

        if(this.top > this.game.world.height) {
            this.kill();
        }

    }

    damage(amount) {

        Phaser.Sprite.prototype.damage.call(this, amount);
        this.play('getHit');

        if(this.health <= 0) {
            let emitter = this.game.add.emitter(
                this.x,
                this.y,
                100
            );
            emitter.makeParticles('enemyParticle');
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);
            emitter.gravity = 0;
            emitter.start(true, 500, null, 100);

        }

    }


   

}

export default Enemy;
