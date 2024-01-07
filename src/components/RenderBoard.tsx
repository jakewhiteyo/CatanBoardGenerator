import { Tile } from "../types/types";

interface RenderBoardProps {
  board: Tile[];
}
export function RenderBoard({ board }: RenderBoardProps) {
  return (
    <div className="board">
      <div className="tile-row first-row">
        {board.slice(0, 3).map((tile) => CreateTileResource(tile))}
      </div>
      <div className="tile-row second-row">
        {board.slice(3, 7).map((tile) => CreateTileResource(tile))}
      </div>
      <div className="tile-row third-row">
        {board.slice(7, 12).map((tile) => CreateTileResource(tile))}
      </div>
      <div className="tile-row fourth-row">
        {board.slice(12, 16).map((tile) => CreateTileResource(tile))}
      </div>
      <div className="tile-row fifth-row">
        {board.slice(16, 19).map((tile) => CreateTileResource(tile))}
      </div>
      <div className="tile-row first-row">
        {board.slice(0, 3).map((tile) => CreateTileNumber(tile))}
      </div>
      <div className="tile-row second-row">
        {board.slice(3, 7).map((tile) => CreateTileNumber(tile))}
      </div>
      <div className="tile-row third-row">
        {board.slice(7, 12).map((tile) => CreateTileNumber(tile))}
      </div>
      <div className="tile-row fourth-row">
        {board.slice(12, 16).map((tile) => CreateTileNumber(tile))}
      </div>
      <div className="tile-row fifth-row">
        {board.slice(16, 19).map((tile) => CreateTileNumber(tile))}
      </div>
    </div>
  );
}
function CreateTileResource(tile: Tile) {
  return (
    <img
      width="100"
      height="auto"
      alt={`${tile.Resource}`}
      src={process.env.PUBLIC_URL + `/assets/${tile.Resource}.png`}
    />
  );
}
function CreateTileNumber(tile: Tile) {
  return (
    <div className="number">
      <div className="number-pic">
        {tile.Number && (
          <img
            width="40"
            height="40"
            alt={`${tile.Number}`}
            src={process.env.PUBLIC_URL + `/assets/${tile.Number}.png`}
          />
        )}
      </div>
    </div>
  );
}
