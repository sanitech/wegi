import React, { useRef } from "react";
import Webcam from "react-webcam";
import RecordItems from "./screen/RecordItems";
import ItemList from "./components/ItemList";
import Home from "./screen/Home";
import { Route, Routes } from "react-router-dom";
import ViewDetail from "./screen/ViewDetail";
import Edit from "./screen/Edit";

function App() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const imgRef = useRef(null);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<RecordItems />} />
        <Route path="/view/:id" element={<ViewDetail />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
