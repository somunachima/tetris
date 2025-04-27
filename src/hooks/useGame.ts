import { useCallback } from "react";
import { useGameBoard } from "./useGameBoard";

enum TickSpeed {
  Normal = 800,
}


export function useGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);

  const [
    { board, droppingRow, droppingColumn, droppingBlock, droppingShape },
    dispatchBoardState,
  ] = useGameBoard();

  const gameTick = useCallback(() => {
    dispatchBoardState({ type: `drop`});
  }, [dispatchBoardState]);

  useInterval(() => {
    if (!isPlaying) {
      return;
    }
    gameTick();
  }, tickSpeed);
}
