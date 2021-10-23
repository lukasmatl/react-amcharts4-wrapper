import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {configureStore} from './commons/configureStore';
import {rootReducer} from './commons/rootReducer';
import {Provider} from 'react-redux';
import {AmChart} from '../components';
import {createChart, createChartConfig, createChartConfigPath, createChartTypeClass} from './AmChart.CreateChart.Story';
import {configChartConfig, configChartConfigPath, configChartTypeClass} from "./AmChart.Config.Story";

const store: any = configureStore(rootReducer, {
    charts: {
        createChart: createChartConfig,
        configChart: configChartConfig
    }
});

export default {
  title: 'Example/AmChart',
  component: AmChart,
  argTypes: {},
} as ComponentMeta<typeof AmChart>;

const Template: ComponentStory<typeof AmChart> = (args) =>
    <Provider store={store}>
      <div style={{height: "400px"}}>
        <AmChart {...args} />
      </div>
    </Provider>;

export const AmChartCreateChart = Template.bind({});
AmChartCreateChart.args = {
    createChart: createChart,
    id: createChartConfigPath,
    chartTypeClass: createChartTypeClass,
    chartConfigPath: createChartConfigPath
};


export const AmChartConfigChart = Template.bind({});
AmChartConfigChart.args = {
    id: configChartConfigPath,
    chartTypeClass: configChartTypeClass,
    chartConfigPath: configChartConfigPath
};
