import arrow from "../../assets/arrow.png";
import pinkCube from "../../assets/blobs/pinkcube.png";

export const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "Ahmed Naeem - Resume.pdf";
    link.download = "Ahmed Naeem - Resume.pdf";
    link.click();
  };

  return (
    <div className="relative">
      <h1 className="font-bigjohn-regular text-4xl">Resume</h1>
      <img className="h-24 w-24 absolute top-6 left-52" src={arrow} />
      <div className="flex justify-center my-24">
        <button
          onClick={downloadResume}
          className="w-40 h-14 font-bigjohn-regular cursor-pointer text-white rounded-lg border-none relative bg-[#100720] transition duration-100 ease-linear hover:scale-90 hover:rotate-3 hover:bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(255,94,247,1)_17.8%,_rgba(2,245,255,1)_100.2%)]"
        >
          Download Resume
          <span className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(255,94,247,1)_17.8%,_rgba(2,245,255,1)_100.2%)] blur-[15px] -z-10"></span>
        </button>
      </div>
    </div>
  );
};
