import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);

const GridContainer = (props) => {
  const classes = useStyles();
  const { children, className, justify, alignItems } = props;
  return (
    <Grid
      container
      justify={justify}
      alignItems={alignItems}
      className={`${classes.grid} ${className}`}
    >
      {children}
    </Grid>
  );
};

GridContainer.defaultProps = {
  className: "",
  justify: "flex-start",
  alignItems: "flex-start"
};

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string
};

export default GridContainer;
