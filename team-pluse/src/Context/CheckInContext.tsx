import React, { createContext, useContext, useMemo, ReactNode } from "react";
import type { CheckIn, DayStats } from "../types";
import { useCheckins } from "../hooks/useCheckins";
import { useDayStats } from "../hooks/useDayStats";


interface CheckInContextType {
    checkins: CheckIn[];
    todayCheckins: CheckIn[]; // filtered for just today
    stats: DayStats;
    addCheckin: (data: Omit<CheckIn, "id" | "timestamp">) => void;
    removeCheckin: (id: string) => void;
    clearDay: (date: string) => void;
}

const CheckInContext = createContext<CheckInContextType | undefined>(undefined);

export const CheckInProvider = ({ children }: { children: ReactNode }) => {
  // Use the logic hook we built earlier
  const { checkins, addCheckin, removeCheckin, clearDay } = useCheckins();
  
  // Use the math hook we built earlier
  const stats = useDayStats(checkins);

  // Filter checkins for "today" specifically (using the date logic we discussed)
  const today = new Date().toISOString().split("T")[0];
 
  const todayCheckins = useMemo(() => 
    checkins.filter(c => new Date(c.timestamp).toISOString().split("T")[0] === today),
    [checkins, today]
  );

  return (
    <CheckInContext.Provider value={{ checkins, todayCheckins, stats, addCheckin, removeCheckin, clearDay }}>
      {children}
    </CheckInContext.Provider>
  );
};


export const useCheckInContext = () => {
  const context = useContext(CheckInContext);
  if (!context) {
    throw new Error("useCheckInContext must be used within a CheckInProvider");
  }
  return context;
};