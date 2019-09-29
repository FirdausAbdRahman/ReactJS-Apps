import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title="Enter Personal Details" 
                        style={styles.AppBar}
                        />
                    <TextField 
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        style={styles.TextField}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        style={styles.TextField}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        style={styles.TextField}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button1}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button: {
        margin: 15,
        position: "relative",
        left: "42%"
    },
    button1: {
        margin: 15,
        position: "relative",
        left: "44%"
    }, 
    AppBar: {
       textAlign: "center"
    },
    TextField: {
        position: "relative",
        left: '43%'
    }
}

export default FormPersonalDetails;
