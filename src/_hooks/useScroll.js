/**
 * useScroll.js
 * Provides a React Context and hook for accessing scroll-related state
 * Finalized for v1.0.0 release
 * Last Updated 09/22
 */

import { createContext, useContext } from 'react';

const ScrollContext = createContext(null);
const useScroll = () => useContext(ScrollContext);

export { ScrollContext, useScroll };
