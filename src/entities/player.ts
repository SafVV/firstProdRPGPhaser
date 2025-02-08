import { SPRITES } from "../utils/constants";
import { Entity } from "./entity";

export class Player extends Entity {
    speed: number;
    textureKey: string;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture, SPRITES.PLAYER)
    this.speed = 0.15

    const anims = this.scene.anims;
    const animsFrameRait = 9;
    this.textureKey = texture;

    // Создадим анимации движения для движения
    anims.create({
        key: 'down',
        frames: anims.generateFrameNumbers(this.textureKey, {
            start: 0,
            end: 2
        }),
        frameRate: animsFrameRait,// должно быть кратно количеству кадров в анимации
        repeat: -1
    })

    anims.create({
        key: 'up',
        frames: anims.generateFrameNumbers(this.textureKey, {
            start: 3,
            end: 5
        }),
        frameRate: animsFrameRait,// должно быть кратно количеству кадров в анимации
        repeat: -1
    })

    anims.create({
        key: 'right',
        frames: anims.generateFrameNumbers(this.textureKey, {
            start: 9,
            end: 11
        }),
        frameRate: animsFrameRait,// должно быть кратно количеству кадров в анимации
        repeat: -1
    })

    anims.create({
        key: 'left',
        frames: anims.generateFrameNumbers(this.textureKey, {
            start: 6,
            end: 8
        }),
        frameRate: animsFrameRait,// должно быть кратно количеству кадров в анимации
        repeat: -1
    })
}

    update(delta: number): void {
        const keys = this.scene.input.keyboard.createCursorKeys();

        if (keys.up.isDown) {
            this.play('up', true)
            this.setPosition(this.x, this.y - delta * this.speed)
        } else if (keys.down.isDown) {
            this.play('down', true)
            this.setPosition(this.x, this.y + delta * this.speed)
        } else if (keys.left.isDown) {
            this.play('left', true)
            this.setPosition(this.x - delta * this.speed, this.y)
        } else if (keys.right.isDown) {
            this.play('right', true)
            this.setPosition(this.x + delta * this.speed, this.y)
        } else {
            this.stop()
        }
    }
}
