import React from 'react';

const CheckboxForm = (props) => {
  return (
    <div>
      <label className="form-label">{ props.title }</label>
      <div className="checkbox-group">
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

export default CheckboxForm;
