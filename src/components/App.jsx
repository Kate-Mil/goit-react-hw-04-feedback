import React, { Component } from 'react';
import FeedbackOptions from './FeedbackCounter/FeedbackOptions';
import Statistics from './FeedbackCounter/Statistics';
import Section from './FeedbackCounter/Section';
import Notification from './FeedbackCounter/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    let positivePercentage = 0;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return positivePercentage;
    }
    positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={total}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
