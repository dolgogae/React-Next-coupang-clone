import React from 'react'

const OrderDetails = ({ params, searchParams }) => {

  // 페이지 번호
  const { id } = params;
  // 쿼리 파라미터
  const { hello } = searchParams;

  return (
    <div>{ id }
      <br/>
      { hello }
    </div>
  )
}

export default OrderDetails
