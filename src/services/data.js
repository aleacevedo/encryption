import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";

import saved from "../data/saved";

export function getEncryptedData(password) {
  return JSON.parse(AES.decrypt(saved, password).toString(CryptoJS.enc.Utf8));
}
