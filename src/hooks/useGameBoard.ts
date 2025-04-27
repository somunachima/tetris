import { Dispatch, useReducer } from "react";
import { Block, BlockShape, BoardShape, EmptyCell, SHAPES } from "../types";

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export type BoardState = {
  board: BoardShape;
  droppingRow: number;
  droppingColumn: number;
  droppingBlock: Block;
  droppingShape: BlockShape;
};

function useGameBoard(): [BoardState, Dispatch<Action>] {
  const [boardState, dispatchBoardState] = useReducer(
    boardReducer,
    {
      board: [],
      droppingRow: 0,
      droppingColumn: 0,
      droppingBlock: Block.I,
      droppingShape: SHAPES.I.shape,
    },
    (emptyState) => {
      const state = {
        ...emptyState,
        board: getEmptyBoard(),
      };
      return state;
    }
  );

  return [boardState, dispatchBoardState];
}

export function getEmptyBoard(height = BOARD_HEIGHT): BoardShape {
  return Array(height)
    .fill(null)
    .map(() => Array(BOARD_WIDTH).fill(EmptyCell.Empty))
}

export function getRandomBlock(): Block {
  const blockValues = Object.values(Block);
  return blockValues[Math.floor(Math.random() * blockValues.length)] as Block;
}

type Action = {
  type: 'start' | 'drop' | 'commit' | 'move';
};

function boardReducer(state: BoardState, action: Action): BoardState {
  switch (action.type) {
    case 'start':
      { const firstBlock = getRandomBlock();
      return {
        board: getEmptyBoard(),
        droppingRow: 0,
        droppingColumn: 3,
        droppingBlock: firstBlock,
        droppingShape: SHAPES[firstBlock].shape,
      }; }
    case 'drop':
    case 'commit':
    case 'move':
    default:
      { const unhandledType: never = action.type;
      throw new Error(`Action cannot be handled: ${unhandledType}`); }
  }
}
