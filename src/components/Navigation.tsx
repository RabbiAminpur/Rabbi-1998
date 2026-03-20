import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const menuItems = [
  { name: 'এক নজরে', path: '/' },
  { name: 'কর্ম অভিজ্ঞতা', path: '/experience' },
  { name: 'পড়াশোনা', path: '/education' },
  { name: 'অন্যান্য অভিজ্ঞতা', path: '/other' },
  { name: 'আমার সম্পর্কে', path: '/about' },
  { name: 'যোগাযোগ', path: '/contact' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="w-full bg-white border-y border-slate-100 sticky top-[64px] z-40 overflow-x-auto no-scrollbar">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex items-center justify-start md:justify-center space-x-8 py-4 whitespace-nowrap">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 relative py-1 ${
                  location.pathname === item.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
