export const Data = ({ data }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <h2 className="font-bold">{data.title}</h2>
        <p className="bg-white rounded-md p-1 text-xs flex items-center text-center">{data.date}</p>
      </div>
      <p className="text-sm">{data.location}</p>
      <p className="text-xs mt-1">{data.description}</p>
    </div>
  );
};
