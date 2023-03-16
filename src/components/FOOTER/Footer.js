import React from "react";
import image3 from "../../assets/image3.jpg";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <div>
        <ul className="flex footBar bg-white justify-around items-center">
          <li>
            Property type
            <div className="details"> Show all</div>
          </li>
          <li>
            Bedrooms
            <div className="details"> Any bed</div>
          </li>
          <li>
            Price range
            <div className="details"> Any price</div>
          </li>
          <button className="h-16 w-36 text-white  text-xl bg-blue-500">
            {" "}
            Search{" "}
          </button>
        </ul>
      </div>

      <img
        src={image3}
        alt="image3"
        style={{ padding: 30 }}
        className="image3 -z-2 "
      />
    </div>
  );
}

export default Footer;
