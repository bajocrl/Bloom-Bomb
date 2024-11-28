import { useEffect, useState } from 'react';
import { Square } from '@/components/Square';
import { GetWinner } from '@/utils/winner';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurns, setPlayerTurns] = useState<'computer' | 'player'>(
    'computer'
  );

  // Check who will start moving
  useEffect(() => {
    const handlePlayerTurns = () => {
      const randomIndex = Math.ceil(Math.random() * 2);
      setPlayerTurns(randomIndex === 1 ? 'player' : 'computer');
    };
    handlePlayerTurns();
  }, []);

  // IF SQUARE CHANGES, COMPUTER MOVE
  useEffect(() => {
    if (!squares.includes(null)) return;
    if (GetWinner(squares)) return;
    if (playerTurns === 'computer') {
      const temp = squares;
      let randomIndex = 0;
      while (temp[randomIndex]) {
        randomIndex = Math.floor(Math.random() * 9);
        if (!temp[randomIndex]) break;
      }
      temp[randomIndex] = playerTurns === 'computer' ? '💣' : '🌸';

      setTimeout(() => {
        setSquares([...temp]);
        setPlayerTurns((prev) => (prev === 'computer' ? 'player' : 'computer'));
      }, 500);
    }
  }, [squares]);

  const squareClick = (i: number) => {
    const temp = squares;
    if (!squares.includes(null)) return;

    if (temp[i] || GetWinner(squares)) return;
    temp[i] = playerTurns === 'computer' ? '💣' : '🌸';
    setTimeout(() => {
      setSquares([...temp]);
      setPlayerTurns((prev) => (prev === 'computer' ? 'player' : 'computer'));
    }, 500);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    const randomIndex = Math.ceil(Math.random() * 2);
    setPlayerTurns(randomIndex === 1 ? 'player' : 'computer');
  };

  const winner = GetWinner(squares);
  let status;
  if (winner) {
    status = winner === '💣' ? '💣' : '🌸';
  }
  if (!squares.includes(null)) {
    status = 'It is a tie game🤣';
  }

  return (
    <div className=''>
      <div className='sm:w-6/12'>
        <div className='pb-4 flex justify-between gap-4'>
          <p className='text-lg'>
            {winner ? (
              <span className='text-2xl'>
                {status}
                <span className='text-xl pl-1'>WINNER!!!</span>
              </span>
            ) : !squares.includes(null) ? (
              status
            ) : (
              `${playerTurns} turns`
            )}
          </p>
          <button
            onClick={handleRestart}
            className='px-4 py-2 rounded-md bg-rose-500 text-gray-950 hover:opacity-80'
          >
            Restart
          </button>
        </div>
        {/* Board */}
        <div className='w-full border-2 border-pink-600/60 rounded shadow-md'>
          <div className='grid grid-cols-3 grid-rows-3'>
            {squares.map((value, i) => (
              <Square key={i} btnClick={() => squareClick(i)} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Board };
