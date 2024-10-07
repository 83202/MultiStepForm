import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h3>Address Details</h3>
      <div>
        <label>Street</label>
        <input {...register('street', { required: 'Street is required' })} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>
      <div>
        <label>City</label>
        <input {...register('city', { required: 'City is required' })} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>Zip Code</label>
        <input {...register('zipCode', { required: 'Zip code is required' })} />
        {errors.zipCode && <p>{errors.zipCode.message}</p>}
      </div>
    </div>
  );
};

export default Step2;
