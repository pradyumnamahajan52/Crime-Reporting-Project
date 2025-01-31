import * as React from "react";
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

// Sample data for Police Crime Statistics
export let crimeData1 = [
  { x: 'Theft', y: 120, toolTipMappingName: 'Theft' },
  { x: 'Burglary', y: 80, toolTipMappingName: 'Burglary' },
  { x: 'Assault', y: 50, toolTipMappingName: 'Assault' },
  { x: 'Fraud', y: 40, toolTipMappingName: 'Fraud' },
  { x: 'Vandalism', y: 60, toolTipMappingName: 'Vandalism' },
  { x: 'Drug Offenses', y: 30, toolTipMappingName: 'Drug Offenses' },
  { x: 'Homicide', y: 10, toolTipMappingName: 'Homicide' }
];

export let crimeData2 = [
  { x: 'Theft', y: 100, toolTipMappingName: 'Theft' },
  { x: 'Burglary', y: 70, toolTipMappingName: 'Burglary' },
  { x: 'Assault', y: 40, toolTipMappingName: 'Assault' },
  { x: 'Fraud', y: 30, toolTipMappingName: 'Fraud' },
  { x: 'Vandalism', y: 50, toolTipMappingName: 'Vandalism' },
  { x: 'Drug Offenses', y: 25, toolTipMappingName: 'Drug Offenses' },
  { x: 'Homicide', y: 5, toolTipMappingName: 'Homicide' }
];

export let crimeData3 = [
  { x: 'Theft', y: 130, toolTipMappingName: 'Theft' },
  { x: 'Burglary', y: 90, toolTipMappingName: 'Burglary' },
  { x: 'Assault', y: 60, toolTipMappingName: 'Assault' },
  { x: 'Fraud', y: 50, toolTipMappingName: 'Fraud' },
  { x: 'Vandalism', y: 70, toolTipMappingName: 'Vandalism' },
  { x: 'Drug Offenses', y: 35, toolTipMappingName: 'Drug Offenses' },
  { x: 'Homicide', y: 15, toolTipMappingName: 'Homicide' }
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .e-chart-title {
        font-size: 22px !important;
    }
    .e-legend-item {
        font-size: 14px !important;
    }
    .e-chart-tooltip {
        font-size: 14px !important;
    }
`;

const Column = () => {
    const loaded = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', 'Police Crime Statistics');
    };

    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.font.color = '#000000';
            args.chart.series[1].marker.dataLabel.font.color = '#000000';
            args.chart.series[2].marker.dataLabel.font.color = '#000000';
        }
    };

    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ enableHighlight: true }} primaryXAxis={{
                    labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0, valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, labelFont: { size: '14px' }
                }} primaryYAxis={{
                    title: 'Crime Rate', majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 150, interval: 30, labelFont: { size: '14px' }
                }} chartArea={{ border: { width: 0 } }} load={load.bind(this)} tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }} width={Browser.isDevice ? '100%' : '75%'} title='Police Crime Statistics' loaded={loaded.bind(this)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={crimeData1} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Registed Crime' type='Column' />
                        <SeriesDirective dataSource={crimeData2} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Solved Crime' type='Column' />
                        {/* <SeriesDirective dataSource={crimeData3} tooltipMappingName='toolTipMappingName' xName='x' columnSpacing={0.1} yName='y' name='Total Crime' type='Column' /> */}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Column;
