import { createContext, useContext } from 'react';

const ScrollContext = createContext(null);
const useScroll = () => useContext(ScrollContext);

export { ScrollContext, useScroll };
