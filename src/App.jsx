import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Home from "./components/Home";
import Loading from "./loader/Loading";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;
