import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = { 
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
   };

   
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({counters});
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map(c => {
      if(c.id === counter.id) {
        c.value += 1;
      }
      return c;
    });
    this.setState({counters});
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map(c => {
      if(c.id === counter.id) {
        c.value = c.value - 1;
      }
      return c;
    })
    this.setState({counters});
  };

  render() { 
    return ( 
      <div>
        <Navbar totalCounters= {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters = {this.state.counters}
            onIncrement= {this.handleIncrement}
            onDecrement= {this.handleDecrement}
            onDelete= {this.handleDelete}
            onReset= {this.handleReset}
          />
        </main>
      </div>
     );
  }
}
 
export default App;


