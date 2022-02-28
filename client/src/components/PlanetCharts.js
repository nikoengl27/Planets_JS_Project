import React from 'react';
import {render} from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



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
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }]
};

// const planetItems = ({planets}) => {
//     planets.filter(checkIsPlanet);
//     console.log(planetItems)
// }

// function checkIsPlanet(planet) {
//     return planet.isPlanet === true;
// }


const PlanetCharts = () => (

    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
 planetItems()
  render(<PlanetCharts/>, document.getElementById('root'));
  
export default PlanetCharts
  