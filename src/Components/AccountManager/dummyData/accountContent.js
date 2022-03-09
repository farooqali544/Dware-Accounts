import { timeZoneData } from "./timeZoneData";
import * as yup from "yup";
export const accountsTypeList = [
  { id: 0, period: "Select Account Type" },
  { id: 1, period: "Instagram" },
  { id: 2, period: "Linkedin" },
  { id: 3, period: "Twitter" },
  { id: 4, period: "Facebook" },
];

export const proxies = [
  { id: 0, period: "Select Proxy" },
  { id: 1, period: "127.198.248.13" },
  { id: 2, period: "127.198.248.13" },
  { id: 3, period: "127.198.248.13" },
  { id: 4, period: "127.198.248.13" },
  { id: 5, period: "127.198.248.13" },
];

export const tags = [
  { id: 0, period: "Select Tag" },
  { id: 1, period: "Facebook" },
  { id: 2, period: "Linkeding" },
  { id: 3, period: "Twitter" },
  { id: 4, period: "Whatsapp" },
  { id: 5, period: "Instagram" },
];

export const accountSchema = yup
  .object({
    accountName: yup.string().required("Required Field"),
    username: yup.string().required("Required Field"),
    password: yup.string().required("Required Field"),
    // timeZone: yup.string().required("Required Field"),
  })
  .required();

export const accountContent = [
  { name: "Account Name", formName: "accountName" },
  { name: "Account Type", formName: "accountType", options: accountsTypeList, selected: 0 },
  { name: "Username/Email", formName: "username" },
  { name: "Password", formName: "password", password: true },
  { name: "Proxy : 192.168.4123", formName: "proxy", options: proxies, selected: 0 },
  { name: "Time Zone", formName: "timeZone", options: timeZoneData, selected: 0 },
  { name: "Tags", formName: "tags", options: tags, selected: 0 },
];

const formContent = [];
