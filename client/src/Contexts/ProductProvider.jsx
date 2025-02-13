import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // State für Produktliste
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Wireless Keyboard",
      category: "Electronics",
      price: 49.99,
      piece: 10,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      productName: "Gaming Mouse",
      category: "Electronics",
      price: 29.99,
      piece: 15,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      productName: "Coffee Mug",
      category: "Home & Kitchen",
      price: 12.99,
      piece: 20,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      productName: "Bluetooth Speaker",
      category: "Electronics",
      price: 39.99,
      piece: 8,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      productName: "Running Shoes",
      category: "Sports",
      price: 59.99,
      piece: 12,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      productName: "Hoodie",
      category: "Fashion",
      price: 34.99,
      piece: 14,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      productName: "Wristwatch",
      category: "Accessories",
      price: 99.99,
      piece: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      productName: "Notebook",
      category: "Stationery",
      price: 7.99,
      piece: 25,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      productName: "Backpack",
      category: "Fashion",
      price: 44.99,
      piece: 9,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      productName: "Sunglasses",
      category: "Accessories",
      price: 24.99,
      piece: 11,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      productName: "Wireless Earbuds",
      category: "Electronics",
      price: 59.99,
      piece: 7,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      productName: "Desk Lamp",
      category: "Home & Kitchen",
      price: 19.99,
      piece: 13,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      productName: "Portable Charger",
      category: "Electronics",
      price: 22.99,
      piece: 16,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      productName: "Yoga Mat",
      category: "Sports",
      price: 29.99,
      piece: 18,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      productName: "Water Bottle",
      category: "Sports",
      price: 14.99,
      piece: 22,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      productName: "Desk Chair",
      category: "Furniture",
      price: 129.99,
      piece: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      productName: "Throw Pillow",
      category: "Home & Kitchen",
      price: 18.99,
      piece: 10,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      productName: "Smartwatch",
      category: "Electronics",
      price: 199.99,
      piece: 6,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      productName: "T-shirt",
      category: "Fashion",
      price: 19.99,
      piece: 30,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      productName: "Electric Toothbrush",
      category: "Health & Beauty",
      price: 49.99,
      piece: 8,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Kontext Provider
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
