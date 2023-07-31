import React from "react";
import { useController, Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});
const SignUpFormHookWithYupV2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  const onSubmit = (values) => {
    if (isValid) {
      console.log("send data to BE");
      // after successfuly sumitted
      // then reset form
      reset({
        firstName: "tom",
        lastName: "huy",
        email: "huy@gmail.com",
      });
    }
    console.log(values);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "tom");
    setValue("lastName", "huy");
    setValue("email", "huy@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 border border-gray-500 rounded-md"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
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
        <MyInput
          type="email"
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 font-semibold text-white bg-blue-500 rounded-lg"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 text-white bg-green-500"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ name, control, ...props }) => {
//   // console.log(props);
//   return (
//     <Controller
//       name={name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 border border-gray-500 rounded-md"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ name, control, ...props }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  // console.log(field);
  return (
    <input
      className="p-4 border border-gray-500 rounded-md"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHookWithYupV2;
