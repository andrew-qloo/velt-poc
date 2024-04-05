import { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState(false);

  const off = () => {
    setValue(false);
  };

  const on = () => {
    setValue(true);
  };

  const set = (nextValue) => {
    setValue(nextValue);
  };

  const toggle = () => {
    setValue(prevValue => !prevValue);
  };

  return {
    off,
    on,
    set,
    toggle,
    value,
  };
};

export default useToggle;
