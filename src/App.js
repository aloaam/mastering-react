import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 11 },
      { id: 3, value: 21 },
      { id: 4, value: 31 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log("Incrementing value of counter with id: " + counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log("Decrementing value of counter with id: " + counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    console.log("Removing counter-id: " + id);
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          countersCount={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
