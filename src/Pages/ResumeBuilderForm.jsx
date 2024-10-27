import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import DragDrop from '../components/DragDrop';
import Details from '../components/Details';
import Experience from '../components/Experience';
import Hobbies from '../components/Hobbies';
import Skills from '../components/Skills'
import './ResumeBuilderForm.css'


export default function ResumeBuilderForm() {
    const methods = useForm();
    const [step, setStep] = useState(1);
    
  
    const handleNext = () => setStep((prev) => prev + 1);
    const handlePrevious = () => setStep((prev) => prev - 1);
  
  return (
    <div className='container'>
      <FormProvider {...methods}>
      <div className="form-container">
        
        <form>
          {step === 1 && <DragDrop/>}
          {step === 2 && <Details/>}
          {step === 3 && <Experience/>}
          {step === 4 && <Skills/>}
          {step === 5 && <Hobbies/>}

          <div className='btn-container'>
            {step > 1 && <button className='btnorange' type="button" onClick={handlePrevious}>Previous</button>}
            {step < 5 && <button  className='btnorange' type="button" onClick={handleNext}>Next</button>}
            {step === 5 && <button className='btnorange' type="submit">Submit</button>}
          
          </div>
        </form>
      </div>
    </FormProvider>
    </div>
  )
}

