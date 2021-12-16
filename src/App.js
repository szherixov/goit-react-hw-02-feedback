import React, { Component } from 'react';
import Statistics from './Components/Statistics/Statistics';
import Options from './Components/Option/Option';
import Notification from './Components/Notification/Notification';
import Section from './Components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonsOption = ['good', 'neutral', 'bad'];

  onClickButton = button => {
    this.setState(state => ({
      ...state,
      [button]: state[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Options
            options={this.buttonsOption}
            onLeaveFeedback={this.onClickButton}
          ></Options>
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;

// комментарий 