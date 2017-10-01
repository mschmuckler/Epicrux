import React from 'react';
import CheckboxForm from '../../input_forms/checkbox_form';

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTriggersSelection = this.handleTriggersSelection.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  printState() {
    console.log(this.state);
  }

  handleTriggersSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.triggers.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.triggers.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.triggers, newSelection];
    }

    this.setState({ triggers: newSelectionArray });
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
          Seconds:{ this.state.durationSeconds }
          <input
            value={ this.state.durationSeconds }
            onChange={ this.handleChange("durationSeconds") }
            type="range"
            max="59" />
          Minutes:{ this.state.durationMinutes }
          <input
            value={ this.state.durationMinutes }
            onChange={ this.handleChange("durationMinutes") }
            type="range"
            max="15" />
          <select
            value={ this.state.category }
            onChange={ this.handleChange("category") } >
            <option disabled value="">--Select a Category--</option>
            <option value="aura" >Aura</option>
            <option value="fdsf" >fsdf</option>
          </select>
          <CheckboxForm
            title="Triggers"
            type="checkbox"
            setName="triggers"
            options={ ["dog", "cat", "horse"] }
            selectedOptions={ this.state.triggers }
            controlFunc={ this.handleTriggersSelection } />
          <textarea
            value={ this.state.customComment }
            onChange={ this.handleChange("customComment") } />
        </form>
        <button onClick={ this.printState.bind(this) } >getState</button>
      </div>
    );
  }
}

export default SeizureForm;
