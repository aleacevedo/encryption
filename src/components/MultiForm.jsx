import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal } from "antd";

const layout = {
  labelCol: {
    span: 15,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const MultiForm = ({ name, action, type }) => {
  const [openModal, setOpenModal] = useState(false);

  const onFinish = (value) => {
      setOpenModal(true);
      action(value);
  }

  return (
    <>
      <h1 className="multiform-tittle">{type}</h1>
      <Form
        layout="vertical"
        size="large"
        {...layout}
        name={name}
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="multiform"
      >
        <Form.Item
          name={[type, "message"]}
          label="Message"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea
            style={{ minHeight: "250px" }}
            className="multiform-textarea"
          />
        </Form.Item>
        <Form.Item
          name={[type, "password"]}
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Row>
            <Col span={16}>
              <Input.Password />
            </Col>
            <Col span={8}>
              <Button type="primary" htmlType="submit">
                {type}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <Modal title="Basic Modal" visible={openModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default MultiForm;
