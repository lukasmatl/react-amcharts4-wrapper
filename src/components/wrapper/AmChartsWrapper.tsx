import * as React from "react";

import * as am4core from "@amcharts/amcharts4/core";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import {useSelector} from "react-redux";
import {getChartConfigByDotPath} from "../../selectors";
import {useEffect, useImperativeHandle, useState} from "react";

am4core.useTheme(am4themesAnimated);

export const AmChart = React.forwardRef<any, any>((props, ref) => {
  const [chart, setChart] = useState<any>(null);
  const {id, chartConfigPath, chartTypeClass, createChart} = props;
  const config: any = useSelector(getChartConfigByDotPath(chartConfigPath));

  const createChartFromConfig = () => {
    const newChart: any = am4core.createFromConfig(config, id, chartTypeClass);
    newChart.data = config.data;
    setChart(newChart);
  }

  const createChartFromFunction = () => {
    const newChart: any = am4core.create(id, chartTypeClass);
    newChart.data = config.data;
    createChart(newChart);
    setChart(newChart);
  }


  useEffect(() => {
    if (chart)
      chart.dispose();

    if (config && !createChart)
      createChartFromConfig();

    if (config && createChart)
      createChartFromFunction();

    return () => {
      if (chart) chart.dispose();
    }
  }, [config]);

  const getChart = () => chart;

  useImperativeHandle(ref, () => ({getChart}));


  return (
    <div id={id} style={{width: "100%", height: "100%"}}/>
  );

});
