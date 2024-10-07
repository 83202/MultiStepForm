import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h3>User Details</h3>
      <div>
        <label>First Name</label>
        <input {...register('firstName', { required: 'First name is required' })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
    </div>
  );
};

export default Step1;
