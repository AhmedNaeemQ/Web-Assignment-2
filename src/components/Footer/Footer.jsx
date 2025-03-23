import React from "react";
import { useUserDetails } from "../../context/UserDetails";
import { InstaIcon } from "../Contact/SocialCard/assets/InstaIcon";
import { LinkedinIcon } from "../Contact/SocialCard/assets/LinkedinIcon";
import { GmailIcon } from "../Contact/SocialCard/assets/GmailIcon";
import { GithubIcon } from "../Contact/SocialCard/assets/GithubIcon";

const Footer = () => {
  const { userDetails } = useUserDetails();
  console.log(userDetails)
const socialMediaLinks = (userDetails.socialMediaLinks && userDetails.socialMediaLinks.length > 0) ? userDetails.socialMediaLinks : [
    {
        socialName: "Gmail",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmednaeem6603@gmail.com",
        icon: <GmailIcon />,
    },
    {
        socialName: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-naeem/",
        icon: <LinkedinIcon />,
    },
    {
        socialName: "Instagram",
        url: "https://www.instagram.com/a_h_m_e_d_n_a_e_e_m/",
        icon: <InstaIcon />,
    },
    {
        socialName: "GitHub",
        url: "https://www.github.com/AhmedNaeemQ",
        icon: <GithubIcon />,
    },
];

return (
    <footer className="text-black py-4">
        <div className="container mx-auto text-center">
            <hr />
            <h2 className="text-xl font-bold my-4 text-outline text-white">
                Follow Us
            </h2>
            <div className="flex justify-center space-x-4">
                {socialMediaLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        className="hover:text-blue-400 transition duration-200 flex items-center space-x-2"
                    >
                        {link.icon || ""}
                        <span>{link.socialName || ""}</span>
                    </a>
                ))}
            </div>
            <p className="mt-4 text-xs">
                &copy; {new Date().getFullYear()} Ahmed Naeem (21L-1820). All rights
                reserved.
            </p>
        </div>
    </footer>
);
};

export default Footer;
