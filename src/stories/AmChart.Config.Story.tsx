import {PieChart} from '@amcharts/amcharts4/charts'


export const configChartConfigPath = 'configChart';

export const configChartConfig = {
  series: [
    {
      type: "PieSeries",
      dataFields: {
        value: "litres",
        category: "country"
      }
    }
  ],
  // Add data
  data: [
    {
      country: "Lithuania",
      litres: 501.9
    },
    {
      country: "Czech Republic",
      litres: 301.9
    },
    {
      country: "Ireland",
      litres: 201.1
    },
    {
      country: "Germany",
      litres: 165.8
    },
    {
      country: "Australia",
      litres: 139.9
    },
    {
      country: "Austria",
      litres: 128.3
    },
    {
      country: "UK",
      litres: 99
    },
    {
      country: "Belgium",
      litres: 60
    },
    {
      country: "The Netherlands",
      litres: 50
    }
  ]
};

export const configChartTypeClass = PieChart;


