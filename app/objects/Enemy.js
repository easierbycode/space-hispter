class Enemy extends Phaser.Sprite {

    constructor(game, x, y, key, health, enemyBullets) {

        super(game, x, y, key);

        // set variables
        this.health = health;
        this.enemyBullets = enemyBullets;

        // positioning
        this.anchor.setTo(0.5);

        // physics properties
        game.physics.arcade.enable(this);
        this.body.velocity.x = 100;
        this.body.velocity.y = 50;
        this.body.collideWorldBounds = true;
        this.body.bounce.setTo(1, 0);

        // initialize animations
        this.animations.add('getHit', [0, 1, 2, 1, 0], false);

    }

    update() {

        if(this.bottom > this.game.world.height - 1) {
            this.kill();
        }

    }

    damage(amount) {

        // retain phaser damage functionality
        Phaser.Sprite.prototype.damage.call(this, amount);

        // play animation
        this.animateGetHit();
        
        // when dead
        if(this.health <= 0) {
            this.emitDeath();
        }

    }

    animateGetHit() {

        this.play('getHit');

    }

    emitDeath() {

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

export default Enemy;
