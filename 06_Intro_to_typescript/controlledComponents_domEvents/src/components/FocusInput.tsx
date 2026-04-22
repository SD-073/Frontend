import { useRef, useState } from 'react';

const FocusInput = () => {
  //   const [count, setCount] = useState(0); // inferred: number
  //   const [name, setName] = useState<string | null>(null);
  //   const [posts, setPosts] = useState<Post[]>([])
  //   const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
  //     'loading',
  //   );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>Focus Input</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder='click the button to focus me'
      />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};

export default FocusInput;
