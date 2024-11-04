// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Restaurant from "./Pages/Restaurant";
import Recipes from "./Pages/Recipes";
import Footer from "./Components/Footer";
import ProductCard from "./Pages/ProductCard";
import WildYozuRub from "./Pages/WildYozuRub";
import PulledPork from "./Pages/PulledPork";
import PinaGrilled from "./Pages/PinaGrilled";
import CrispyNoodles from "./Pages/CrispyNoodles";
import AddToCart from "./Components/AddToCart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/wildyozurub" element={<WildYozuRub />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/pulledpork" element={<PulledPork />} />
        <Route path="/pinagrilled" element={<PinaGrilled />} />
        <Route path="/crispynoodles" element={<CrispyNoodles />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
