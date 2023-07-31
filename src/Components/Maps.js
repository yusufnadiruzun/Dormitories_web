import React from 'react'

function Maps({src}) {
  return (
    <div>
          <iframe
              className="mx-auto border-solid border-2 w-100 h-96"
              src= {src}
              loading="lazy"
              style={{ border: "1 solid black" }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
    </div>
  )
}

export default Maps