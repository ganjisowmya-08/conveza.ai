import { useState } from 'react';

export const useSidebar = () => {
  const [value, setValue] = useState(null);
  return [value, setValue];
};

export default useSidebar;
