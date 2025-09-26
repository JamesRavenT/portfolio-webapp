/**
 * useMenuCloseIfTop.js
 * Custom hook to close a menu when the at the top section of the page
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

const ScrollHandlePos = {
  '': 'translate-y-10 lg:translate-y-10 2xl:translate-y-14',
  'About Me': 'translate-y-26 lg:translate-y-32 2xl:translate-y-38',
  Skills: 'translate-y-43 lg:translate-y-57 2xl:translate-y-62',
  Projects: 'translate-y-59 lg:translate-y-80 2xl:translate-y-86',
};

function ScrollHandle({ section }) {
  return (
    <div className="w-0.25 bg-amber-50 h-[50vh] self-start relative">
      <div
        className={`absolute left-0 w-2 h-8 bg-cyan-600 transition-transform duration-500 -translate-x-1 ${
          ScrollHandlePos[section] || ''
        }`}
      />
    </div>
  );
}

export { ScrollHandle, ScrollHandlePos };
