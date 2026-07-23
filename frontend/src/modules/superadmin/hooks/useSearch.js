import { useState } from 'react';

export const useSearch = () => {
  const [value, setValue] = useState(null);
  return [value, setValue];
};

export default useSearch;
