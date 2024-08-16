import { InstaIcon } from "./assets/InstaIcon";
import { LinkedinIcon } from "./assets/LinkedinIcon";
import { GmailIcon } from "./assets/GmailIcon";
import { GithubIcon } from "./assets/GithubIcon";

export const SocialCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <button className="w-24 h-24 outline-none border-none bg-white rounded-tl-[90px] rounded-br-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#d44638] flex justify-center items-center group">
          <GmailIcon className="text-[#cc39a4] group-hover:text-white" />
        </button>
        <button className="w-24 h-24 outline-none border-none bg-white rounded-tr-[90px] rounded-bl-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#0e76a8] flex justify-center items-center group">
          <LinkedinIcon className="text-[#0e76a8] group-hover:text-white" />
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <button className="w-24 h-24 outline-none border-none bg-white rounded-bl-[90px] rounded-tr-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-black flex justify-center items-center group">
          <GithubIcon className="text-[black] group-hover:text-white" />
        </button>
        <button className="w-24 h-24 outline-none border-none bg-white rounded-tl-md rounded-br-[90px] shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#cc39a4] flex justify-center items-center group">
          <InstaIcon className="text-[#cc39a4] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};
