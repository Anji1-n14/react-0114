import React from "react";

class DynamicData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
    }

        increment = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        };

        decrement = () => {
            this.setState((prevState) => ({
                count: prevState.count - 1
            }));
        };

        reset = () => {
            this.setState((prevState) => ({
                count: 0
            }));
        };


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>decrease</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default DynamicData;
