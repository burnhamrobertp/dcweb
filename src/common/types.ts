export interface IBranch {
  name: string,
  tiles: {
    floor: IMapTile[],
    walls: IMapTile[],
  }
}

export interface IMapTile {
  name: string,
  sprite: {
    class: string,
    variants: number,
  }
}