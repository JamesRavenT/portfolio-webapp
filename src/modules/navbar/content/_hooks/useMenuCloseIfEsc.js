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
