import React from 'react';

const CheckboxOrRadioGroup = (props) => {
  return (
    <div>
      <label className="form-label" >{ props.title }</label>
      <div className="checkbox-group" >
        {props.options.map(opt => {
          return (
            <label key={ opt } className="form-label capitalize">
              <input
                className="form-checkbox"
                name={ props.setName }
                onChange={ props.controlFunc }
                value={ opt }
                checked={ props.selectedOptions.indexOf(opt) > -1 }
                type={ props.type } /> { opt }
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxOrRadioGroup;

// Use below function to handle checkbox/radio selection
//
// handleCheckboxSelection(type) {
//   return (e) => {
//     const newSelection = e.target.value;
//     let newSelectionArray;
//
//     if(this.state[type].indexOf(newSelection) > -1) {
//       newSelectionArray = this.state[type].filter(s => s !== newSelection)
//     } else {
//       newSelectionArray = [...this.state[type], newSelection];
//     }
//
//     this.setState({ [type]: newSelectionArray });
//   }
// }
