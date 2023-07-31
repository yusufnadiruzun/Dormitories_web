import React from 'react'

function Phone({telno}) {
  return (
    <div>
         <h1 className="font-serif font-bold">Tel No:</h1>
        <h1 className="font-serif">{telno}</h1>
    </div>
  )
}

export default Phone