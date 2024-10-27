import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import './Skills.css'; // Import the CSS file for styling

export default function Skills() {
  const [skills, setSkills] = useState(['']);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div className="skills-container">
      <h1 className="text-center">Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} className="skill-form">
          <Form.Group as={Row} className="mb-3" controlId={`skill-${index}`}>
            <Form.Label column sm="2">
              Skill
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Enter skill"
                value={skill}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
            <Col sm="2">
              <Button variant="danger" onClick={() => handleRemoveSkill(index)}>
                Remove
              </Button>
            </Col>
          </Form.Group>
        </div>
      ))}
      <Button variant="primary" onClick={handleAddSkill}>
        Add Skill
      </Button>
    </div>
  );
}
