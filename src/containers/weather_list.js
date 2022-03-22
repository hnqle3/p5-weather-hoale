import React, { Component } from "react";
import { connect } from 'react-redux';
import GoogleMaps from '../components/google_maps';
//import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from '../components/chart';
class WeatherList extends Component {

 
        renderWeather(cityData){
            const name = cityData.city.name;

            const temperatures= cityData.list.map(findTemps)

            function findTemps(value)
            {
               return value.main.temp
            }

            const pressures= cityData.list.map(findPressures)

            function findPressures(value)
            {
               return value.main.pressure
            }

            const humidities= cityData.list.map(findHumidities)

            function findHumidities(value)
            {
               return value.main.humidity
            }
            const { lon, lat } = cityData.city.coord;
            return (
            <tr key={ name }>
             <td><GoogleMaps lon={lon} lat={lat}/> </td>
             <td>
                    <Chart data={temperatures} color="red" units="Kelvin"/>
            </td>
            <td>
                    <Chart data={pressures} color="blue" units="hPa"/>
            </td>
            <td>
                    <Chart data={humidities} color="green" units="%"/>
            </td>
            </tr>
            )
            } 
    
       
    

    render() {
        return(
        <table className="table table-hover">
            <thead>
                 <tr>
                    <th>City</th>
                    <th>Temperature (Kelvin)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        )
        }



}
// function mapStateToProps(state){
// return { weather:state.weather };
// }
// ES6 equivalent for the function above
function mapStateToProps({ weather }){
 return { weather };
}
export default connect(mapStateToProps)(WeatherList);