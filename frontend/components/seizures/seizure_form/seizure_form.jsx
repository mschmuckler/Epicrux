import React from 'react';
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

  render() {
    return (
      <div>
        <h1>Seizure Input Form</h1>
        <form>
          <input
            value={ this.state.datetime }
            onChange={ this.handleChange("datetime") }
            type="datetime-local" />
          <SliderGroup
            title="Seconds"
            value={ this.state.durationSeconds }
            controlFunc={ this.handleChange("durationSeconds") }
            max="59" />
          <SliderGroup
            title="Minutes"
            value={ this.state.durationMinutes }
            controlFunc={ this.handleChange("durationMinutes") }
            max="15" />
          <SelectGroup
            name="category"
            options={ ["opt1", "opt2", "opt3"] }
            placeholder="Select a Category"
            controlFunc={ this.handleChange("category") } />
          <CheckboxOrRadioGroup
            title="Triggers"
            type="checkbox"
            setName="triggers"
            options={ ["trig1", "trig2", "trig3"] }
            selectedOptions={ this.state.triggers }
            controlFunc={ this.handleCheckboxSelection("triggers") } />
          <CheckboxOrRadioGroup
            title="Descriptions"
            type="checkbox"
            setName="descriptions"
            options={ ["desc1", "desc2", "desc3"] }
            selectedOptions={ this.state.descriptions }
            controlFunc={ this.handleCheckboxSelection("descriptions") } />
          <CheckboxOrRadioGroup
            title="Post Events"
            type="checkbox"
            setName="postEvents"
            options={ ["post1", "post2", "post3"] }
            selectedOptions={ this.state.postEvents }
            controlFunc={ this.handleCheckboxSelection("postEvents") } />
          <TextareaGroup
            title="Custom Comment"
            rows="5"
            name="customComment"
            content={ this.state.customComment }
            placeholder="Enter optional comment here"
            controlFunc={ this.handleChange("customComment") } />
        </form>
        <button onClick={ this.printState.bind(this) } >getState</button>
      </div>
    );
  }
}

export default SeizureForm;
