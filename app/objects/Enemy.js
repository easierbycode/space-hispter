class Enemy extends Phaser.Sprite {

    constructor(game, x, y, key, health, enemyBullets) {

        super(game, x, y, key);

        // set variables
        this.enemyBullets = enemyBullets;
        this.health = health;
        
        // create and initiate timer
        this.enemyTimer = this.game.time.create(false); // keeps timer alive after it's done
        this.enemyTimer.start();

        // positioning
        this.anchor.setTo(0.5);

        // physics properties
        game.physics.arcade.enable(this);
   

        // initialize animations
        this.animations.add('getHit', [0, 1, 2, 1, 2, 0], false);

        this.scheduleShooting();

    }

    update() {

        //bounce on the borders
        if(this.position.x < 0.05 * this.game.world.width) {
            this.position.x = 0.05 * this.game.world.width + 2;
            this.body.velocity.x *= -1;
        }
        else if(this.position.x > 0.95 * this.game.world.width) {
            this.position.x = 0.95 * this.game.world.width - 2;
            this.body.velocity.x *= -1;
        }

        // kill object at bottom
        if(this.top > this.game.world.height) {
            this.kill();
        }

    }

    scheduleShooting() {

        this.enemyBullets.createEnemyBullet(this);

        this.enemyTimer.add(
            Phaser.Timer.SECOND * 2,
            this.scheduleShooting,
            this
        );

    }

    damage(amount) {

        // retain phaser damage functionality
        Phaser.Sprite.prototype.damage.call(this, amount);

        // play animation
        this.animateGetHit();
        
        // when dead
        if(this.health <= 0) {
            this.emitDeath();
            this.enemyTimer.pause();
        }

    }

    reset(x, y, health, key, scale, speedX, speedY) {

        // calls default reset properties
        Phaser.Sprite.prototype.reset.call(this, x, y, health); 

        // new properties
        this.loadTexture(key);
        // this.scale.setTo(scale);
        this.scale.setTo(1);
        // this.body.velocity.x = speedX;
        // this.body.velocity.y = speedY;
        // this.body.velocity.y = speedX;
        this.body.velocity.y = 120;

        // resume timer
        this.enemyTimer.resume();

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
