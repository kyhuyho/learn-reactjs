import React from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase-config";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState(null);
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUserInfo(currentUser);
      else setUserInfo(null);
    });
  }, []);
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: "Huy",
      });
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, values.email, values.password);
    console.log("success");
  };
  return (
    <div className="py-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="email"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button className="w-full p-3 text-lg font-medium text-white bg-blue-500 rounded-lg">
            Sign Up
          </button>
        </form>
        <div className="flex items-center mt-10 gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="w-full p-3 text-lg font-medium text-white bg-purple-500 rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button className="w-full p-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseAuth;
