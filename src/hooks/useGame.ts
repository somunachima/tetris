import { useCallback, useState } from "react";
import { useGameBoard } from "./useGameBoard";
import { useInterval } from "./useInterval";
import { BoardShape } from "../types";

enum TickSpeed {
  Normal = 1000,
}

export function useGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);

  const [
    { board, droppingRow, droppingColumn, droppingBlock, droppingShape },
    dispatchBoardState,
  ] = useGameBoard();

  const startGame = useCallback(() => {
    setIsPlaying(true);
    setTickSpeed(TickSpeed.Normal);
    dispatchBoardState({ type: 'start'})
  }, [dispatchBoardState]);

  const gameTick = useCallback(() => {
    dispatchBoardState({ type: 'drop'});
  }, [dispatchBoardState]);

  useInterval(() => {
    if (!isPlaying) {
      return;
    }
    gameTick();
  }, tickSpeed);

  const renderedBoard = structuredClone(board) as BoardShape;
  if (isPlaying) {
    droppingShape
    .filter((row) => row.some((isSet) => isSet))
    .forEach((row: boolean[], rowIndex: number) => {
      row.forEach((isSet: boolean, colIndex: number) => {
        if (isSet) {
          renderedBoard[droppingRow + rowIndex][droppingColumn + colIndex] = droppingBlock;
        }
      });
    });
  }

  return {
    board: renderedBoard,
    startGame,
    isPlaying,
  };
}
