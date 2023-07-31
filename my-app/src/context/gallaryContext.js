import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1677461404789-1faafbd934e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1677690092396-e1efd8a3bc01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1677607240655-3bc840ede271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
];

const GallaryContext = createContext();
function GallaryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  function toggleFavorite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setValue(updateArray);
    setPhotos(updateArray);
  }
  function addToCart(newItem) {
    setCartItems((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStoredCart([...prevItem]);
        return [...prevItem];
      }
      setStoredCart([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  }
  function removeFromCart(photoId) {
    setCartItems((prevItem) => {
      const results = prevItem.filter((item) => item.id !== photoId);
      setStoredCart(results);
      return results;
    });
  }
  const value = {
    photos,
    cartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GallaryContext.Provider {...props} value={value}></GallaryContext.Provider>
  );
}
function useGallary() {
  const context = useContext(GallaryContext);
  if (typeof context === "undefined")
    throw new Error("useGallary must be used within GallaryProvider");
  return context;
}
export { GallaryProvider, useGallary };
