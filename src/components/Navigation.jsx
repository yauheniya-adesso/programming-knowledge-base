import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Menu, X } from 'lucide-react';
import { Icons } from "../constants/icons";

const Navigation = ({ currentPage, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Define pages with optional icons
  const pages = [
    { name: 'Java', icon: 'ri:java-fill' },
    { name: 'HTML', icon: 'simple-icons:html5' },
    { name: 'CSS', icon: 'simple-icons:css3' },
    { name: 'JavaScript', icon: 'simple-icons:javascript' },
    { name: 'Git', icon: 'simple-icons:git' },
  ];

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#006EC7] z-50">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo + Title */}
        <button
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-2 text-white font-bold"
        >
          <img src={Icons.programmingIcon} width={28} height={28} color="white" />
          <span className="hidden md:inline">Programming Knowledge Base</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => {
            const isActive = currentPage === page.name;
            return (
              <button
                key={page.name}
                onClick={() => handleNavigate(page.name)}
                className={`flex items-center gap-2 text-white font-medium transition-colors ${
                  isActive ? 'underline' : 'hover:underline'
                }`}
              >
                {page.icon && <Icon icon={page.icon} width={20} height={20} color="white" />}
                {page.name}
              </button>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#006EC7] w-full">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {pages.map((page) => {
              const isActive = currentPage === page.name;
              return (
                <button
                  key={page.name}
                  onClick={() => handleNavigate(page.name)}
                  className={`flex items-center gap-2 text-white font-medium py-2 w-full text-left ${
                    isActive ? 'underline' : 'hover:underline'
                  }`}
                >
                  {page.icon && <Icon icon={page.icon} width={20} height={20} color="white" />}
                  {page.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
