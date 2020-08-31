import React, { Component } from "react";
import { LotteryBall } from "./LotteryBall";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  //create an array of 6 items in state
  state = {
    nums: Array.from({ length: this.props.maxBalls }),
  };

  generate = () => {
    //this creates a new array of the same length(with map) and for each number
    //in array pick a number between 0 and 40
    this.setState((curState) => ({
      //pass a callback funtion instead of an object to properly get state
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
      //so we loop over and set state to 6 random numbers
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <LotteryBall num={n} />
          ))}
        </div>

        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

