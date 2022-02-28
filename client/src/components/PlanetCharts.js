import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const PlanetCharts = ({planets}) => { 


const isPlanetList = planets.filter((planet) => planet.isPlanet === true)

const planetGravity = isPlanetList.map((planet) => planet.gravity)
const planetName = isPlanetList.map((planet) => planet.englishName)
console.log(isPlanetList)
    

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gravity of the Planets'
    },
    xAxis: {
        min: 0,
        categories: planetName,
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
    </div>)


}

export default PlanetCharts;




  