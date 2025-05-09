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

export function useGameBoard(): [BoardState, Dispatch<Action>] {
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

export function hasCollisions(
  board: BoardShape,
  currentShape: BlockShape,
  row: number,
  column: number
): boolean {
  let hasCollision = false;
  currentShape
    .filter((shapeRow) => shapeRow.some((isSet) => isSet))
    .forEach((shapeRow: boolean[], rowIndex: number) => {
      shapeRow.forEach((isSet: boolean, colIndex: number) => {
        if (
          isSet &&
          (row + rowIndex >= board.length ||
            column + colIndex >= board[0].length ||
            column + colIndex < 0 ||
            board[row + rowIndex][column + colIndex] !== EmptyCell.Empty
          )
        ) {
          hasCollision = true;
        }
      });
    });
  return hasCollision;
}

type Action = {
  type: 'start' | 'drop' | 'commit' | 'move';
  newBoard?: BoardShape,
  newBlock?: Block,
  isPressingLeft?: boolean;
  isPressingRight?: boolean;
  isPressingDown?: boolean;
};

function boardReducer(state: BoardState, action: Action): BoardState {
  let newState = { ...state };
  switch (action.type) {
    case 'start':
      const firstBlock = getRandomBlock();
      return {
        board: getEmptyBoard(),
        droppingRow: 0,
        droppingColumn: 0,
        droppingBlock: firstBlock,
        droppingShape: SHAPES[firstBlock].shape,
      };
    case 'drop':
      newState.droppingRow++;
        break;
    case 'commit':
      return {
        board: [
          ...getEmptyBoard(BOARD_HEIGHT - action.newBoard!.length),
          ...action.newBoard!,
        ],
        droppingRow: 0,
        droppingColumn: 0,
        droppingBlock: action.newBlock!,
        droppingShape: SHAPES[action.newBlock!].shape,
      }
    case 'move':
      {
        let columnOffset = action.isPressingLeft ? -1 : 0;
      columnOffset = action.isPressingRight ? 1 : columnOffset;
      let rowOffset = action.isPressingDown ? -1 : 0;
      rowOffset = action.isPressingDown ? 1 : rowOffset;
      if (!hasCollisions(
          newState.board,
          newState.droppingShape,
          newState.droppingRow + rowOffset,
          newState.droppingColumn + columnOffset)
      ) {
          newState.droppingColumn += columnOffset;
          newState.droppingRow += rowOffset;
        }
      break;
    }
    default:
      {
      const unhandledType: never = action.type;
      throw new Error(`Action cannot be handled: ${unhandledType}`);
      }
  }

  return newState;
}
