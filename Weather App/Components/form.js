import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.getWeather} className="form">
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button className="button">Get Weather</button>
            </form>
        );
    }
};

export default Form;