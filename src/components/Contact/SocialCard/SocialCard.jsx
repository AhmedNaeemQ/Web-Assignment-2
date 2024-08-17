import { InstaIcon } from "./assets/InstaIcon";
import { LinkedinIcon } from "./assets/LinkedinIcon";
import { GmailIcon } from "./assets/GmailIcon";
import { GithubIcon } from "./assets/GithubIcon";
import label from "../../../assets/label.png";

export const SocialCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <button
          onClick={() =>
            (window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&to=ahmednaeem6603@gmail.com")
          }
          className="w-24 h-24 outline-none border-none bg-white rounded-tl-[90px] rounded-br-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#d44638] flex justify-center items-center group"
        >
          <p className="absolute top-0 -left-32 opacity-0 group-hover:opacity-100 transition-all text-[#d44638]">
            Gmail
          </p>
          <img
            className="absolute -left-24 opacity-0 group-hover:opacity-100 transition-all"
            src={label}
          />
          <GmailIcon className="text-[#d44638] group-hover:text-white translate-x-1.5 translate-y-1.5 translate" />
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/ahmed-naeem786")
          }
          className="w-24 h-24 outline-none border-none bg-white rounded-tr-[90px] rounded-bl-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#0e76a8] flex justify-center items-center group"
        >
          <p className="absolute top-0 -right-36 opacity-0 group-hover:opacity-100 transition-all text-[#0e76a8]">
            LinkedIn
          </p>
          <img
            className="absolute -right-24 opacity-0 group-hover:opacity-100 transition-all scale-x-[-1]"
            src={label}
          />
          <LinkedinIcon className="text-[#0e76a8] group-hover:text-white -translate-x-1.5 translate-y-1.5" />
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={() =>
            (window.location.href = "https://www.github.com/AhmedNaeemQ")
          }
          className="w-24 h-24 outline-none border-none bg-white rounded-bl-[90px] rounded-tr-md shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-black flex justify-center items-center group"
        >
          <p className="absolute bottom-0 -left-32 opacity-0 group-hover:opacity-100 transition-all text-[black]">
            Github
          </p>
          <img
            className="absolute -left-24 opacity-0 group-hover:opacity-100 transition-all scale-y-[-1]"
            src={label}
          />
          <GithubIcon className="text-[black] group-hover:text-white translate-x-1.5 -translate-y-1.5" />
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/a_h_m_e_d_n_a_e_e_m/")
          }
          className="w-24 h-24 outline-none border-none bg-white rounded-tl-md rounded-br-[90px] shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-[#cc39a4] flex justify-center items-center group"
        >
          <p className="absolute bottom-0 -right-36 opacity-0 group-hover:opacity-100 transition-all text-[#cc39a4]">
            Instagram
          </p>{" "}
          <img
            className="absolute -right-24 opacity-0 group-hover:opacity-100 transition-all scale-x-[-1] scale-y-[-1]"
            src={label}
          />
          <span className=" -translate-x-1.5 -translate-y-1.5">
            <InstaIcon className="text-[#cc39a4] group-hover:text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};
