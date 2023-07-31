import React from "react";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
import Dormname from "../Components/Dormname";
import Phone from "../Components/Phone";
import Maps from "../Components/Maps";

function Dormdata({data}) {

  return (
    <div className="bg-cream">
      <div className="md:mx-auto px-20 sm:mx-auto px-0">
        <div className="grid grid-cols-1">
          <Carousel
            img1={require("../assets/pexels-selcuk-teke-3684396.jpg")}
            img2={require("../assets/pexels-selcuk-teke-3684396.jpg")}
            img3={require("../assets/pexels-selcuk-teke-3684396.jpg")}
          ></Carousel>
        </div>

        <div className="container mx-auto  md:w-2/3">
          <div className="grid grid-cols-1 mt-4 ">
            <Dormname dormname={data.dorm_name}></Dormname>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-5 mx-auto ">
            <Location
              city={data.address}
              street={"Piri Paşa mah, hamursuz sok. no:6, 34445"}
            ></Location>
            <div className="flex sm:justify-start mt-4 md:justify-end">
              <Phone telno={data.phone}></Phone>
            </div>
          </div>

          <div className="grid grid-cols-1 mx-auto mt-5 p-0">
            <Maps
              src={
                data.map
              }
            ></Maps>
          </div>
          <div className="grid grid-cols-1 mx-auto mt-5 p-0 text-center ">
            <div id="Title">
              <h1 className="flex justify-center text-2xl  font-mont font-semibold">
                Yurt Hakkında
              </h1>
            </div>
            <div id="Since" className="mt-5">
              <h1 className="flex justify-center text-1xl  font-mont font-semibold">
                Yapım Yılı
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-thin">
                {data.since}
              </h1>
            </div>
            <div id="Capasity" className="mt-4">
              <h1 className="flex justify-center text-1xl  font-mont font-semibold">
                Öğrenci Kapasitesi
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-thin">
                {data.capacity} kişi
              </h1>
            </div>
            <div id="Capasity" className="mt-4 mb-5">
              <h1 className="flex justify-center text-1xl  font-mont font-semibold">
                Öğrencilerin Gittiği Üniversiteler
              </h1>
              {
                data.universities.map((university) => {
                  return (
                    <h1 className="flex justify-center text-1xl mt-2 font-mont font-normal">
                      {university}
                    </h1>
                  );
                })
              }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dormdata;
