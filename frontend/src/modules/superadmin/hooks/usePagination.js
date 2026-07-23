import { useState } from 'react';

export const usePagination = () => {
  const [value, setValue] = useState(null);
  return [value, setValue];
};

export default usePagination;
