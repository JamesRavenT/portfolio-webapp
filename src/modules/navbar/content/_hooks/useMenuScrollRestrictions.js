/**
 * useMenuScrollRestrictions.js
 * Custom hook to prevent closing if the menu is open
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { useEffect } from 'react';

export function useMenuScrollRestrictions(isOpen) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
}
