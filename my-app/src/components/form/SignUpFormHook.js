import React from "react";
import { useForm } from "react-hook-form";

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  console.log(errors);
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 border border-gray-500 rounded-md"
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <div className="text-sm text-red-500">Please fill out this field</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-sm text-red-500">
            Must be 10 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 border border-gray-500 rounded-md"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Emaill address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 border border-gray-500 rounded-md"
          {...register("email")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 font-semibold text-white bg-blue-500 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
