// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

// export default function Details() {
//   return (
//     <div style={{textAlign:'center'}}>
//        <h1 className="mate-regular">Add Personel Details</h1>
//        <div>
//        <InputGroup className="mb-3">
//         <div>
//         <InputGroup.Text id="inputGroup-sizing-default">
//           FirstName :        
//         </InputGroup.Text>
//              <Form.Control
//           aria-label="FirstName"
//           aria-describedby="inputGroup-sizing-default"
//         />
//         </div>

//         <div style={{marginTop:'20px'}}>
//         <InputGroup.Text id="inputGroup-sizing-default">
//           LastName :        
//         </InputGroup.Text>
//              <Form.Control
//           aria-label="LastName"
//           aria-describedby="inputGroup-sizing-default"
//         />
//         </div>
//         <div style={{marginTop:'20px'}}>
//         <InputGroup.Text id="inputGroup-sizing-default">
//           Email :        
//         </InputGroup.Text>
//              <Form.Control
//           aria-label="Email"
//           aria-describedby="inputGroup-sizing-default"
//         />
//         </div>
//         <div style={{marginTop:'20px'}}>
//         <InputGroup.Text id="inputGroup-sizing-default">
//           Number :        
//         </InputGroup.Text>
//              <Form.Control
//           aria-label="Number"
//           aria-describedby="inputGroup-sizing-default"
//         />
//         </div>
//         <div style={{marginTop:'20px'}}>
//         <InputGroup.Text id="inputGroup-sizing-default">
//         City :        
//         </InputGroup.Text>
//              <Form.Control
//           aria-label="City"
//           aria-describedby="inputGroup-sizing-default"
//         />
//         </div>
//          </InputGroup>

        
        

//        </div>
//     </div>
//   )
// }
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Details.css'; // Import the CSS file

export default function Details() {
  return (
    <div className="details-container">
      <h1 className="title">Add Personal Details</h1>
      <div className="form-container">
        <InputGroup className="mb-3 input-group">
          <div className="input-wrapper">
            <InputGroup.Text>First Name:</InputGroup.Text>
            <Form.Control aria-label="FirstName" />
          </div>

          <div className="input-wrapper">
            <InputGroup.Text>Last Name:</InputGroup.Text>
            <Form.Control aria-label="LastName" />
          </div>

          <div className="input-wrapper">
            <InputGroup.Text>Email:</InputGroup.Text>
            <Form.Control aria-label="Email" />
          </div>

          <div className="input-wrapper">
            <InputGroup.Text>Number:</InputGroup.Text>
            <Form.Control aria-label="Number" />
          </div>

          <div className="input-wrapper">
            <InputGroup.Text>City:</InputGroup.Text>
            <Form.Control aria-label="City" />
          </div>
        </InputGroup>
      </div>
    </div>
  );
}
