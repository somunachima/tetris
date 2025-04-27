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
