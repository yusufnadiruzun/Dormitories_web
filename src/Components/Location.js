import React from "react";

function Location({street, city}) {
  return (
    <div>
      <h1 className="font-bold">Adres</h1>
      <h1 className="font-serif">{street}</h1>
      <h1 className="font-serif">{city}</h1>
    </div>
  );
}

export default Location;
