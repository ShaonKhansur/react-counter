import React, { Component } from 'react';

class Counter extends Component {
  render() { 
      const {onIncrement, onDelete, counter, onDecrement} = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button 
            onClick={() => onIncrement(counter)} 
            className="btn btn-secondary btn-sm m-2">
            +
          </button>
          <button 
            onClick={() => onDecrement(counter)} 
            disabled={counter.value === 0 ? true : false}
            className="btn btn-secondary btn-sm m-2">
            -
          </button>
          <button 
            onClick= {() => onDelete(counter.id)}
            className="btn btn-danger btn-sm">
            X
          </button>
        </div>
      </div>
    );
  }


  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ?  'Zero' : value;
  }
}
 
export default Counter;