import { useMemo, useState } from 'react';

const ScoreBoard = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');

  //   const rank = score * 100;

  const rank = useMemo(() => {
    console.log('calculating rank');
    return score * 100;
  }, [score]);

  return (
    <div>
      <h2>Scoreboard</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='your name'
      />
      <p>{name}</p>
      <p>
        Score: {score} - Rank {rank}
      </p>

      <button onClick={() => setScore((s) => s + 1)}>Add point</button>
    </div>
  );
};

export default ScoreBoard;
