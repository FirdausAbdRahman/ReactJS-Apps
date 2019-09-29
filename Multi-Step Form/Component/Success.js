import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process form
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title="Success"
                        style={styles.AppBar}
                        />
                    <h1 style={styles.AppBar}>
                        Thank You For Your Submission
                    </h1>
                    <p style={styles.AppBar}>
                        You will get an email with further instructions
                    </p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    AppBar: {
       textAlign: "center"
    },
    Text: {
        position: "relative",
        left: '43%'
    }
}

export default Success;
