export enum Block {
  O = 'O',
  I = 'I',
  S = 'S',
  Z = 'Z',
  L = 'L',
  J = 'J',
  T = 'T',
}

export enum EmptyCell {
  Empty = 'Empty',
}

export type CellOptions = Block | EmptyCell;

export type BoardShape = CellOptions[][];

export type BlockShape = boolean[][];

export const SHAPES: ShapesObj = {
  O: {
    shape: [
      [true, true],
      [true, true],
    ],
  },
  I: {
    shape: [
      [false, true, false, false],
      [false, true, false, false],
      [false, true, false, false],
      [false, true, false, false],
    ],
  },
    S: {
    shape: [
      [false, false, false],
      [false, true, true],
      [true, true, false],
    ],
  },
  Z: {
    shape: [
      [false, false, false],
      [true, true, false],
      [false, true, true],
    ],
  },
  J: {
    shape: [
      [false, true, false],
      [false, true, false],
      [true, true, false],
    ],
  },
  L: {
    shape: [
      [false, true, false],
      [false, true, false],
      [false, true, true],
    ],
  },
  T: {
    shape: [
      [false, false, false],
      [true, true, true],
      [false, true, false],
    ],
  },
};
