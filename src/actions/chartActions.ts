import {createAction} from 'redux-actions';
import {chartsActionTypes} from '../constants';
import {always} from 'ramda';


export const modifyChartData = (path: string, value: any) => (dispatch: Function) =>
    dispatch(createAction(chartsActionTypes.CHARTS_MODIFICATION,
        always({path, value}))());

export const clearChartData = (path: string) => (dispatch: Function) =>
    dispatch(createAction(chartsActionTypes.CHARTS_MODIFICATION,
        always({path}))());
