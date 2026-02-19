//user mood
export type Mood = "excellent" | "good" | "not bad" | "tired" | "stressed";

//user energy level
export type EnergyLevel = 1 | 2 | 3 | 4 | 5;

//check in component
export interface CheckIn{
    name: string;
    id: string;
    mood: Mood;
    energy: EnergyLevel;
    comment?: string;
    timestamp: Date; 
}

//day state to hold calculated values
export interface DayState{
    averageEnergy: number;
    totalCheckIns: number;
    moodDistribution: Record<Mood, number>; //I have an object where every key must be a Mood (from your list), and the value must be a number

}
