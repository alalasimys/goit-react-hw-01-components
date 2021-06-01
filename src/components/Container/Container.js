import React from "react";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ children }) => <div className="Container">{children}</div>;

Container.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Container;
