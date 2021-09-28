export type Spacing = { [direction in Direction]?: number }

export enum Direction {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  FULL = 'full',
  X = 'x',
  Y = 'y'
}
