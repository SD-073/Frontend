import { useState } from 'react';
import LightBulb from './components/LightBulb';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  // const handleSwitch = () => {
  //   if (!isOn) {
  //     setCount((prev) => prev + 1);
  //   }
  //   setIsOn(!isOn);
  // };

  const handleSwitch = () => {
    if (!isOn && count >= 10) {
      alert('The bulb has been used 10 times and its now locked');
      return;
    }

    if (!isOn) {
      setCount((prev) => prev + 1);
    }

    setIsOn((prev) => !prev);
  };

  const handleReset = () => {
    setCount(0);
    setIsOn(false);
  };

  // console.log(count);

  // console.log(isOn);

  return (
    <>
      <p>Activated: {count} / 10</p>
      {/* <button onClick={handleSwitch}>Switch</button> */}
      <button onClick={handleSwitch}>
        {count >= 10 ? 'Locked 🔒' : isOn ? 'Turn off' : 'Turn on'}
      </button>
      {count >= 10 && <button onClick={handleReset}>UNLOCK</button>}
      <LightBulb isOn={isOn} />
    </>
  );
}

export default App;
