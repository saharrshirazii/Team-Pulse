import { useReducer } from "react";
import { CheckInReducer } from "../reducers/CheckInReducer";
import type { CheckIn, CheckInActions } from "../types";

export const useCheckins = () => {
    // 1. Initialize the reducer with an empty array as the starting state
    const [state, dispatch] = useReducer(CheckInReducer, []);

    // 2. A function to add a new check-in
    const addCheckin = (data: Omit<CheckIn, "id" | "timestamp">) => {
        dispatch(
            { type: "ADD_CHECKIN", 
              payload: data 
            });
    };

    // 3. A function to remove a specific check-in by ID
    const removeCheckin = (id: string) => {
        dispatch(
            { type: "REMOVE_CHECKIN", 
              payload: { id } 
            });
    };

    // 4. A function to clear all check-ins for a specific date
    const clearDay = (date: string) => {
        dispatch(
            { type: "CLEAR_DAY", 
              payload: { date } 
            });
    };

    // 5. Return the current data and the functions to change it
    return {
        checkins: state,
        addCheckin,
        removeCheckin,
        clearDay
    };
};