import React, { useState } from "react";
import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";

import MultiForm from "./MultiForm";

const DecryptForm = ({ defaultMessage = "" }) => {
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const decrypt = (values) => {
    const password = values.decrypt.password;
    const message = values.decrypt.message;

    setEncryptedMessage(
      AES.decrypt(message, password).toString(CryptoJS.enc.Utf8)
    );
  };

  return (
    <MultiForm
      id={`decrypt-${defaultMessage}`}
      message={defaultMessage}
      processedMessage={encryptedMessage}
      type="decrypt"
      name="Decrypt"
      action={decrypt}
    />
  );
};

export default DecryptForm;
