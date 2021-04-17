import React from "react"
import PropTypes, { number, string } from "prop-types"
import { withStyles, TextField } from "@material-ui/core"

const defaultProps = {
  label: "",
  labelColor: "white",
  id: "",
  value: "",
  type: "string",
  rows: 1,
  error: false,
  multiline: false,
  required: false,
  select: false,
  children: <></>,
  adornment: <></>,
  handleChange: () => {},
  handleClick: () => {},
}

const propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([string, number]),
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  select: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.oneOfType([string, number]),
  required: PropTypes.bool,
  adornment: PropTypes.element,
  children: PropTypes.node,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#1FB6FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1FB6FF",
      },
    },
  },
})(TextField)

const Input = (props) => {
  const {
    label,
    labelColor,
    id,
    value,
    error,
    type,
    required,
    adornment,
    rows,
    select,
    multiline,
    children,
    handleChange,
    handleClick,
  } = props
  return (
    <>
      <CssTextField
        label={label}
        id={id}
        value={value}
        error={error}
        required={required}
        type={type}
        rows={rows}
        select={select}
        onChange={handleChange}
        onClick={handleClick}
        variant="outlined"
        margin="normal"
        fullWidth
        multiline={multiline}
        size="small"
        InputProps={{
          style: { color: "white" },
          endAdornment: adornment,
        }}
        InputLabelProps={{
          style: { color: labelColor },
        }}
      >
        {children}
      </CssTextField>
    </>
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input