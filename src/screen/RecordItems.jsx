import React, { useState } from "react";
import "../components/style.css";
import Navbar from "../components/navbar";
import axios from "axios";

function RecordItems() {
  const [title, setTitle] = useState([]);
  const [model, setModel] = useState([]);
  const [location, setLocation] = useState([]);
  const [quant, setQuant] = useState([]);
  const [unit, setUnit] = useState([]);
  const [desc, setDesc] = useState([]);
  const [pimage, setSelectImagery] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState(false);
  const [path, setPath] = useState("");

  const setImage = (e) => {
    setSelectImagery(e.target.files[0]);
  };

  // const inputHandler = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;

  //   setInput((prev) => ({ ...prev, [name]: value }));
  // };

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append("productImage", pimage);
    await axios
      .post("http://localhost/wegi/upload.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const filePath = res.data;
        // setInput((prev) => ({ ...prev, paths: filePath.message }));
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("productImage", selectImagery);
    // await axios
    //   .post("http://localhost/wegi/upload.php", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     const filePath = res.data;
    //     // setInput((prev) => ({ ...prev, paths: filePath.message }));
    //   });
    // // console.log(input);

    formData.append("title", title);
    formData.append("model", model);
    formData.append("descr", desc);
    formData.append("location", location);
    formData.append("price", unit);
    formData.append("quant", quant);
    formData.append("pimage", pimage);

    await axios
      .post("https://everyonecanchat.000webhostapp.com/index.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setAlert(true);
        setMessage(res.data);
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={(e) => submitHandler(e)} className="form col-sm-4">
          <h2 className="title">Item Registration </h2>
          {alert &&
            (message.status == 1 ? (
              <div className="alert alert-success">{message.message}</div>
            ) : (
              <div className="alert alert-warning">{message.message}</div>
            ))}
          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-gear"></i>
            </div>
            <input
              type="text"
              name="title"
              placeholder="item Name"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-ev-front"></i>
            </div>
            <input
              type="text"
              name="model"
              placeholder="Model"
              className="form-control"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-ev-front"></i>
            </div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-123"></i>
            </div>
            <input
              type="text"
              name="quant"
              placeholder="Quantity"
              className="form-control"
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
            />
          </div>

          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-ev-front"></i>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Unit Price"
              className="form-control"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
          <div className="input-form-with-icon description">
            <div className="icon-container">
              <i class="bi bi-chat-text"></i>
            </div>
            <textarea
              name="descr"
              id=""
              cols="15"
              rows="3"
              className="form-control"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="input-form-with-icon">
            <div className="icon-container">
              <i class="bi bi-cloud-upload"></i>
            </div>
            <button className="picker">
              <span>Upload</span>
              <input
                type="file"
                name="pimage"
                id=""
                onChange={(e) => setSelectImagery(e.target.files[0])}
              />
            </button>
          </div>
          <button className="btn-record">Record Item</button>
        </form>
      </div>
    </>
  );
}

export default RecordItems;
