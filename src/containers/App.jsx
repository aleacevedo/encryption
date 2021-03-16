import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import MainLayout from "./MainLayout";
import EncryptForm from "../components/EncryptForm";
import DecryptForm from "../components/DecryptForm";
import { getEncryptedData } from "../services/data";

const sideBarItems = (hash) => {
  let saved = [];
  try {
    saved = getEncryptedData(hash);
  } catch (e) {
    console.log(`Error decrypt: ${e.message}`);
  }

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

const getQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  const [componet, setComponent] = useState(null);
  const queryParams = getQueryParams();
  const hashValue = queryParams.get("hash_value") || "";

  return (
    <MainLayout sideItems={sideBarItems(hashValue)} sideOnSelect={setComponent}>
      {componet}
    </MainLayout>
  );
};

export default App;
