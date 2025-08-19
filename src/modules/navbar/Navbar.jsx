import { Outlet } from 'react-router-dom';
import MenuMobile from './components/menu/MenuMobile';

export default function Navbar({ section }) {
  return (
    <div className="w-full">
      {/* Fixed transparent navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <nav className="flex items-center justify-between w-full px-4 py-3">
          {/* Mobile Menu */}
          <MenuMobile section={section} />
        </nav>
      </div>

      {/* Pages with snap scrolling */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Outlet />
      </main>
    </div>
  );
}
