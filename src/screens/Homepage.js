import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage({ dormsData }) {

  const [dataFromSQL, setDataFromSQL] = React.useState([]);
  const navigate = useNavigate();
  const handleSubmit = (url) => {
    navigate(`/${url}`);
  } 

  return (
    <div className="my-container">
      {/* <div className="relative pb-1/3 overflow-hidden" id='banner'>
        <img className='absolute h-full w-full object-fill' src={require("../assets/galata.png")} alt="" />
      </div> */}

      <div className="relative" id="banner">
        <img
          className="h-full w-full object-cover"
          src={require("../assets/pexels-selcuk-teke-3684396.jpg")}
          alt=""
        />
        <div className="absolute top-0 w-full h-full justify-center items-center">
          <div>
            <h1 className=" xs:text-sm xs:mt-1 sm:text-4xl sm:mt-5 xl:text-5xl  xl:mt-10 font-bold text-center text-mainText">
              Beyoğlu Bölgesi Yurtlarımız
            </h1>
          </div>
        </div>
      </div>

      {/* dorms */}
      <div className="dorms grid grid-cols-3 mx-12 my-12 gap-x-4 gap-y-6 md:mx-12 md:my-24 md:gap-x-8 md:gap-y-12">
        {dormsData.map((dorm) => (
          <div className=" my-card shadow-2xl overflow-hidden rounded-sm mx-auto" onClick={() => handleSubmit(dorm.dorm_url)}>
            <div className="my-card-img">
              <img className="object-cover" src={dorm.dorm_photos[0]} alt="" />
            </div>
            <div className="my-card-info text-center text-xs sm:text-base md:text-lg">
              <p className="font-bold">{dorm.dorm_name}</p>
              <p>Öğrenci Yurdu</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
