import React, { useState } from "react";
import AES from "crypto-js/aes";

import MultiForm from "./MultiForm";

const EncryptForm = ({ deafultMessage = "" }) => {
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const encrypt = (values) => {
    const password = values.encrypt.password;
    const message = values.encrypt.message;

    setEncryptedMessage(AES.encrypt(message, password).toString());
  };

  return (
    <MultiForm
      message={deafultMessage}
      processedMessage={encryptedMessage}
      type="encrypt"
      name="Encrypt"
      action={encrypt}
    />
  );
};

export default EncryptForm;
