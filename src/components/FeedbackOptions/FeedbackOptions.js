import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
import {v4} from 'uuid';
class FeedbackOptions extends React.Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { onLeaveFeedback,options } = this.props;
    return (
      <div>
        {options.map(el => (
          <button
          key={v4()}
          onClick={onLeaveFeedback}
          name={el}
          className={styles.button}
        >
          {el}
        </button>
        ))}
    
      </div>
    );
  }
}
export default FeedbackOptions;
