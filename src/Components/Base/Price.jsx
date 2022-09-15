import React from "react";
import "../../Styles/Navfooter.scss";

function Price() {
  return (
    <div className="price">
      <div className="pricediv">
        <ul>
          <li>
            <a href="#" className="href">
              SPX
            </a>
            <span className="textspan">3,946.01</span>
          </li>
          <li>
            <a href="#" className="href">
              DJI
            </a>
            <span className="textspan">31,315.09</span>
          </li>
          <li>
            <a href="#" className="href">
              FTSE
            </a>
            <span className="textspan">7,295.84</span>
          </li>
          <li>
            <a href="#" className="href">
              N225
            </a>
            <span className="textspan">27,875.91</span>
          </li>
        </ul>
      </div>
      <div className="menudiv">
        <a href="#" className="href">
          Markets Data
        </a>
      </div>
    </div>
  );
}

export default Price;
