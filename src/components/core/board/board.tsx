import React from "react";
import { Box, PlayArea } from "./style";

interface BoardProps {
  squares: Array<string | null>;
  onClick: (index: number) => void;
}

export default function Board({ squares, onClick }: BoardProps) {
  const renderSquare = (index: number) => (
    <Box className="square" onClick={() => onClick(index)}>
      {squares[index]}
    </Box>
  );

  return (
    <PlayArea>
      {[0, 1, 2].map((row) => (
        <React.Fragment key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </React.Fragment>
      ))}
    </PlayArea>
  );
}
