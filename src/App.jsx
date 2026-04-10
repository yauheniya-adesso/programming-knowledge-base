import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import Java from './pages/Java';
import Git from './pages/Git';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [targetSection, setTargetSection] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavigate = (destination) => {
    if (typeof destination === 'object') {
      setCurrentPage(destination.page);
      setTargetSection(destination.section ?? null);
    } else {
      setCurrentPage(destination);
      setTargetSection(null);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'JavaScript':
        return <JavaScript />;
      case 'HTML':
        return <HTML />;
      case 'CSS':
        return <CSS initialSection={targetSection} />;
      case 'Java':
        return <Java />;
      case 'Git':
        return <Git />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const isHomePage = currentPage === 'Home';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen(!isNavOpen)}
      />
      
      <main className={`flex-1 ${isHomePage ? 'pt-16 p-0 m-0' : 'pt-20 p-8'}`}>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}