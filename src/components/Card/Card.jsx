export const Card = ({ title, description, image, link }) => {
  return (
    <div
      onClick={() => (window.location.href =  link )}
      class="relative p-3 flex justify-center items-center hover:scale-105 hover:cursor-pointer transition-all w-48 h-72 bg-[#07182E] rounded-2xl overflow-hidden before:content-[''] before:absolute before:w-24 before:h-[130%] before:bg-gradient-to-b before:from-[#00B7FF] before:to-[#FF30FF] before:animate-[spin_3s_linear_infinite] before:transition-all before:duration-200 after:content-[''] after:absolute after:inset-1 after:bg-[#07182E] after:rounded-2xl"
    >
      <div className="z-10 h-60 flex flex-col gap-2 py-2 text-white">
        <img className="rounded" src={image} />
        <h1 className="text-white font-bigjohn-regular">{title}</h1>
        <p className="opacity-80 font-bigjohn-regular text-xs">{description}</p>
      </div>
    </div>
  );
};
