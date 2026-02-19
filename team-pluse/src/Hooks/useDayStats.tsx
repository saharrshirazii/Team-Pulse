import { useMemo } from "react";
import type { CheckIn, DayStats, Mood } from "../types";

export const useDayStats = (checkins: CheckIn[]): DayStats => {
  return useMemo(() => {
    // 1. Calculate Total
    const totalCheckins = checkins.length;

    // 2. Calculate Average Energy
    // We add all energy levels together. If list is empty, we use 0 to avoid errors.
    const totalEnergy = checkins.reduce((sum, c) => sum + c.energy, 0); // c is current check-in object we are looking at right now. 0 is initial value
    const averageEnergy = totalCheckins > 0 ? totalEnergy / totalCheckins : 0;

    // 3. Calculate Mood Distribution
    // We start with a "blank" map where every mood is 0
    const moodDistribution: Record<Mood, number> = {
      excellent: 0,
      good: 0,
      "not bad": 0,
      tired: 0,
      stressed: 0,
    };

    // We loop through each check-in and add 1 to the specific mood count
    checkins.forEach((c) => {
      moodDistribution[c.mood]++;
    });

    return {
      totalCheckins,
      averageEnergy: Number(averageEnergy.toFixed(1)), // Round to one decimal as requested
      moodDistribution,
    };
  }, [checkins]); // ONLY recalculate if the checkins array changes!
};