import React, {Component} from "react";
import './Counter.css'

class Counter extends Component {

    // the best practice is to define a initial state in a constructor

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        // The this object of the bound function is associated with the specified object,
        // and has the specified initial parameters
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    increment() { // update state
        this.setState({
            counter: this.state.counter + 1
        });
    }

}


export default Counter