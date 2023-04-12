import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  // console.log(colRef);
  useEffect(() => {
    // 1. Get collection data (posts)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setPosts(posts);
    //     // console.log(posts);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 2. Get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
    // fetching single document
    const docRefSingle = doc(db, "posts", "W1Og5tzeBSRs7EMTtPcX");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    // Get document ID
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("sucess");
  };
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "This is a new title from function",
    });
    console.log("sucess");
  };
  useEffect(() => {
    // Firestore queries
    const q = query(
      colRef,
      where("author", "==", "hi"),
      // orderBy("createdAt"),
      limit(2)
    );
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="w-full p-3 text-lg font-medium text-white bg-blue-500 rounded-lg">
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="w-full p-3 text-lg font-medium text-white bg-green-500 rounded-lg">
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-500 rounded outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-lg font-medium text-white bg-red-500 rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                title: {item.title} - author: {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
