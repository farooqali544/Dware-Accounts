import * as yup from "yup";
  
  const tags = [
    { id: 0, period: "Instagram" },
    { id: 1, period: "Facebook" },
    { id: 2, period: "Linkeding" },
    { id: 3, period: "Twitter" },
    { id: 4, period: "Whatsapp" },
  ];

  export const tagsSchema = yup
  .object({
    tags: yup.string().required("Required Field"),
  })
  .required();

  
  export const tagsContent = [
    { name: "Tags", formName: "tags"},
  ];
  
  
  