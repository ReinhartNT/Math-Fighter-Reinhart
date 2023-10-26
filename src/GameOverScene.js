import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
    constructor(){
        super('over-scene')
    }
    init(data){
        this.replayButton = undefined
        this.score = data.score
    }
    preload(){
        this.load.image('background', 'Images/bg_layer1.png')
        this.load.image('game-over', 'Images/gameover.png')
        this.load.image('replay-button', 'Images/replay.png')
    }
    create(){
        this.add.image(240, 320, 'background')
        this.add.image(240, 240, 'game-over')
        this.add.text(165, 320, 'Score: ' + this.score, {
            fontSize: '32px', color: 'black'
        })
        this.replayButton = this.add.image(230, 400, 'replay-button').setInteractive().setScale(0.5)
        this.replayButton.once('pointerup', () => {
            this.scene.start('math-fighter-scene')
        }, this)
    }
}