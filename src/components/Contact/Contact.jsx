import Form from "./Form/Form";
import { SocialCard } from "./SocialCard/SocialCard";

export const Contact = () => {
  return (
    <div className="my-12 mb-[100px] font-bigjohn-regular">
      <h1 className="text-4xl">Contact Me</h1>
      <p className="text-center text-xl mt-8">
        Ready to bring your ideas to life through{" "}
        <span className="text-green-400">innovative</span> software solutions.
        <br /> Let's build something great together.
      </p>
      <div className="flex justify-center my-8">
        <SocialCard />
      </div>
        <Form />
    </div>
  );
};
