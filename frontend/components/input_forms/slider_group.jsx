import React from 'react';

const SliderGroup = (props) => {
  const visibleValue = (props.value === "") ? "X" : props.value;

  return (
    <div className="form-group" >
      <label className="form-label">{ `${props.title}: ${visibleValue}` }
        <input
          value={ props.value }
          onChange={ props.controlFunc }
          type="range"
          max={ props.max } />
      </label>
    </div>
  );
};

export default SliderGroup;
