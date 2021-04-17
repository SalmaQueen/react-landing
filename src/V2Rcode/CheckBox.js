import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Owner"
          className=" text-white"
          labelPlacement="start"
          onChange={(e) => {
            console.log(e);
          }}
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Agent"
          className=" text-white"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}
