import mapJson from '../assets/map1_1.json';
import { Player } from '../entities/player';
import { LAYER, SPRITES, Tiles, SIZES } from '../utils/constants';

export class Home extends Phaser.Scene {
    private player?: Player;
    constructor() {
        super('HomeScene');

    }

    preload() {
        this.load.image(Tiles.Home, 'src/assets/durotar.png')
        this.load.tilemapTiledJSON('map', 'src/assets/map1_1.json')
        this.load.spritesheet(SPRITES.PLAYER, 'src/assets/characters/player.png', {
            frameWidth: SIZES.PLAYER.WIDTH,
            frameHeight: SIZES.PLAYER.HEIGHT
        })
    }

    create() {
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage(mapJson.tilesets[0].name, Tiles.Home, SIZES.SIZE, SIZES.SIZE);
        const groundLauer = map.createLayer(LAYER.GROUND, tileset, 0, 0);
        const wallsLauer = map.createLayer(LAYER.WALLS, tileset, 0, 0);

        this.player = new Player(this, 100, 100, SPRITES.PLAYER)
    }

    update(time: number, delta: number): void {
        this.player.update(delta);    
    }
}