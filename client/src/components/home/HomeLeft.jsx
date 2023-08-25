import React from "react";
import Card from "./Card";
import Brand from "../sidebar/Brand";
import MedicineImg from "../../assets/images/medicine.svg";
import DoctorImg from "../../assets/images/doctor.svg";
import ChattingImg from "../../assets/images/chatting.svg";

const HomeLeft = () => {
  return (
    <div className="lg:col-span-4 lg:bg-gray-200 lg:h-full">
      <div className="mb-3 lg:mb-6 lg:mt-4">
        <Brand />
      </div>

      <div className="grid gap-4 grid-cols-2 grid-rows-3 px-8 pb-8">
        <div className="col-start-1 col-span-1 row-start-1 row-span-1">
          <Card
            img={MedicineImg}
            title="Medical Care"
            color={"border-green-500"}
          />
        </div>
        <div className="col-start-2 col-span-1 row-start-2 row-span-1">
          <Card
            img={ChattingImg}
            title="Health Chat"
            color={"border-teal-500"}
          />
        </div>
        <div className="col-start-1 col-span-1 row-start-3 row-span-1">
          <Card
            img={DoctorImg}
            title="Quick Diagnosis"
            color={"border-violet-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
