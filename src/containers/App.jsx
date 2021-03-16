import React, { useState } from "react";

import MainLayout from "./MainLayout";
import EncryptForm from "../components/EncryptForm";
import DecryptForm from "../components/DecryptForm";
import { getEncryptedData } from "../services/data";

const sideBarItems = () => {
  const saved = getEncryptedData("test_password");

  return {
    encrypt: {
      title: "Encrypt",
      component: <EncryptForm />,
    },
    decrypt: {
      title: "Decrypt",
      component: <DecryptForm />,
    },
    saved: {
      title: "Saved",
      isNested: true,
      nested: saved.map((data) => ({
        title: data.title,
        component: <DecryptForm defaultMessage={data.message} />,
      })),
    },
  };
};

const App = () => {
  const [componet, setComponent] = useState(null);

  //if (!componet) return null;

  return (
    <MainLayout sideItems={sideBarItems()} sideOnSelect={setComponent}>
      {componet}
    </MainLayout>
  );
};

export default App;
