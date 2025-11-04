import type { Color, PieceSymbol, Square } from "chess.js"

export const ChessBoard = ({ board }: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][]
}) => {
  return <div className="text-white">
    {board.map((row, i) => {
      return <div key ={i} className="flex">
        {row.map((square,j) => {
          return <div key = {j} className={`w-16 h-16 ${(i+j)%2 == 0 ? 'bg-blue-500': 'bg-blue-100'}`}>
            <div className="w-full flex justify-center h-full">
              <div className="h-full flex justify-center flex-col">
                {square ? square.type : ""}
              </div>
            </div>

          </div>
        })}
      </div>
    })}
  </div>
} 