import React from 'react';
import { generateErrorMessages } from '../../../util/error_message_util';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckboxOrRadioGroup from '../../input_forms/checkbox_radio_group';

class SeizureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      timeOfDay: null,
      durationMinutes: 0,
      durationSeconds: 0,
      category: "",
      customComment: "",
      triggers: [],
      descriptions: [],
      postEvents: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSecondsChange = this.handleSecondsChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCheckboxSelection = this.handleCheckboxSelection.bind(this);
  }

  handleTextChange(e) {
    this.setState({ customComment: e.target.value });
  }

  handleDateChange(e, date) {
    this.setState({ date: date });
  }

  handleTimeChange(e, time) {
    this.setState({ timeOfDay: time });
  }

  handleSecondsChange(e, value) {
    this.setState({ durationSeconds: value });
  }

  handleMinutesChange(e, value) {
    this.setState({ durationMinutes: value });
  }

  handleCategoryChange(e, index, value) {
    this.setState({ category: value });
  }

  handleCheckboxSelection(type) {
    return (e) => {
      const newSelection = e.target.value;
      let newSelectionArray;

      if(this.state[type].indexOf(newSelection) > -1) {
        newSelectionArray = this.state[type].filter(s => s !== newSelection)
      } else {
        newSelectionArray = [...this.state[type], newSelection];
      }

      this.setState({ [type]: newSelectionArray });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const durationInSeconds = parseInt(this.state.durationSeconds) + (parseInt(this.state.durationMinutes) * 60);
    let datetime;
    if (this.state.date && this.state.timeOfDay) {
      let datetime = this.state.date.toLocaleDateString() + " " + this.state.timeOfDay.toLocaleTimeString();
      datetime = datetime.replace("/", "-");
    } else {
      datetime = "";
    }
    const seizureInput = {
      date: datetime,
      duration: durationInSeconds,
      category: this.state.category,
      custom_comment: this.state.customComment,
      triggers: this.state.triggers,
      descriptions: this.state.descriptions,
      post_events: this.state.post_events,
    };

    this.props.addSeizure(seizureInput);
  }

  render() {
    return (
      <div>
        <h1>Seizure Input</h1>
        <form className="container" >
          <div className="row" >
            <div className="col-md-6 center-content" >
              <DatePicker
                hintText="Date"
                value={ this.state.date }
                onChange={ this.handleDateChange } />
            </div>
            <div className="col-md-6 center-content" >
              <TimePicker
                hintText="Time of Day"
                value={ this.state.timeOfDay }
                onChange={ this.handleTimeChange }/>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-3" >
              <span>{ `Seconds: ${this.state.durationSeconds}` }</span>
              <Slider
                value={ this.state.durationSeconds }
                onChange={ this.handleSecondsChange }
                min={ 0 }
                max={ 59 }
                step={ 1 } />
            </div>
            <div className="col-md-3" >
              <span>{ `Minutes: ${this.state.durationMinutes}` }</span>
              <Slider
                value={ this.state.durationMinutes }
                onChange={ this.handleMinutesChange }
                min={ 0 }
                max={ 59 }
                step={ 1 } />
            </div>
            <div className="col-md-6 center-content" >
              <SelectField
                floatingLabelText="Category"
                value={ this.state.category }
                onChange={ this.handleCategoryChange } >
                  <MenuItem value={ "opt1" } primaryText="Opt1" />
                  <MenuItem value={ "opt2" } primaryText="Opt2" />
                  <MenuItem value={ "opt3" } primaryText="Opt3" />
              </SelectField>
            </div>
          </div>
          <div className="row" >
            <CheckboxOrRadioGroup
              className="col-md-4"
              title="Triggers"
              type="checkbox"
              setName="triggers"
              options={ ["trig1", "trig2", "trig3"] }
              selectedOptions={ this.state.triggers }
              controlFunc={ this.handleCheckboxSelection("triggers") } />
            <CheckboxOrRadioGroup
              className="col-md-4"
              title="Descriptions"
              type="checkbox"
              setName="descriptions"
              options={ ["desc1", "desc2", "desc3"] }
              selectedOptions={ this.state.descriptions }
              controlFunc={ this.handleCheckboxSelection("descriptions") } />
            <CheckboxOrRadioGroup
              className="col-md-4"
              title="Post Events"
              type="checkbox"
              setName="postEvents"
              options={ ["post1", "post2", "post3"] }
              selectedOptions={ this.state.postEvents }
              controlFunc={ this.handleCheckboxSelection("postEvents") } />
          </div>
          <div className="row" >
            <div className="col-md-12 center-content" >
              <TextField
                hintText="Enter comment here"
                floatingLabelText="Custom Comment"
                onChange={ this.handleTextChange }
                multiLine={ true }
                rows={ 1 } />
            </div>
          </div>
          <div className="row" >
            <div className="col-md-12" style={{ "marginTop": "20px" }} >
              <RaisedButton
                label="Submit"
                onClick={ this.handleSubmit }
                fullWidth={ true } />
              { generateErrorMessages(this.props.errors) }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SeizureForm;
