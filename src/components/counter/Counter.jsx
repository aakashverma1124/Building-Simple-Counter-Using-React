import React, {Component} from "react";
import './Counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        // The this object of the bound function is associated with the specified object,
        // and has the specified initial parameters
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="App">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

    reset() {
        this.setState(
            (prevState) => {
                return {counter: 0}
            }
        );
    }

    increment(by) { // update state
        //console.log(`increment from parent: ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by) { // update state
        //console.log(`increment from parent: ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

}


class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // render = () = {      // in that case we do not need to bind the function as we have bounded it above.
    render() {

        // const style = {fontSize: "50px", padding: "15px 30px"};
        // We could have done something like: style = {style} in span as an attribute that means passing css inline.
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by)
    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by)
    }


}

CounterButton.defaultProps = {
    by : 1
}

export default Counter