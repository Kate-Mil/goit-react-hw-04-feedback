import PropTypes from 'prop-types';
import css from './FeedbackCounter.module.css';

export default function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
