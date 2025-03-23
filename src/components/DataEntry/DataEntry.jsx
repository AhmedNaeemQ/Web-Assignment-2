import React from "react";
import art from "../../assets/dataEntry-bg.png";
import Form from "./components/Form";

const DataEntry = () => {
  return (
    <div className="flex justify-between p-4">
        <div className="w-2/3">
      <h1 className="font-bigjohn-bold uppercase text-7xl mb-8 mt-32 text-outline text-shadow text-white">
        Creating your Portfolio{" "}
      </h1>
      <img width={620} className="absolute top-0 -z-10" src={art} />
      
    </div>
    <Form/>
    </div>
  );
};

export default DataEntry;
