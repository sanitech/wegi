import React, { useEffect, useState } from "react";
import "./fetchdata.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function FetchData() {
  const URL = "http://localhost/wegi/";
  const navigate = useNavigate();

  const { id } = useParams();

  const [data, setData] = useState({});

  const fetchDataById = async (pid) => {
    await axios.get(`http://localhost/wegi/index.php/${pid}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchDataById(id);
  }, []);

  const deleteData = async () => {
    await axios.delete(URL + `index.php/${data.id}`).then((res) => {
      console.log(res.data);
      const result = res.data;
      if (result.status === 1) {
        navigate("/", { state: res.data });
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="detail-card">
        {data.pimage && (
          <div className="banner">
            <img src={URL + data.pimage} alt="" />
          </div>
        )}

        <div className="info">
          <div className="row">
            <h2 className="title_det">{data.title}</h2>
            <div className="col-sm-10">
              <div className="row items-det">
                <div className="items-lists disc col-sm-10">
                  <span>{data.descr}</span>
                </div>
              </div>
              <div className="row items-det">
                <div className="items-lists col-sm-5">
                  <label htmlFor="">Model</label>
                  <span>
                    <i class="bi bi-egg"></i>
                    {data.model}
                  </span>
                </div>
                <div className="items-lists col-sm-5">
                  <label htmlFor="">Location</label>
                  <span>
                    <i class="bi bi-geo-alt"></i>
                    {data.location}
                  </span>
                </div>
              </div>
              <div className="row items-det">
                <div className="items-lists col-sm-5">
                  <label htmlFor="">Quantity</label>
                  <span>
                    <i class="bi bi-123"></i>
                    {data.quant}
                  </span>
                </div>
                <div className="items-lists col-sm-5">
                  <label htmlFor="">Unit Price</label>
                  <span>
                    <i class="bi bi-currency-dollar"></i>
                    {data.price}
                  </span>
                </div>
              </div>
              <div className="row items-det">
                <div className="items-lists col-sm-5">
                  <label htmlFor="">Date</label>
                  <span>
                    <i class="bi bi-calendar2-plus"></i>
                    {data.quant}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="editor">
                <button
                  className="btn-group btn-edit"
                  onClick={() => navigate("/edit", { state: { id: data.id } })}
                >
                  <i class="bi bi-pen"></i>
                  Edit
                </button>
                <button
                  className="btn-group btn-delete"
                  onClick={() => deleteData()}
                >
                  <i class="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
