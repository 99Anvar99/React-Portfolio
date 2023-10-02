import React, { useState } from 'react';
import '../styles/contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const errors = {};

    // Validation checks
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
    }
    if (!formData.message) {
      errors.message = 'Please enter a message';
    }

    if (Object.keys(errors).length === 0) {
      alert('Contact submitted successfully');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className='contacts'>
      <h1>Contacts</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        <p>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <p>
          Message:
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </p>
        {formErrors.message && <p className="error">{formErrors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
