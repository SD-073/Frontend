import { useEffect, useState } from 'react';

type User = { id: number; name: string };

const TitleUpdater = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      document.title = `Welcome, ${user.name}`;
    }
  }, [user]);

  return (
    <div>
      <p>{user ? user.name : 'please log in...'}</p>
      <button onClick={() => setUser({ id: 1, name: 'Alice' })}>
        Set user to Alice
      </button>
    </div>
  );
};

export default TitleUpdater;
