import React, {Component} from 'react';
import Data from './Data';



const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        //Initialize a new instance of the Data class.
        this.data = new Data();
    } 

    render() {
        //Create a value object to provide the utility methods of the class Data
        const value = {
            data: this.data,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            },
        };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }


}


export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {

    return function ContextComponent(props) {
        return(
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    }
    
}
