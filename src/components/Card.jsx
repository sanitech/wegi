import React from "react";
import images from "../assets/images/pro.png";
import "./items.css";
function Card({ items }) {
  return (
    <>
      {items.map((items) => {
        return (
          <div className="item-card col-sm-5">
            <div className="p-image">
              <img src={images} alt="" />
            </div>
            <ul className="product-list">
              <li className="p-title">
                <i class="bi bi-gear"></i>
                {/* <span>{item.title}</span> */}
              </li>
              <li>
                <i class="bi bi-ev-front"></i>
                <span>Massis fergusen</span>
              </li>

              <li>
                <i class="bi bi-chat-text"></i>
                <span className="disc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe dolorem eligendi molestias? Aperiam omnis aut aliquam
                  amet necessitatibus facere eos?
                </span>
              </li>
              <li>
                <i class="bi bi-123"></i>
                <span>5</span>
              </li>
              <li>
                <i class="bi bi-cash-coin"></i>
                <span className="price">123 ETB</span>
              </li>
              <li>
                <div className="lists">
                  <div className="">
                    <i class="bi bi-calendar2-date"></i>
                    <span>12-3-2021 </span>
                  </div>
                  <div className="content">
                    <div className="dot"></div>
                    <i class="bi bi-geo-alt"></i>
                    <span>Adama </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Card;
