/**
 * useMenuCloseIfTop.js
 * Custom hook to close a menu when the at the top section of the page
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { useEffect } from 'react';

export function useMenuCloseIfTop(setIsOpen, section) {
  useEffect(() => {
    if (section === '') setIsOpen(false);
  }, [section]);
}
