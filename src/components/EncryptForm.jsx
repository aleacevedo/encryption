import React from "react";

import MultiForm from "./MultiForm";

const EncryptForm = ({ message = "" }) => {
  const encrypt = (values) => {
    console.log(values);
  };

  return (
    <MultiForm
      message={message}
      type="Encrypt"
      name="Encrypt"
      action={encrypt}
    />
  );
};

export default EncryptForm;
