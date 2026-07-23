import { useState } from 'react';

export const useTheme = () => {
  const [value, setValue] = useState(null);
  return [value, setValue];
};

export default useTheme;
