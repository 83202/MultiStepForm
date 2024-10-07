import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      zipCode: '',
    },
  });

  const handleNext = async () => {
    const result = await methods.trigger();
    if (result) setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        <div className="form-navigation">
          {currentStep > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {currentStep < 3 && <button type="button" onClick={handleNext}>Next</button>}
          {currentStep === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
