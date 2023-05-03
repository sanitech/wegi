import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import EditorForm from "../components/EditorForm";

export default function Edit() {
  const { state } = useLocation();

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <EditorForm />
      </div>
      <Sidebar />;
    </div>
  );
}
