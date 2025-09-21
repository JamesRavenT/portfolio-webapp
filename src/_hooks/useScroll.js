/**
 * useScroll.js
 * Cleaned for v1.0.0 release
 * Last Updated 09/21
 */

import { createContext, useContext } from 'react';

const ScrollContext = createContext(null);
const useScroll = () => useContext(ScrollContext);

export { ScrollContext, useScroll };
