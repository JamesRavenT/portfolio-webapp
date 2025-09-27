import { useEffect } from 'react';

export function useMenuCloseIfTop(setIsOpen, section) {
  useEffect(() => {
    if (section === '') setIsOpen(false);
  }, [section]);
}
