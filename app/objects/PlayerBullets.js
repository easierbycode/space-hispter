class PlayerBullets extends Phaser.Group {

    constructor(game) {

        super(game);

        this.BULLET_SPEED = -1000;

        this.enableBody = true;

    }

    createPlayerBullet(player) {

        let bullet = this.getFirstExists(false);

        if(bullet) {
            bullet.reset(player.x, player.top);
        } else {
            bullet = new globalObjects.Bullet(this.game, player.x, player.top);
            this.add(bullet);
        }

        bullet.body.velocity.y = this.BULLET_SPEED;

    }


}

export default PlayerBullets;
