import React from "react";

function Dormname({ dormname }) {
  return (
    <div>
      <h2 className="flex justify-center text-2xl  font-sans font-bold">
        {dormname}
      </h2>
      <h2 className="flex justify-center text-1xl  font-mont font-semibold">
        ÖĞRENCİ YURDU
      </h2>
    </div>
  );
}

export default Dormname;
