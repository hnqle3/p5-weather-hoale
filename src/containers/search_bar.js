import React,{Component} from "react";
import {fetchWeather} from "../actions/index"

import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={term:''}
        this.onInputChange=this.onInputChange.bind(this)
        this.onFormSubmit =this.onFormSubmit.bind(this)
    }
    onInputChange(event){
        this.setState({term:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term:""})
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a give-day forecast in your cities"
                    value={this.state.term}
                    className="form-ctonrol"
                    onChange={this.onInputChange}
                />
                    
                <span className="input-group-btn">
                    <button type ="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather:fetchWeather},dispatch)
}
export default connect(null, mapDispatchToProps)
(SearchBar);