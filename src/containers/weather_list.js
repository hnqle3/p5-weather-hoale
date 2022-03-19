import React, { Component } from "react";
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";
class WeatherList extends Component {

 
        renderWeather(cityData){
            const name = cityData.city.name;

            const temps= cityData.list.map(findTemps)

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

            return (
            <tr key={ name }>
            <td>{name} </td>
            <td>
                <div>
                    <Sparklines
                    svgHeight={120}
                    svgWidth={180}
                    data={temps}>
                    <SparklinesLine color="red" />
                    </Sparklines>
                </div>
            </td>
            <td>
            <div>
                    <Sparklines
                    svgHeight={120}
                    svgWidth={180}
                    data={pressures}>
                    <SparklinesLine color="blue" />
                    </Sparklines>
                </div>
            </td>
            <td>
                <div>
                    <Sparklines
                    svgHeight={120}
                    svgWidth={180}
                    data={humidities}>
                    <SparklinesLine color="green" />
                    </Sparklines>
                </div>
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