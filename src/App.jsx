import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import HTML from './pages/HTML';
import CSS from './pages/CSS';
import Java from './pages/Java';
import Git from './pages/Git';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home />;
      case 'JavaScript':
        return <JavaScript />;
      case 'HTML':
        return <HTML />;
      case 'CSS':
        return <CSS />;
      case 'Java':
        return <Java />;
      case 'Git':
        return <Git />;
      default:
        return <Home />;
    }
  };

  const isHomePage = currentPage === 'Home';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen(!isNavOpen)}
      />
      
      <main className={isHomePage ? 'pt-16 p-0 m-0' : 'pt-20 p-8'}>
        {renderPage()}
      </main>
    </div>
  );
}