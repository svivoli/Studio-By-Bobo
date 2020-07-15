import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, InputNumber, Button } from 'antd';
import { render } from 'react-dom';

const sgMail = require('@sendgrid/mail');

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validated email!',
    number: '${label} is not a validated number!',
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const SENDGRID_API = process.env.SENDGRID_API_KEY;
  sgMail.setApiKey('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');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   // const { name, email, website, message } = formData;

  //   // fetch('/api/form', {
  //   //   method: 'POST',
  //   //   body: formData,
  //   // });
  //   resetForm();
  // }

  const msg = {
    to: 'sarahnv@icloud.com',
    from: 'sarahnv@icloud.com',
    subject: 'New Message from Studio Bobo',
    text: ' ',
    html: '<div style="text-align:center;font-size:22px">' +
    '<h2>You have received a new inquiry.</h2>' +
    '<ul style="text-align: left;font-size:16px">' +
    '<li>Name: ' + formData.name + '</li>' +
    '<li>Email: ' + formData.email + '</li>' +
    '<li>Website: ' + formData.website + '</li>' +
    '<li>Message: ' + formData.message + '</li>' +
    '</ul>' +
    '</div>',
};

function handleSubmit() {
  sgMail.send(msg)
  resetForm();
}

  function resetForm() {
    document.getElementsByClassName('contact-form').reset();
  };

  return (
    <div>
      <div className="form-title">

      </div>
      <div className="form">
        <h3>Inquiries for Commissions</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Name</label>
            <div class="uk-form-controls">
              <input
                className="name uk-input"
                id="form-horizontal-text"
                name="name"
                value={formData.name} 
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Email</label>
            <div class="uk-form-controls">
              <input
                className="email uk-input"
                id="form-horizontal-text"
                name="email"
                value={formData.email}  
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Website</label>
            <div class="uk-form-controls">
              <input
                className="website uk-input"
                id="form-horizontal-text"
                name="website"
                value={formData.website} 
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Message</label>
            <textarea
              className="message uk-textarea"
              name="message"
              value={formData.message} 
              rows="5"
              onChange={handleChange}
            ></textarea>
          </div>
          <button class="uk-button uk-button-default" type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
};

export default Contact;