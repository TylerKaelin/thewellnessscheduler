import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default class RadioButtonsGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeOrEmployer: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ employeeOrEmployer: event.target.value });
    this.sendData();
  };

  sendData = () => {
    const to_send = this.state.employeeOrEmployer || "Employee";
    this.props.parentCallback(to_send);
  };

  render() {
    return (
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          onChange={(event) => this.handleChange(event)}
          defaultValue='Employee'
        >
          <span>
            <FormControlLabel
              value='Employee'
              control={<Radio />}
              label='Employee'
            />
            <FormControlLabel
              value='Employer'
              control={<Radio />}
              label='Employer'
            />
          </span>
        </RadioGroup>
      </FormControl>
    );
  }
}
