import React from 'react';

const SelectGroup = (props) => (
  <div className={ "form-group " + props.className } >
    <select
      name={ props.name }
      value={ props.selectedOption }
      onChange={ props.controlFunc }
      className="form-select" >
      <option value="" >{ props.placeholder }</option>
      { props.options.map(opt => {
        return (
          <option
            key={ opt }
            value={ opt }>{ opt }</option>
        );
      })}
    </select>
  </div>
);

export default SelectGroup;
