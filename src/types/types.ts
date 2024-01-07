export enum Resource {
  wheat = "wheat",
  sheep = "sheep",
  ore = "ore",
  wood = "wood",
  brick = "brick",
  desert = "desert",
}
export interface Tile {
  Number?: number;
  Resource: Resource;
}
