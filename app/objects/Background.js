class Background extends Phaser.TileSprite {

    constructor(game) {

        super(game, 0, 0, game.world.width, game.world.height, 'space');

        this.autoScroll(0, 30);

        game.add.existing(this);

    }

    getClickDirection() {

        let targetX = this.game.input.activePointer.position.x;
        let direction = targetX >= this.game.world.centerX ? 1 : -1;

        return direction;
        
    }
}

export default Background;
