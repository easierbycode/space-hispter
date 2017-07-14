class Bowser extends Phaser.Sprite {

    constructor(game, x, y, key, health, enemyBullets) {

        super(game, x, y, key);

        // set variables
        this.enemyBullets = enemyBullets;
        this.health = health;
        
        // create and initiate timer
        this.enemyTimer = this.game.time.create(false); // keeps timer alive after it's done
        this.enemyTimer.start();

        // positioning
        this.anchor.setTo(0.5, 1);

        // physics properties
        game.physics.arcade.enable(this);
   

        // initialize animations
        this.animations.add( 'getHit', [0, 1, 2, 3, 4, 3, 4, 0], 6, false );

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

        // this.game.ironManExplosion   = this.add.emitter( 0, 0, 250 );
        // this.game.ironManExplosion.name = 'ironManExplosion';
        // this.game.ironManExplosion.blendMode = Phaser.blendModes.ADD;
        // this.game.ironManExplosion.gravity.y = 600;
        // this.game.ironManExplosion.makeParticles([ '1pxRed', '1pxYellow' ]);
        // this.game.ironManExplosion.minParticleScale = 1;
        // this.game.ironManExplosion.maxParticleScale = 8;
        // this.game.ironManExplosion.setAlpha( 1, 0, this.BURST_LIFESPAN, 'Cubic.easeIn' );
        // this.game.ironManExplosion.setAngle( -180, 180, 0, 2400 );
        // this.game.ironManExplosion.setRotation( 0, 0 );

        emitter.blendMode = Phaser.blendModes.ADD;
        emitter.gravity.y = 600;
        emitter.setAlpha( 1, 0, 500, 'Cubic.easeIn' );
        emitter.setAngle( -180, 180, 0, 2400 );
        emitter.setRotation( 0, 0 );

        emitter.makeParticles( 'bowserParticles', [0,1,2] );
        emitter.minParticleScale = 2;
        emitter.maxParticleScale = this.scale.x * 2;
        emitter.minParticleSpeed.setTo(-200, -200);
        emitter.maxParticleSpeed.setTo(200, 200);
        // emitter.gravity = 0;
        emitter.start(true, 500, null, 100);

    }

}

export default Bowser;