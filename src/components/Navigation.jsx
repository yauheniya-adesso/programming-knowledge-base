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
      <style>{`
        .nav-link {
          position: relative;
          padding: 8px 12px;
          border-radius: 6px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 12px;
          right: 12px;
          height: 2px;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
        .nav-link:hover {
          background-color: white;
          color: #F566BA;
        }
        .nav-link:hover::after {
          background-color: #FF9868;
        }
        .nav-link:hover .nav-icon {
          color: #F566BA;
        }
        .nav-link.active {
          background-color: white;
          color: #006EC7;
        }
        .nav-link.active::after {
          background-color: #006EC7;
        }
        .nav-link.active .nav-icon {
          color: #006EC7;
        }
        .mobile-menu {
          background: rgba(0, 110, 199, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
      
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo + Title */}
        <button
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-2 text-white font-bold cursor-pointer"
        >
          <img src={Icons.programmingIcon} width={28} height={28} color="white" />
          <span className="hidden md:inline">Programming Knowledge Base</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-2">
          {pages.map((page) => {
            const isActive = currentPage === page.name;
            return (
              <button
                key={page.name}
                onClick={() => handleNavigate(page.name)}
                className={`nav-link flex items-center gap-2 text-white font-medium cursor-pointer ${
                  isActive ? 'active' : ''
                }`}
              >
                {page.icon && <Icon icon={page.icon} width={20} height={20} className="nav-icon transition-colors" />}
                {page.name}
              </button>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2 cursor-pointer">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-16 right-4 rounded-lg shadow-lg mobile-menu">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {pages.map((page) => {
              const isActive = currentPage === page.name;
              return (
                <button
                  key={page.name}
                  onClick={() => handleNavigate(page.name)}
                  className={`nav-link flex items-center gap-2 text-white font-medium py-2 text-left cursor-pointer whitespace-nowrap ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {page.icon && <Icon icon={page.icon} width={20} height={20} className="nav-icon transition-colors" />}
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