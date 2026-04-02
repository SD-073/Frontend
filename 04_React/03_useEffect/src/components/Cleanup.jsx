import { useEffect, useState } from 'react';

const Cleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //   console.log(width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log('Cleanup mounted and listening for resize');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Cleanup: listener removed');
    };
  }, []);

  return (
    <div>
      <h2>Unmounting</h2>
      <p>Window width: {width}</p>
    </div>
  );
};

export default Cleanup;
