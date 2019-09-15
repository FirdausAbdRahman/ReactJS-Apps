import React from "react";

class Title extends React.Component {
    render(){
        return(
            <div>
                <h1 className="title">ReactJS Weather App</h1>
                <p className="description">Find out temperature, conditions and more...</p>
            </div>
        );
    }
};

export default Title;