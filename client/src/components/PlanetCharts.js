import React from 'react';
import {render} from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Planet from './Planet';
import PlanetContainer from '../containers/PlanetContainer';
import PlanetList from './PlanetList';


const sampleArray = [1, 2, 3, 4, 5, 6]

const planetGravity = planets.map((planet) => planet.gravity)
    


const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Masses of the Planets'
    },
    xAxis: {
        min: 0,
        title: {
            text: 'Planet'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Mass'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        data: sampleArray

    }]
};


const PlanetCharts = () => ( 
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} planets={planets}/>
    </div>
    
    
)

render(<PlanetCharts planets={planets}/>, document.getElementById('root'));

export default PlanetCharts;




  