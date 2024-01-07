import { Resource, Tile } from "../types/types";

// Normal:19 tiles
// 4 sheep, 4 wood, 4 wheat 3 brick, 3 ore, 1 desert
// Expansion:

const NeighborMap: Map<number, number[]> = new Map([
  [0, [1, 3]],
  [1, [0, 2, 4]],
  [2, [1, 4, 5]],
  [3, [0, 4, 7, 8]],
  [4, [0, 1, 3, 5, 8, 9]],
  [5, [1, 2, 4, 6, 9, 10]],
  [6, [2, 5, 10, 11]],
  [7, [3, 8, 12]],
  [8, [3, 4, 7, 9, 12, 13]],
  [9, [4, 5, 8, 10, 13, 14]],
  [10, [5, 6, 9, 11, 14, 15]],
  [11, [6, 10, 15]],
  [12, [7, 8, 13, 16]],
  [13, [8, 9, 12, 14, 16, 17]],
  [14, [9, 10, 13, 15, 17, 18]],
  [15, [10, 11, 14, 18]],
  [16, [12, 13, 17]],
  [17, [13, 14, 16, 18]],
  [18, [14, 15, 17]],
]);

export function GenerateBoard(sameResourceCanTouch: boolean) {
  let board: Tile[] = [];
  const resourceOptions: Resource[] = GenerateResourceList();
  const numberOptions: number[] = [
    2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
  ];
  for (let i = 0; i < 19; i++) {
    // generate resource
    let resource;
    if (sameResourceCanTouch) {
      resource = resourceOptions.splice(
        RandomInteger(resourceOptions.length),
        1
      )[0];
    } else {
      let neighborResources: Resource[] = [];
      NeighborMap.get(i)?.forEach((neighbor) => {
        if (
          neighbor < i &&
          !neighborResources.includes(board[neighbor].Resource)
        ) {
          neighborResources.push(board[neighbor].Resource);
        }
      });
      console.log(
        `${i}'s neighboring resources are ${neighborResources.join(", ")}`
      );
      const availableResources = resourceOptions.filter(
        (resource) => !neighborResources.includes(resource)
      );
      console.log(
        `${i}'s available resources are ${availableResources.join(", ")}`
      );
      resource = availableResources.splice(
        RandomInteger(availableResources.length),
        1
      )[0];
      // remove resource options array
      resourceOptions.splice(resourceOptions.indexOf(resource), 1);
    }
    // Generate Number
    let number;
    if (resource !== Resource.desert) {
      number = numberOptions.splice(RandomInteger(numberOptions.length), 1)[0];
    }
    board.push({
      ...(resource !== Resource.desert && { Number: number }),
      Resource: resource,
    });
  }
  // insert desert
  // const desertIndex = RandomInteger(board.length);
  // board = [
  //   ...board.slice(0, desertIndex),
  //   {
  //     Resource: Resource.desert,
  //   },
  //   ...board.slice(desertIndex),
  // ];

  return board;
}

export function FlipCoin(): boolean {
  return Math.floor(Math.random() * 2) === 1;
}

export function RandomInteger(max: number) {
  return Math.floor(Math.random() * max);
}

export function GenerateResourceList(): Resource[] {
  let resourceList: Resource[] = [];
  for (let i = 0; i < 4; i++) {
    resourceList.push(Resource.sheep);
    resourceList.push(Resource.wood);
    resourceList.push(Resource.wheat);
    if (i < 3) {
      resourceList.push(Resource.brick);
      resourceList.push(Resource.ore);
    }
  }
  resourceList.push(Resource.desert);
  return resourceList;
}
