import React from "react";
import { useState } from "react";

const ValidationBasic = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });
  const [nameError, setNameError] = useState("");
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form autoComplete="off" onSubmit={handleSubmitForm}>
        <div className="flex gap-x-3">
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              name="fullname"
              className="w-full max-w-[300px] p-3 border border-gray-500 rounded-lg"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {nameError}
          </div>
          <input
            type="email"
            name="email"
            className="w-full max-w-[300px] p-3 border border-gray-500 rounded-lg"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="p-3 rounded-lg text-white bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidationBasic;
