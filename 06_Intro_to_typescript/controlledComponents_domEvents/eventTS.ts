import { MouseEvent } from 'react';

const handlecClick = (event: MouseEvent<HTMLButtonElement>) => {
  console.log(event.clientX);
  console.log(event.key);
};
