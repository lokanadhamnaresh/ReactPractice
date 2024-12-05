import React, { useState, useCallback } from 'react';

const Button = React.memo(({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={handleClick}>{children}</button>;
});

function Memo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('Hello');

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Button handleClick={increment}>Increment</Button>
      <Button handleClick={() => setValue('World')}>Change Value</Button>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
    </div>
  );
}

export default Memo;
