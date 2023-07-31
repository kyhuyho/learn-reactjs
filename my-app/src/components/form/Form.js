import React from "react";
import { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   console.log(e.target.value);
  //   setMessage(e.target.value);
  // };
  // const hanldeSelectChange = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // console.log(values);
  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   // if (type === "checkbox") {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.checked,
  //   //   });
  //   // } else {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.value,
  //   //   });
  //   // }
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };
  const { values, handleInputChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-500 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-500 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
      {/* {message}
      <textarea
        className="w-full max-w-[300px] p-3 border border-gray-500 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={hanldeSelectChange}>
        <option value="vietname">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
