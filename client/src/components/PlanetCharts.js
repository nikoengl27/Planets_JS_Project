import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const PlanetCharts = ({planets}) => { 


const isPlanetList = planets.filter((planet) => planet.isPlanet === true)

const planetGravity = isPlanetList.map((planet) => planet.gravity)
const planetName = isPlanetList.map((planet) => planet.englishName)
const planetMass = isPlanetList.map((planet) => planet.mass.massValue)
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

const options2 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Planets by Mass'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            cursor: 'pointer'
        }
    },
    
    series: [{
        name: planetName,
        colorByPoint: true,
        data: planetMass
        }]
};

return(
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} planets={planets}/>
      <HighchartsReact highcharts={Highcharts} options={options2} planets={planets}/>
    </div>)


}

export default PlanetCharts;




  