import React, { useEffect, useState } from "react";
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

const MultiForm = ({
  name,
  action,
  type,
  message = "",
  processedMessage = "",
}) => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);

  const onFinish = (value) => {
    setOpenModal(true);
    action(value);
  };

  useEffect(() => {
    form.setFieldsValue({ [type]: { message } });
  }, [message]);

  return (
    <>
      <h1 className="multiform-tittle">{name}</h1>
      <Form
        layout="vertical"
        size="large"
        {...layout}
        name={`${name}-${message}`}
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="multiform"
        form={form}
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
          <Row align="bottom">
            <Col span={19}>
              <Input.Password className="multiform-password" />
            </Col>
            <Col span={1} offset={4}>
              <Button type="primary" htmlType="submit">
                {type}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <Modal
        title="Resultado"
        visible={openModal}
        centered
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
        className="multiform-modal"
        size="large"
      >
        <p className="multiform-modal-text">{processedMessage}</p>
      </Modal>
    </>
  );
};

export default MultiForm;
