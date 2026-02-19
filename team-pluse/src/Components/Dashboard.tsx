import { useCheckInContext } from '../context/CheckInContext'
import "./Dashboard.css"

export const Dashboard = () => {
  // Grab the pre-calculated stats and today's list from our "Radio Station"
  const { stats, todayCheckins } = useCheckInContext();

  // If nobody has checked in today, show a friendly message
  if (todayCheckins.length === 0) {
    return (
      <section className="dashboard">
        <h2>Daily Dashboard</h2>
        <p>No check-ins yet today. Be the first!</p>
      </section>
    );
  }

  return (
    <section className="dashboard">
      <h2>Group Mood Barometer</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Check-ins</h3>
          <p className="big-number">{stats.totalCheckins}</p>
        </div>

        <div className="stat-card">
          <h3>Average Energy</h3>
          {/* We use a color logic: high energy = green, low = orange */}
          <p className="big-number" style={{ color: stats.averageEnergy > 3 ? 'green' : 'orange' }}>
            {stats.averageEnergy} / 5
          </p>
        </div>
      </div>

      <div className="mood-distribution">
        <h3>Mood Distribution</h3>
        <ul>
          {/* Object.entries turns our Record object into an array we can map through */}
          {Object.entries(stats.moodDistribution).map(([mood, count]) => (
            <li key={mood}>
              <strong>{mood}:</strong> {count}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};