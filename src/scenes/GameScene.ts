import * as Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    keys!: Phaser.Types.Input.Keyboard.CursorKeys;
    constructor() {
        super({
            key: "GameScene",
        });
    }

    preload() {
        this.load.spritesheet("environment", "/images/environment.png", {
            frameWidth: 30,
            frameHeight: 16,
            margin: 1,
            spacing: 3,
            startFrame: 0,
            endFrame: 4,
        });
    }

    create() {
        this.keys = this.input.keyboard.createCursorKeys();
        
        const mapWidth = 20; // tiles
        const mapHeight = 100; // tiles

        const tileWidth = 30; // px
        const tileHeight = 16; // px

        let i = 0;
        for (let y = 0; y < mapHeight; y++) {
            for (let x = 0; x < mapWidth; x++) {
                const tile = this.add.image(x * tileWidth + ((y % 2 === 1) ? tileWidth / 2 : 0), y * tileHeight / 2, "environment", 0);
            }
        }
    }
    
    update() {
        const scrollSpeed = 3;
        if (this.keys.up?.isDown) {
            this.cameras.main.scrollY -= scrollSpeed;
        }
        if (this.keys.down?.isDown) {
            this.cameras.main.scrollY += scrollSpeed;
        }
        if (this.keys.left?.isDown) {
            this.cameras.main.scrollX -= scrollSpeed;
        }
        if (this.keys.right?.isDown) {
            this.cameras.main.scrollX += scrollSpeed;
        }
    }
}
