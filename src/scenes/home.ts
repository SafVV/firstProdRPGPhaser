import mapJson from '../assets/map1_1.json';
import { LAYER, Tiles, TilesSize } from '../utils/constants';

export class Home extends Phaser.Scene {
    constructor() {
        super('HomeScene');

    }

    preload() {
        this.load.image(Tiles.Home, 'src/assets/durotar.png')
        this.load.tilemapTiledJSON('map', 'src/assets/map1_1.json')
    }

    create() {
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage(mapJson.tilesets[0].name, Tiles.Home, TilesSize.SIZE, TilesSize.SIZE);
        const groundLauer = map.createLayer(LAYER.GROUND, tileset, 0, 0);
        const wallsLauer = map.createLayer(LAYER.WALLS, tileset, 0, 0);
    }
}