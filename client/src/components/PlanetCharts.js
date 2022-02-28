import React from 'react';
import {render} from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Planet from './Planet';
import PlanetContainer from '../containers/PlanetContainer';
import PlanetList from './PlanetList';


const PlanetCharts = ({planets}) => { 


// const sampleArray = [1, 2, 3, 4, 5, 6]

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)

const planetGravity = isPlanetList.map((planet) => planet.density)
    


const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gravity of the Planets'
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
        data: planetGravity

    }]
};

return(
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} planets={planets}/>
{/* 
    {render}(<PlanetCharts planets={planets}/>, document.getElementById('root')); */}
    </div>)


}

export default PlanetCharts;




  