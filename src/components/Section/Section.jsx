import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
