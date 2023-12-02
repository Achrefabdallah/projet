// ModalComponent.js

import {React , useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {addDoc, collection, getDocs ,query, where} from 'firebase/firestore'
import {db} from '../firebse-config'

const ModalComponent = ({ show, handleClose, isLoginForm, setIsLoginForm }) => {
  const [newName, setNewName] = useState("");
  const [newPren, setNewPren] = useState("");
  const [newE, setNewEmail] = useState("");
  const [newP, setNewPassword] = useState("");
  const usersCollectionRef = collection(db, 'Users');

  const createUser = async () => {
    if (!newE || !newP || (!isLoginForm && (!newName || !newPren))) {
        // Show an alert or any other feedback to the user
        window.alert('Please fill in all required fields.');
        return;
      }
    const querySnapshot = await getDocs(query(usersCollectionRef, where('Email', '==', newE)));

    if (!querySnapshot.empty) {
        // Email already exists, handle accordingly (maybe show an error message)
        window.alert('Email already exists');
        return;
    }

    // If email doesn't exist, proceed to add the new user
    try {
        await addDoc(usersCollectionRef, { Email: newE, Password: newP, Nom: newName, Prenom: newPren });
        handleClose(); // Close the modal after successful signup
    } catch (error) {
        console.error('Error adding document: ', error);
        // Handle error if needed
    }
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          {isLoginForm ? 'Login' : 'Sign Up'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Toggle Buttons for Login/Signup */}
        <div className="text-center mb-3">
          <span
            onClick={() => setIsLoginForm(true)}
            className={isLoginForm ? 'active-tab' : 'inactive-tab'}
          >
            Login
          </span>
          <span
            onClick={() => setIsLoginForm(false)}
            className={!isLoginForm ? 'active-tab' : 'inactive-tab'}
          >
            Sign Up
          </span>
        </div>

        {/* Your login or signup form goes here */}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange= {(event) => {setNewEmail(event.target.value)}}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange= {(event) => {setNewPassword(event.target.value)}}
              required
            />
          </Form.Group>

          {/* Additional fields for signup */}
          {!isLoginForm && (
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange= {(event) => {setNewName(event.target.value)}}
                required
              />
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                onChange= {(event) => {setNewPren(event.target.value)}}
                required
              />
            </Form.Group>
          )}

          <Button variant="primary" type="submit" onClick={createUser}>
            {isLoginForm ? 'Login' : 'Sign Up'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
