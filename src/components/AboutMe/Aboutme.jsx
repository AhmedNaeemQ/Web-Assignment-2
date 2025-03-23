import blobs from "../../assets/blobs/blueball.png";
import { useUserDetails } from "../../context/UserDetails";

export const Aboutme = () => {
  const { userDetails } = useUserDetails();
  return (
    <div className="relative">
      <img
        style={{ animationDuration: "6s" }}
        className="absolute -top-6 -right-8 h-24 w-24 object-cover animate-bounce duration-75"
        src={blobs}
      />
      {/* <div className="absolute h-28 w-28 rounded-full -bottom-6 -left-8 bg-gradient-to-br from-blue-400 to-pink-500"></div> */}
      <div className="border rounded-2xl p-4 backdrop-blur bg-transparent ">
        <h1 className="font-bigjohn-regular text-4xl">About Me</h1>
        {userDetails.description ? (
          <p className="font-bigjohn-regular text-xl my-4 text-justify">
            {userDetails.description}
          </p>
        ) : (
          <p className="font-bigjohn-regular text-xl my-4 text-justify">
            Hello! I'm Ahmed Naeem, a passionate Computer Scientist currently
            pursuing my Bachelor's degree in Computer Science at FAST
            University. With a GPA of 3.22 and a strong focus on both
            theoretical and practical aspects of the field, I'm dedicated to
            continuous learning and applying my skills in real-world scenarios.{" "}
            <br />
            <br /> Feel free to explore my portfolio to see some of the work
            I’ve done, and don’t hesitate to reach out if you’d like to
            collaborate or learn more about what I do!{" "}
          </p>
        )}
      </div>
    </div>
  );
};
