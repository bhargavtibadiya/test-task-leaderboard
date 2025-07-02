import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Leaderboard } from './components/Leaderboard';
import { sampleUsers } from './data/sampleUsers';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Leaderboard 
          users={sampleUsers}
          title="🏆 Global Championship"
          maxUsers={10}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;