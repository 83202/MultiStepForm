import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step3 = () => {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div>
      <h3>Confirmation</h3>
      <p><strong>First Name:</strong> {values.firstName}</p>
      <p><strong>Last Name:</strong> {values.lastName}</p>
      <p><strong>Email:</strong> {values.email}</p>
      <p><strong>Street:</strong> {values.street}</p>
      <p><strong>City:</strong> {values.city}</p>
      <p><strong>Zip Code:</strong> {values.zipCode}</p>
    </div>
  );
};

export default Step3;
