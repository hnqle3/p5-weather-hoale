import React, { Component } from "react";
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";
class WeatherList extends Component {


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