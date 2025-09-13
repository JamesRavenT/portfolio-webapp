import { useEffect } from 'react';

export function useMenuScrollRestrictions(isOpen) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
}
