import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const StarryNight = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  const makeStars = () => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight);
    const starCount = Math.floor(maxSize / 2);

    const getRandomX = () => Math.random() * maxSize;
    const getRandomY = () => Math.random() * maxSize;
    const randomRadius = () => Math.random() * 0.7 + 0.6;

    const newStars = Array.from({ length: starCount }, (_, index) => (
      <Star key={index} cx={getRandomX()} cy={getRandomY()} r={randomRadius()} />
    ));

    setStars(newStars);
  };

  useEffect(() => {
    makeStars();

    const handleResize = () => {
      makeStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BackSky>
      <Sky>{stars}</Sky>
    </BackSky>
  );
};

const moveStar = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const BackSky = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const Sky = styled.svg`
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${moveStar} 480s linear infinite;
`;

const Star = styled.circle`
  fill: #fff;
  stroke: none;
  stroke-width: 0;
`;

export default StarryNight;
