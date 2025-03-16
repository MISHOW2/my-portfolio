import React, { useState } from 'react';
import '../styles/form.css' 
function Form() {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can replace the above with actual form submission logic (e.g., sending data to a server)
  };

  return (
    <div className="contact-form">
      <h2>Want to work with me?</h2>
      <p>I am open to work remotely, onsite, full-time, and part-time roles. If you’ve got something for me, fill out the form below!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="connect-button">Connect</button>
      </form>
    </div>
  );
}

export default Form;
