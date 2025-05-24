
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import StudySession from '../components/StudySession';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'study-session':
        return <StudySession onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const showSidebar = currentPage !== 'home' && currentPage !== 'study-session';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />

      {/* Mobile Menu Button */}
      {showSidebar && (
        <motion.button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 lg:hidden p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AnimatePresence>
          {showSidebar && (
            <Sidebar
              currentPage={currentPage}
              onNavigate={handleNavigate}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <motion.main 
          className={`flex-1 ${showSidebar ? 'lg:ml-0' : ''} transition-all duration-300`}
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderCurrentPage()}
        </motion.main>
      </div>
    </div>
  );
};

export default Index;
