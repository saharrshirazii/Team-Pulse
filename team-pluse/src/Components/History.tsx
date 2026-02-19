import { useRef } from 'react';
import { useCheckInContext } from '../context/CheckInContext';

export const History = () => {
  // 1. Get the full list and the remove function from Context
  const { checkins, removeCheckin } = useCheckInContext();

  // 2. Create a "ref" to point at the top of our list
  const topOfListRef = useRef<HTMLHeadingElement>(null);

  const scrollToTop = () => {
    // This uses the "Physical Finger" to tell the browser to scroll
    topOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="history">
      {/* Attach the ref to this header */}
      <h2 ref={topOfListRef}>Check-in History</h2>

      <button onClick={scrollToTop} className="scroll-btn">
        ↑ Scroll to Top
      </button>

      {checkins.length === 0 ? (
        <p>The history is empty.</p>
      ) : (
        <ul className="history-list">
          {/* We reverse the list so the newest items are at the top */}
          {[...checkins].reverse().map((item) => (
            <li key={item.id} className="history-item">
              <div className="history-header">
                <strong>{item.name}</strong>
                <span>{new Date(item.timestamp).toLocaleDateString()}</span>
              </div>
              
              <p>Mood: {item.mood} | Energy: {item.energy}</p>
              
              {item.comment && (
                <p className="comment">"{item.comment}"</p>
              )}

              <button 
                onClick={() => removeCheckin(item.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};