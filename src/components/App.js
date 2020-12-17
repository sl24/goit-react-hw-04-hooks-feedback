import { Component } from 'react';

import Section from './Section';
import FeedbackOpt from './FeedbackOpt';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const PositivePercentage =
      Math.round((good / (good + neutral + bad)) * 100) || 0;
    return PositivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOpt
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.heandleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}

export default App;
