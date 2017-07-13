class Lakitufo extends Phaser.Sprite {

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
        this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7], 12, false);
        this.animations.add('getHit', [8, 9, 10, 11, 12, 13, 14, 15, 8, 9, 10, 11, 12, 13, 14, 15, 0], 30, false);

        this.events.onAnimationComplete.add( this.animCompleteCallback, this );

        this.scheduleShooting();

    }

    animCompleteCallback( sprite, anim ) {
        this.animations.play( 'idle' );
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
        
        
        // this.body.velocity.y = speedX;
        // if ( key == 'redDevil' || key == 'magentaMan') {
        //     this.body.velocity.y = 120;
            
        //     this.scale.setTo( 1 );
        // } else {
            this.body.velocity.x = speedX;
            this.body.velocity.y = speedY;

            this.scale.setTo(scale);
        // }

        // resume timer
        this.enemyTimer.resume();

        this.play( 'idle' );

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

        emitter.minParticleSpeed.setTo(-400, -400);
        emitter.maxParticleSpeed.setTo(400, 400);
        emitter.minParticleScale = this.scale.x;
        emitter.maxParticleScale = this.scale.x;
        emitter.setAlpha( 1, 0, (0.5 * 1000), 'Cubic.easeIn' );
        emitter.gravity = 200;
        
        emitter.makeParticles( 'lakitufoDie', 1 );
        emitter.start(true, 500, null, 1);

        emitter.makeParticles( 'lakitufoDie', 0 );
        emitter.start(true, 500, null, 1);

    }

}

export default Lakitufo;