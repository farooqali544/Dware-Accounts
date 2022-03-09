import * as yup from "yup";
const tags = [
  { id: 0, period: "Select Tag" },
  { id: 1, period: "Facebook" },
  { id: 2, period: "Linkeding" },
  { id: 3, period: "Twitter" },
  { id: 4, period: "Whatsapp" },
  { id: 5, period: "Instagram" },
];

export const proxiesList = [
  { id: 0, period: "Select Proxy" },
  { id: 1, period: "127.198.248.13" },
  { id: 2, period: "127.198.248.13" },
  { id: 3, period: "127.198.248.13" },
  { id: 4, period: "127.198.248.13" },
  { id: 5, period: "127.198.248.13" },
];

export const proxySchema = yup
  .object({
    proxyName: yup.string().required("Required Field"),
    proxy: yup.string().required("Required Field"),
    username: yup.string().required("Required Field"),
    password: yup.string().required("Required Field"),
  })
  .required();

export const proxyContent = [
  { name: "Proxy Name", formName: "proxyName" },
  { name: "Proxy", formName: "proxy" },
  { name: "Username/Email", formName: "username" },
  { name: "Password", formName: "password", password: true },
  { name: "Tags", formName: "tags", options: tags, selected: 0 },
];
