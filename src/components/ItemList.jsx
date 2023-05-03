import React from "react";
import "./items.css";
import images from "../assets/images/pro.png";
import { Link, useNavigate } from "react-router-dom";

function ItemList({ ListItem }) {
  const URL = "https://everyonecanchat.000webhostapp.com/";
  const navigate = useNavigate();
  return (
    <div className="wrapper row col-sm-12">
      {ListItem.map((items, key) => {
        return (
          <div
            // to={{
            //   pathname: `/view/${items.id}`,
            //   state: { DUMMY_DATA: items }, // your data array of objects
            // }}
            className="item-card links col-sm-5"
            key={key}
            onClick={() => navigate(`/view/${items.id}`, { state: items })}
          >
            {items.pimage && (
              <div className="p-image">
                <img src={URL + items.pimage} alt="" />
              </div>
            )}

            <ul className="product-list">
              <li className="p-title">
                <i class="bi bi-gear"></i>
                <span>{items.title}</span>
              </li>
              <li>
                <i class="bi bi-ev-front"></i>
                <span>{items.model}</span>
              </li>

              <li>
                <i class="bi bi-chat-text"></i>
                <span className="disc">{items.descr}</span>
              </li>
              <li>
                <i class="bi bi-123"></i>
                <span>{items.quant}</span>
              </li>
              <li>
                <i class="bi bi-cash-coin"></i>
                <span className="price">{items.price}</span>
              </li>
              <li>
                <div className="lists">
                  <div className="">
                    <i class="bi bi-calendar2-date"></i>
                    <span>{items.regdate} </span>
                  </div>
                  <div className="content">
                    <div className="dot"></div>
                    <i class="bi bi-geo-alt"></i>
                    <span>{items.location} </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
