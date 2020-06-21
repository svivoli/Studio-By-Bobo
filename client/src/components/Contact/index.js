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
    <h3>Inquiries for Commisions</h3>
    </div>
    <div className="form">
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item className="form-item" name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item className="form-item" name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item className="form-item" name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item className="form-item" name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item className="form-item" wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button class="uk-button uk-button-default" htmlType="submit">submit</button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Contact;