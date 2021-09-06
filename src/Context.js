import { createContext } from 'react';

const Context = createContext({
  parasites: [],
  setLimit: null,
  setOffset: null,
});

export default Context;
