import React from "react";

export default function Review() {
  return (
    <div className="w-full">
      <h1 className="text-3xl">Book Reviews</h1>
      <hr className="border-t-2 border-dotted border-gray-400 my-1" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* display review */}
        <div>Review</div>
        {/* write review */}
        <div>
          <input type="text" value="Pritom" readOnly />
        </div>
      </div>
    </div>
  );
}
