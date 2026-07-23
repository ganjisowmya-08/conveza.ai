import { useState } from 'react';

export const users = () => {
  const [value, setValue] = useState(null);
  return [value, setValue];
};

export default users;
