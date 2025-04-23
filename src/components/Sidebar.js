
import { Home, Flame, Trophy, Gamepad2, Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', icon: <Home size={20} />, label: 'Home' },
  { to: '/categories', icon: <Gamepad2 size={20} />, label: 'Categories' },
  { to: '/tournaments', icon: <Trophy size={20} />, label: 'Tournaments' },
  { to: '/trending', icon: <Flame size={20} />, label: 'Trending' },
  { to: '/about', icon: <Info size={20} />, label: 'About' },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-16 bg-gray-950 flex-col items-center py-6 space-y-6 shadow-card z-40">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          title={link.label}
          className={({ isActive }) =>
            `flex items-center justify-center w-10 h-10 rounded ${isActive ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-white'}`
          }
        >
          {link.icon}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
