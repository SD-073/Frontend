import { useState } from 'react';
import Counter from './components/Counter';
import CounterState from './components/CounterState';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import Example6 from './components/Example6';
import ThemeToggle from './components/ThemeToggle';
import ThemeBox from './components/ThemeBox';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      {/* <Counter /> */}
      {/* <CounterState /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Example5 /> */}
      {/* <Example6 /> */}

      <ThemeToggle theme={theme} setTheme={setTheme} />
      <ThemeBox theme={theme} />
    </>
  );
}

export default App;
