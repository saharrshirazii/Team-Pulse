//state management
import type { CheckIn } from "../types";

//actions
export type CheckInActions =
{type: "ADD_CHECKIN", 
 payload: Omit<CheckIn, "id" | "timestamp">,
}
|
{type: "REMOVE_CHECKIN",
    payload: {id : string}
}
|
{type: "CLEAR_DAY",
    payload: {date: string}
};


export const CheckInReducer = (state:CheckIn[] , action:CheckInActions) : CheckIn[] =>{
    switch(action.type){
        case "ADD_CHECKIN":
            // Create a new checkin object, generating id and timestamp here
            const newCheckIn: CheckIn = {
                ...action.payload, 
                id: crypto.randomUUID(), //generating random id
                timestamp: new Date(), //generating timestamp
            };
            return [...state,newCheckIn];
        
        
        case "REMOVE_CHECKIN":
            // Filter out the check-in with the matching ID 
            return state.filter((checkin)=> checkin.id !== action.payload.id);
        
        
        case "CLEAR_DAY":
            // Remove check-ins that match the provided date string
            // Typically used to clear the current day's logs
            return state.filter((checkin)=> checkin.timestamp.toISOString().split("T")[0] !== action.payload.date);

        default:
            return state;
    }

}

            
