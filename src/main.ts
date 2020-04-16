require("./styles/style.scss");

import * as Phaser from "phaser";
import GameScene from './scenes/GameScene';

const game = new Phaser.Game({
    type: Phaser.WEBGL,
    backgroundColor: "#36393F",
    parent: document.body,
    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
    },
    scene: GameScene,
});

window.addEventListener("resize", () => game.scale.refresh());

