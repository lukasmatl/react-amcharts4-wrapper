import {combineReducers} from 'redux';
import {chartsReducer} from '../../reducers';

export const rootReducer = combineReducers({
    charts: chartsReducer({})
});
