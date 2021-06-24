import React, { Component } from 'react';
import BasicaComponent from './basicA';
import BasicbComponent from './basicB';

const ThemeContext = React.createContext('pink');

class Basic extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <ThemeContext.Provider value={'dark'}>
                <BasicaComponent></BasicaComponent>
                <BasicbComponent></BasicbComponent>
            </ThemeContext.Provider>
            // <div>
            //     <BasicaComponent></BasicaComponent>
            //     <BasicbComponent></BasicbComponent>
            // </div>
        );
    }
}


export default Basic;