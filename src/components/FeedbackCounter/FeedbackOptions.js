import PropTypes from 'prop-types';
import css from './FeedbackCounter.module.css';

export default function FeedbackOptions({ options, onClick }) {
  return (
    <div className={css.bnt__set}>
      {options.map(item => (
        <button
          key={item}
          type="button"
          onClick={() => onClick(item)}
          className={css.bnt}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
