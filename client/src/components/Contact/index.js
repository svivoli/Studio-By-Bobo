import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function Contact() {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div>
      <div className="form-title">

      </div>
      <div className="form">
        <h3>Inquiries for Commissions</h3>
        <form>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Name</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="form-horizontal-text" type="text"></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Email</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="form-horizontal-text" type="text"></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Website</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="form-horizontal-text" type="text"></input>
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Message</label>
            <textarea class="uk-textarea" rows="5"></textarea>
          </div>

        </form>
        <button class="uk-button uk-button-default" htmlType="submit">submit</button>
      </div>
    </div>
  );
};

export default Contact;