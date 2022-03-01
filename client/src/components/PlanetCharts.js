import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './PlanetCharts.css'


const PlanetCharts = ({planets}) => { 

const isPlanetList = planets.filter((planet) => planet.isPlanet === true)
const planetNameAndDetails = isPlanetList.map((planet) => ({name: planet.englishName, mass: planet.mass.massExponent, distance: planet.distanceFromTheSun, gravity: planet.gravity, volume: planet.vol.volExponent}))
const sortedList = planetNameAndDetails.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
const planetName = sortedList.map((planet) => planet.name)
const planetGravity = sortedList.map((planet) => planet.gravity)
const planetMass = sortedList.map((planet) => planet.mass)
const planetDistance = sortedList.map((planet) => planet.distance)
const planetVolume = sortedList.map((planet) => planet.volume)
console.log(planets)
console.log(planetNameAndDetails)
console.log(planetName)
console.log(planetVolume)
console.log(sortedList)
console.log(planetGravity)
console.log(planetDistance)
console.log(planetMass)   

const barChart = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gravity of the Planets N/kg',
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
            text: 'Gravity N/kg'
        }
    },
    tooltip: {
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        showInLegend: false,
        data: planetGravity

    }]
};


const lineGraph = {

    title: {
        text: 'Distance from the Sun in Astronomical Units',
    },


    yAxis: {
        title: {
            text: 'Distance AU'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Planet'
        },
        categories: planetName,
    },

    plotOptions: {
        series: {
            pointStart: 0
        }
    },

    series: [{
        colorByPoint: true,
        data: planetDistance,
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }}

const pieChartMass = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        animation: {
            duration: 5000
        }
    },
    title: {
        text: 'Planets by Mass',
        },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        

        pie: {
            cursor: 'pointer',
        }
    },
    series: [{
        name: 'Mass Distribution of Planets',
        categories: planetName,
        colorByPoint: true,
        data: [{
            name: planetName[0],
            y: planetMass[0]
        }, {
            name: planetName[1],
            y: planetMass[1]
        }, {
            name: planetName[2],
            y: planetMass[2]
        }, {
            name: planetName[3],
            y: planetMass[3]
        }, {
            name: planetName[4],
            y: planetMass[4]
        }, {
            name: planetName[5],
            y: planetMass[5]
        }, {
            name: planetName[6],
            y: planetMass[6]
        }, {
            name: planetName[7],
            y: planetMass[7]
        }, {
            name: planetName[8],
            y: planetMass[8]
        }]
}]}

const pieChartVolume = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Planets by Volume',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        

        pie: {
            cursor: 'pointer',
        }
    },
    series: [{
        name: 'Volume Distribution of Planets',
        categories: planetName,
        colorByPoint: true,
        data: [{
            name: planetName[0],
            y: planetVolume[0]
        }, {
            name: planetName[1],
            y: planetVolume[1]
        }, {
            name: planetName[2],
            y: planetVolume[2]
        }, {
            name: planetName[3],
            y: planetVolume[3]
        }, {
            name: planetName[4],
            y: planetVolume[4]
        }, {
            name: planetName[5],
            y: planetVolume[5]
        }, {
            name: planetName[6],
            y: planetVolume[6]
        }, {
            name: planetName[7],
            y: planetVolume[7]
        }, {
            name: planetName[8],
            y: planetVolume[8]
        }]
}]}

;



return(
    <div id="allCharts">
        <div id="barChart">
      <HighchartsReact highcharts={Highcharts} options={barChart} planets={planets}/>
      </div>
      <div id="lineGraph">
      <HighchartsReact highcharts={Highcharts} options={lineGraph} planets={planets}/>
      </div>
      <div id="pieChartMass">
      <HighchartsReact highcharts={Highcharts} options={pieChartMass} planets={planets}/>
      </div>
      <div id="pieChartVolume">
      <HighchartsReact highcharts={Highcharts} options={pieChartVolume} planets={planets}/>
      </div>
    </div>)


}

export default PlanetCharts;




  