import { useState } from 'react';
import { CheckInForm } from './components/CheckInForm';
import { Dashboard } from './components/Dashboard';
import { History } from './components/History';
import { Navigation } from './components/Navigation';

// We define what "Pages" exist
type View = 'checkin' | 'dashboard' | 'history';

export function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  return (
    <div className="app-container">
      {/* 1. The Navigation Bar (The Buttons) */}
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main>
        {/* 2. The Switch (Conditional Rendering) */}
        {currentView === 'checkin' && <CheckInForm />}
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'history' && <History />}
      </main>
    </div>
  );
}