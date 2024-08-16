import { Data } from "./Data/Data";

export const WorkCard = ({ title, data, icon }) => {
  return (
    <div className="w-96 bg-[#f5f5f5] rounded-xl font-bigjohn-regular p-4 pb-1 border">
      <div className="flex items-center gap-2">
        <img className="h-8 w-8" src={icon} />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <hr className="my-2" />
      {data.map((item) => (
        <Data data={item} />
      ))}
    </div>
  );
};
