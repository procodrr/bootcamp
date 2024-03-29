import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  console.log('hii');
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName}</p>
    </div>
  )
}

console.log(AppleBasket({ appleCount: 10, basketName: 'Right' }))

export default AppleBasket
