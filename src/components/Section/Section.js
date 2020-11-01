import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";
class Section extends React.Component {
  static defaultProps = {
    title: "",
  };
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    );
  }
}
export default Section;
