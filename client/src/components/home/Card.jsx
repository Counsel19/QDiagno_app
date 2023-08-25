import React from "react";

const Card = ({ img, title, color}) => {
  return (
    <div className={`p-2 bg-white w-full rounded-xl shadow-xl hover:shadow-2xl border-t-2 ${color}`}>
      <div className="rounded-xl bg-gray-200 h-20 lg:h-24 w-full flex items-center justify-center p-2">
        <img src={img} alt="" className="w-full h-full " />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="mt-3 font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
