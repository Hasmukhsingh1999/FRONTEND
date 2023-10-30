import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";


const HomePage = () => {
  return (
    <div className=" w-full h-screen">
      <div className="w-full">
        <h1
          className="absolute md:text-7xl text-3xl left-[50%] z-10 text-gray-800 md:top-[12vw] top-[55vw]"
          style={{ transform: "translate(-50%,-50%)", letterSpacing: "5vw" }}
        >
          EXPLORE
        </h1>
        <div
          className="w-full flex items-center justify-center top-[55%]"
          style={{
            position: "absolute",
           
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img
            src="/10966.jpg"
            alt=""
            className="w-[100vw] md:w-[65%]"
            style={{
              // width: "65%",
              // height: "auto",
              objectFit: "cover",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
      </div>

      {/* <Form/> */}
    </div>
  );
};

export default HomePage;
