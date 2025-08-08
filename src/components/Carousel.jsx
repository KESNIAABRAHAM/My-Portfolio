import { useTypewriter } from "react-simple-typewriter";
import avatar from "../images/Avatar.png";

const Carousel = () => {
  const [text] = useTypewriter({
    words: ["Frontend Engineer", "IT Technician"],
    loop: 0,
  });

  return (
    <div className="flex flex-col items-center mt-20 relative">
      <h2 className="text-white text-center mb-2">Hey there! I'm Kesnia 👋</h2>
      <h2 className="text-white text-center mb-4">
        And I am a <span className="text-green-500">{text}</span>
      </h2>

      <img
        src={avatar}
        alt="avatar"
        className="w-40 h-25 rounded-full bg-gradient-to-b from-orange-500 to-purple-500 object-cover block shrink-0"
      />
    </div>
  );
};

export default Carousel;
