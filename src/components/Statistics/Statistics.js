import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.wrapper}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad} </p>
        <p>Total: {total}</p>
        <p>Positive percentage: {positivePercentage}%</p>
      </div>
    );
  }
}
export default Statistics;
