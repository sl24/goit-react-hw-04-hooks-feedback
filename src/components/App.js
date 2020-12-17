import { useState } from 'react';

import Section from './Section';
import FeedbackOpt from './FeedbackOpt';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const heandleFeedback = event => {
    const name = event.target.textContent;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositivePercentage = () => {
    const PositivePercentage =
      Math.round((good / (good + neutral + bad)) * 100) || 0;
    return PositivePercentage;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOpt
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={heandleFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositivePercentage()}
      />
    </Section>
  );
}

export default App;
