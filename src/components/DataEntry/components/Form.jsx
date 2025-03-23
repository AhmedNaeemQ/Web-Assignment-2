import React, { useContext, useEffect, useState } from "react";
import paper from "../../../assets/paper.jpg";
import { useUserDetails } from "../../../context/UserDetails";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {setUserDetails} = useUserDetails();
  const [socialMediaLinks, setSocialMediaLinks] = useState([{ socialName: "", url: "" }]);
  const navigate = useNavigate();

  const addSocialMediaLink = () => {
    setSocialMediaLinks([...socialMediaLinks, { socialName: "", url: "" }]);
  };

  const handleChange = (index, event) => {
    const values = [...socialMediaLinks];
    values[index][event.target.name] = event.target.value;
    setSocialMediaLinks(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserDetails({
      name: event.target.name.value,
      role: event.target.role.value,
      description: event.target.description.value,
      socialMediaLinks: socialMediaLinks,
    })
    navigate("/portfolio");
  };  

  return (
    <div className="relative text-center flex flex-col justify-center items-center w-2/3 mx-auto mt-16 border-4 border-black rounded-lg py-4 p-2">
      <img  className="absolute h-full w-full -z-10" src={paper} />
      <h2 className="font-bigjohn-bold uppercase text-xl mb-4">
        Enter your details
      </h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 mb-1">
          <div>
            <label className="block text-left">Student's Name</label>
            <input type="text" name="name" placeholder="Enter your name..." className="border-black w-full border rounded-lg p-1" required />
          </div>
          <div>
            <label className="block text-left">Role</label>
            <textarea name="role" rows={1} placeholder="Enter your role..." className="border-black w-full border rounded-lg p-1" required />
          </div>
        </div>
        <div>
            <label className="block text-left">Detailed Description</label>
            <textarea name="description" rows={2} placeholder="Something good about you..." className="border-black w-full border rounded-lg p-1" required />
          </div>
        
        {socialMediaLinks.map((link, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="block text-left">Social Media Name</label>
              <input
                type="text"
                name="socialName"
                value={link.name}
                onChange={(event) => handleChange(index, event)}
                className="border-black w-full border rounded-lg p-2"
                placeholder="Self Explanatory"
                required
              />
            </div>
            <div>
              <label className="block text-left">Social Media URL</label>
              <input
                type="text"
                name="url"
                value={link.url}
                onChange={(event) => handleChange(index, event)}
                className="border-black w-full border rounded-lg p-2"
                placeholder="You remember it right ?"
                required
              />
            </div>
          </div>
        ))}
        <div className="flex gap-2 justify-center mt-4">
        <button type="button" onClick={addSocialMediaLink} className="mb-1 border rounded-lg p-2 text-outline bg-[#F92377]">
          Add Social Media
        </button>
        <button type="submit" className="mb-1 border rounded-lg p-2 bg-[#3a1a7e9a] text-outline">
          Submit/Generate
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
