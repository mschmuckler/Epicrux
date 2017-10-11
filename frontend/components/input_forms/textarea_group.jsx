import React from 'react';

const TextareaGroup = (props) => (
  <div className={ "form-group " + props.className } >
    <label className="form-label" >{ props.title }
      <textarea
        className="form-input"
        style={ props.resize ? null : { resize: 'none' }}
        name={ props.name }
        rows={ props.rows }
        value={ props.content }
        onChange={ props.controlFunc }
        placeholder={ props.placeholder } />
    </label>
  </div>
);

export default TextareaGroup;
