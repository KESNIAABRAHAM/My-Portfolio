import React, { useState, useEffect } from "react";

import {useTypewriter,cursor} from "react-simple-typewriter";

import profilepic from "../images/profilepic.jpg";
import profilepic2 from "../images/profilepic2.jpg";
import profilepic3 from "../images/profilepic3.jpg";

const Carousel = () => {
  const pics = [profilepic, profilepic2, profilepic3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pics.length]);

 

    const [text] = useTypewriter({
      words:['Frontend Developer','IT Technician'],
      loop:0
    })
  
    
  return (
    <div>
      <h2 className="text-white text-center mb-2 mt-20">Hi! i am Kesnia Uchendu</h2>
      <h2 className="text-white text-center">And i am a <span className="text-green-500">{text}</span></h2>
      <img
        src={pics[currentIndex]}
        alt={`Carousel ${currentIndex}`}
        className="w-80 h-50 rounded-full mt-20"
      />
    </div>
  );
};

export default Carousel;
