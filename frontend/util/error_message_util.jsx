import React from 'react';

export const generateErrorMessages = (errors) => {
  let errorMessages;
  if (errors) {
    errorMessages = errors.responseJSON.map((error, idx) => {
      return <li key={ idx } className="error-message" >{ error }</li>;
    });
  }
  return (
    <ul>
      { errorMessages }
    </ul>
  );
}
