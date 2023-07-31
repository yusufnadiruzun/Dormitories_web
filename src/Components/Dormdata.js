import React from "react";
import Carousel from "../Components/Carousel";
import Location from "../Components/Location";
import Dormname from "../Components/Dormname";
import Phone from "../Components/Phone";
import Maps from "../Components/Maps";

function Dormdata() {
  return (
    <div className="bg-cream">
      <div className="md:mx-auto px-20 sm:mx-auto px-0">
        <div className="grid grid-cols-1">
          <Carousel
            img1={require("../assets/galata.png")}
            img2={require("../assets/galata.png")}
            img3={require("../assets/galata.png")}
          ></Carousel>
        </div>

        <div className="container mx-auto  md:w-2/3">
          <div className="grid grid-cols-1 mt-4 ">
            <Dormname dormname={"HASKÖY"}></Dormname>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-5 mx-auto ">
            <Location
              city={"Beyoğlu/İstanbul"}
              street={"Piri Paşa mah, hamursuz sok. no:6, 34445"}
            ></Location>
            <div className="flex sm:justify-start mt-4 md:justify-end">
              <Phone telno={"0212 369 70 6445"}></Phone>
            </div>
          </div>

          <div className="grid grid-cols-1 mx-auto mt-5 p-0">
            <Maps
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.125265410646!2d28.948809453480948!3d41.044389665282345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0ab8ccc65c3%3A0x298293bbc5a47010!2zSEFMxLDDhyBIQVNLw5ZZIFnDnEtTRUsgw5bEnlJFVMSwTSDDllpFTCBFUktFSyDDlsSeUkVOQ8SwIFlVUkRV!5e0!3m2!1str!2str!4v1677682059714!5m2!1str!2str"
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
                2015
              </h1>
            </div>
            <div id="Capasity" className="mt-4">
              <h1 className="flex justify-center text-1xl  font-mont font-semibold">
                Öğrenci Kapasitesi
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-thin">
                100 kişi
              </h1>
            </div>
            <div id="Capasity" className="mt-4">
              <h1 className="flex justify-center text-1xl  font-mont font-semibold">
                Öğrencilerin Gittiği Üniversiteler
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-normal">
                Fatih Sultan Mehmet Vakıf Üniversitesi
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-normal">
                İstanbul Üniversitesi
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 font-mont font-normal">
                Beykent Üniversitesi
              </h1>
              <h1 className="flex justify-center text-1xl mt-2 mb-4 font-mont font-normal">
                Haliç Üniversitesi
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dormdata;
