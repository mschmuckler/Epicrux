import React from 'react';
import { generateErrorMessages } from '../../../util/error_message_util';
import CheckboxOrRadioGroup from '../../input_forms/checkbox_radio_group';
import TextareaGroup from '../../input_forms/textarea_group';
import SelectGroup from '../../input_forms/select_group';
import SliderGroup from '../../input_forms/slider_group';

class SeizureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: "",
      durationMinutes: "",
      durationSeconds: "",
      category: "",
      customComment: "",
      triggers: [],
      descriptions: [],
      postEvents: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxSelection = this.handleCheckboxSelection.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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
    const seizureInput = {
      date: this.state.datetime,
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
        <h1>Seizure Input Form</h1>
        <form onSubmit={ this.handleSubmit } className="container" >
          <div className="row" >
            <input
              className="test-border col-md-4"
              value={ this.state.datetime }
              onChange={ this.handleChange("datetime") }
              type="datetime-local" />
            <SliderGroup
              className="test-border col-md-4"
              title="Seconds"
              value={ this.state.durationSeconds }
              controlFunc={ this.handleChange("durationSeconds") }
              max="59" />
            <SliderGroup
              className="test-border col-md-4"
              title="Minutes"
              value={ this.state.durationMinutes }
              controlFunc={ this.handleChange("durationMinutes") }
              max="15" />
            <SelectGroup
              className="test-border"
              name="category"
              options={ ["opt1", "opt2", "opt3"] }
              placeholder="Select a Category"
              controlFunc={ this.handleChange("category") } />
          </div>
          <div className="row" >
            <CheckboxOrRadioGroup
              className="test-border col-md-4"
              title="Triggers"
              type="checkbox"
              setName="triggers"
              options={ ["trig1", "trig2", "trig3"] }
              selectedOptions={ this.state.triggers }
              controlFunc={ this.handleCheckboxSelection("triggers") } />
            <CheckboxOrRadioGroup
              className="test-border col-md-4"
              title="Descriptions"
              type="checkbox"
              setName="descriptions"
              options={ ["desc1", "desc2", "desc3"] }
              selectedOptions={ this.state.descriptions }
              controlFunc={ this.handleCheckboxSelection("descriptions") } />
            <CheckboxOrRadioGroup
              className="test-border col-md-4"
              title="Post Events"
              type="checkbox"
              setName="postEvents"
              options={ ["post1", "post2", "post3"] }
              selectedOptions={ this.state.postEvents }
              controlFunc={ this.handleCheckboxSelection("postEvents") } />
          </div>
          <div className="row" >
            <TextareaGroup
              className="test-border col-md-8"
              title="Custom Comment"
              rows="5"
              name="customComment"
              content={ this.state.customComment }
              placeholder="Enter optional comment here"
              controlFunc={ this.handleChange("customComment") } />
            <input
              className="col-md-4"
              type="submit"
              value="Submit" />
          </div>
        </form>
        { generateErrorMessages(this.props.errors) }
      </div>
    );
  }
}

export default SeizureForm;
