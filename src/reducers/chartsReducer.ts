import {chartsActionTypes} from "../constants";
import {assocDotPath} from "ramda-extension";

export const chartsReducer = (initialState: any) => (state = initialState, action: any) => {
    switch (action.type) {
        case chartsActionTypes.CHARTS_MODIFICATION:
            return assocDotPath(action.payload.path, action.payload.value, state);
        default:
            return state;
    }
};

