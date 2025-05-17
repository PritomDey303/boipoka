import React from "react";

export default function CheckOutSummery({ total, deliveryFee }) {
  return (
    <div className="p-5 text-gray-700">
      <h1 className="font-bolg text-2xl mb-5">Checkout Summary</h1>
      <hr className="text-gray-400" />
      <div className="flex justify-between my-2 text-lg">
        <p>Subtotal</p>
        <p>{total} TK</p>
      </div>
      <hr className="border-t-2 border-dotted border-gray-400 my-1" />
      <div className="flex justify-between my-2 text-lg">
        <p>Online Fees</p>
        <p>{deliveryFee} TK</p>
      </div>
      {/* total calc */}
      <hr className="border-t-2 border-dotted border-gray-400 my-1" />
      <div className="flex justify-between my-2 text-lg">
        <p>Total</p>
        <p>{deliveryFee + total} TK</p>
      </div>
      {/* payable total calc */}
      <hr className="border-t-2 border-dotted border-gray-600 my-1" />
      <div className="flex justify-between my-2 font-bold text-lg">
        <p>Payable Total</p>
        <p>{deliveryFee + total} TK</p>
      </div>
    </div>
  );
}
