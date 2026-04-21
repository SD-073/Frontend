import { useState } from 'react';

const Profile = () => {
  const [count, setCount] = useState(0); // inferred: number
  const [name, setName] = useState('Alice'); // inferred: string
  const [isOpen, setIsOpen] = useState(true); // inferred: boolean

  //   const [user, setUser] = useState(null)
  const [user, setUser] = useState<string | null>(null);

  //   useState(0);
  //   useState<string | null>(null);
  //   useState<Post[]>([])

  function identity(value: string): string {
    console.log(value);
    return value;
  }

  function identity2<T>(value: T): T {
    console.log(value);
    return value;
  }

  // identity('Hello');
  // identity(40);

  identity2('Hello');
  identity2(40);
  identity2(false);

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={() => setUser('Alice')}>Set user</button>
      <p>{user}</p>
    </div>
  );
};

export default Profile;
