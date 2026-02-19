import "./Navigation.css"

interface NavigationProps {
  currentView: string;
  setView: (view: 'checkin' | 'dashboard' | 'history') => void;
}

export const Navigation = ({ currentView, setView }: NavigationProps) => {
  return (
    <nav className="nav-bar">
      <h1>TeamPulse</h1>
      <div className="nav-links">
        <button 
          className={currentView === 'dashboard' ? 'active' : ''} 
          onClick={() => setView('dashboard')}
        >
          Dashboard
        </button>
        
        <button 
          className={currentView === 'checkin' ? 'active' : ''} 
          onClick={() => setView('checkin')}
        >
          Check In
        </button>
        
        <button 
          className={currentView === 'history' ? 'active' : ''} 
          onClick={() => setView('history')}
        >
          History
        </button>
      </div>
    </nav>
  );
};