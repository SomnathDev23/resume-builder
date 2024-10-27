import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Hobbies.css'; // Import the CSS file for styling

export default function Hobbies() {
  const [hobbies, setHobbies] = useState(['']);

  const handleAddHobby = () => {
    setHobbies([...hobbies, '']);
  };

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  const handleRemoveHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  return (
    <div className="hobbies-container">
      <h1 className="text-center">Hobbies</h1>
      {hobbies.map((hobby, index) => (
        <div key={index} className="hobby-form">
          <Form.Group as={Row} className="mb-3" controlId={`hobby-${index}`}>
            <Form.Label column sm="2">
              Hobby
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Enter hobby"
                value={hobby}
                onChange={(e) => handleChange(index, e)}
              />
            </Col>
            <Col sm="2">
              <Button variant="danger" onClick={() => handleRemoveHobby(index)}>
                Remove
              </Button>
            </Col>
          </Form.Group>
        </div>
      ))}
      <Button variant="primary" onClick={handleAddHobby}>
        Add Hobby
      </Button>
    </div>
  );
}
