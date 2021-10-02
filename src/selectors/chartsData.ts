import { identity, prop} from 'ramda';
import {dotPath} from 'ramda-extension';
import {createSelector} from 'reselect';


export const chartsSelector = createSelector(prop('charts'), identity);


export const getChartConfigByDotPath = (path: string) => createSelector(chartsSelector, dotPath(path));
