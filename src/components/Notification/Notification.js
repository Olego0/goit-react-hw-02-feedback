import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";
class Notification extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;
    return (
      <div>
        <h2 className={styles.message}> {message} </h2>
      </div>
    );
  }
}
export default Notification;
