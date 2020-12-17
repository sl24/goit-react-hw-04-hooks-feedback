import PropTypes from 'prop-types';
import s from './FeedbackOpt.module.css';

const FeedbackOpt = ({ options, onLeaveFeedback }) => {
  return options.map((option, id) => (
    <button
      className={s.button}
      key={id}
      data-feedback={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOpt.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOpt;
