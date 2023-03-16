import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import { BsCircle } from "react-icons/bs";

function Body(props) {
  return (
    <>
      <div className="flex -mt-1 justify-center items-center m-24 p-0">
        <div className="text-white">
          <h1 className="font-bold text-8xl">Choose Your Best Happy Land</h1>
          <p className="text-2xl mt-3">
            {" "}
            Real Estate & Properties For Sale Or Rent
          </p>
          <p className="text-2xl">In 12+ Countries</p>
        </div>

        <div className="relative">
          <div className="twoCircles flex  justify-evenly mt-20 mr-20">
            <BsCircle className="text-4xl text-white " />
            <img
              src={image2}
              alt="location"
              style={{
                borderWidth: 2,
                height: 130,
                width: 130,
                borderRadius: 65,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="mt-26">
            <img
              src={image1}
              alt="location"
              style={{
                borderWidth: 4,
                height: 250,
                width: 250,
                borderRadius: 130,
                objectFit: "cover",
                margin: 50,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
