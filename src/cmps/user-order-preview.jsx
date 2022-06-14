import React from "react"

export const UserOrderPreview = ({ order }) => {
  return (
    <React.Fragment>
      <div className="stay-name">{order.stay.name}</div>
      <div className="user-fullname">{order.byUser.fullname}</div>
      <div className="order-total">$ {order.price}</div>
      <div className="order-start-date">
        {new Date(order.startDate).toLocaleDateString()}
      </div>
      <div className="order-end-date">
        {new Date(order.endDate).toLocaleDateString()}
      </div>
      <div className="order-status">{order.status}</div>
      <div className="action-container">
        <button
          className="accept-btn"
          disabled={order.status === "accepted" ? true : false}
        >
          <div>Accept</div>
        </button>
        <button
          className="decline-btn"
          disabled={order.status === "declined" ? true : false}
        >
          <div>Decline</div>
        </button>
      </div>
    </React.Fragment>
  )
}
