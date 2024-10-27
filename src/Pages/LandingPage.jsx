import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/ResumeBuilderForm')
  }
  return (
    <div className='container'>
      <div className='entry-box' >
        <h1 className='bebas-neue-regular'>
         Resume Builder
        </h1>
        <div className='btn-box'>
            <button className="btn-3d">Visit Profile</button>
            <button className="btn-3d" onClick={goToForm} >Create Resume</button>
        </div>
      </div>
    </div>
  )
}
