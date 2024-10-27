// import React from 'react'

// export default function Experience() {
//   return (
//     <div>
//       Experience
//     </div>
//   )
// }

import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

export default function Experience() {
  const [experiences, setExperiences] = useState([
    { companyName: '', from: '', to: '', details: '' }
  ]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { companyName: '', from: '', to: '', details: '' }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  return (
    <div className="experience-form-container">
      <h1 className="text-center">Experience Details</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-form">
          <Form.Group as={Row} className="mb-3" controlId={`companyName-${index}`}>
            <Form.Label column sm="2">
              Company Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId={`from-${index}`}>
            <Form.Label column sm="2">
              From
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="date"
                name="from"
                value={experience.from}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
            <Form.Label column sm="2">
              To
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="date"
                name="to"
                value={experience.to}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId={`details-${index}`}>
            <Form.Label column sm="2">
              Details
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter details"
                name="details"
                value={experience.details}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
          </Form.Group>
          <Button variant="danger" onClick={() => handleRemoveExperience(index)}>
            Remove
          </Button>
          <hr />
        </div>
      ))}
      <Button variant="primary" onClick={handleAddExperience}>
        Add Experience
      </Button>
    </div>
  );
}
