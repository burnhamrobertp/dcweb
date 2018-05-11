export interface IBranch {
  name: string,
  tiles: {
    floor: IMapTile[],
    walls: IMapTile[],
  }
}

export interface IMapCatalog {
  [key: string]: { [key: string]: IMapTile }
}

export interface IMapTile {
  name: string,
  sprite: {
    class: string,
    variants: number,
  }
}