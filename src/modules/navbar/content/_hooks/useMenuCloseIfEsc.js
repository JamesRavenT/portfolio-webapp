/**
 * useMenuCloseIfEsc.js
 * Custom hook to close a menu when the Escape key is pressed.
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { useEffect } from 'react';

export function useMenuCloseIfEsc(setIsOpen) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
}
