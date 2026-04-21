// type GreetingProps = {
//   name: string;
// };

import type { GreetingProps } from '../types';

const Greeting = ({ name }: GreetingProps) => {
  return (
    <div>
      <h2>Hey, {name.toUpperCase()!}</h2>
    </div>
  );
};

export default Greeting;
