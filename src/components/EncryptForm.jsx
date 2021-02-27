import React from "react";

import MultiForm from "./MultiForm";

const EncryptForm = ({ message = "" }) => {
  const encrypt = (values) => {
    console.log(values);
    setOpenModal(true);
  };

  return (
    <MultiForm
      message={message}
      type="Encrypt"
      name="Encrypt"
      onFinish={encrypt}
    />
  );
};

export default EncryptForm;
