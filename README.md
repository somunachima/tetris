# Tetris
This webapp is a tribute to the original Tetris game. I built it to learn more about React. It is not for any commercial purposes and not affiliated with The Tetris Company.

## Set up:
- Clone the respository

```
git clone https://www.github.com/somunachima/tetris
```

- Install the dependencies and run

```
cd react-tetris-ts
npm install
npm run dev
```
- Open the local URL in your terminal: [http://localhost:5173](http://localhost:5173).

## Live Demo
- [https://tetris-gilt-phi.vercel.app/](https://tetris-gilt-phi.vercel.app/)

## Key Features:
- Click "Start Game" button, a random block is released from the top left corner
- The dropping block falls by one row every second until it hits the bottom of the board or another block
- Use the left and right arrow to move the dropping block from left to right
- All row(s) that are full are removed from the grid. This could be multiple rows
- The game stops when a dropping block cannot enter the grid because another block is in the way
- When the game stops, the "New Game" button appears to clear the board and restart the game

## Tech Stack:
- React
- Typescript
- Vercel

## Assumptions:
- The orientation of the blocks match the orientation of the blocks displayed in Encord's brief

## Known Limitations:
- The blocks cannont be rotated yet
- The speed of the dropping block can not be increased or decreased
- The blocks cannot be moved using touchscreen so the game is not playable on mobile devices

## Future Plans
Besides the issues below, there are few more features I want to build:
- [ ] Level system - speed up falling blocks after clearing N lines
- [ ] "Ghost piece" showing where the block will land if it was dropped now
- [ ] Pause/resume game functionality
- [ ] Allow users to rotate block clockwise
- [ ] Score tracking - increment score when lines cleared
- [ ] Keyboard support for mobile devices

### Known Issues
- The "Start Game" and "New Game" button disappears while the game is playing
