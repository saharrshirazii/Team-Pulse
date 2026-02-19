# Daily Mood & Energy Tracker
TeamPulse is a React-based web application designed to help teams track their emotional well-being and energy levels. It provides a real-time dashboard for team leads to monitor the "pulse" of their group and a history log for personal reflection.

## Key Features
- **Daily Check-in Form**: A user-friendly interface to log name, mood, energy level (1-5), and personal comments.

- **Live Mood Barometer**: A dashboard that automatically calculates the total number of check-ins and the group's average energy level.

- **Real-time Statistics**: Visual distribution of moods (Excellent, Good, Tired, etc.) updated instantly.

- **Comprehensive History**: A detailed log of all entries with the ability to delete specific check-ins.

- **Performance Optimized**: Utilizes useMemo for heavy calculations and a centralized useReducer for state management.

## Technical Implementation
I utilized advanced React patterns to ensure the code is clean, scalable, and efficient:

1. **useReducer**: Centralized all state logic (Adding, Deleting, Clearing) into a single predictable state machine.

2. **Context API**: Created a Global Provider to share data across the app, completely avoiding "prop drilling."

3. **Custom Hooks**:

*useCheckins*: To handle business logic and state dispatches.

*useDayStats*: To handle complex math calculations.

4. **useMemo Performance**: Wrapped heavy filtering and math logic in memoization to prevent unnecessary re-renders.

5. **useRef**: Used for direct DOM access to implement a "Scroll to Top" feature in the long history list.

6. **TypeScript**: Implemented strict typing, including Interfaces, Enums, and Utility Types like Omit and Record.