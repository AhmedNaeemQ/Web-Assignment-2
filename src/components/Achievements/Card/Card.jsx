export const Card = ({ logo, title, description }) => {
  return (
    <div className="w-96 flex flex-col items-center text-center my-8">
      <img
        className={`h-24 w-24 lg:h-16 lg:w-16 object-cover mb-4 ${
          title === "Java Programming by Sololearn" && "animate-spin"
        }`}
        src={logo}
      />
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="lg:text-sm">{description}</p>
    </div>
  );
};
