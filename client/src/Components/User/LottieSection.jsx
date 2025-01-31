import React from "react";
import Lottie from "react-lottie";
import login from "../../assets/animations/login.json";

const LottieSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={215} width={215} />;
};

export default LottieSection;
