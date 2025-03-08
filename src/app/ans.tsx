"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const anasImg = [
  "IMG_8041.jpg",
  "IMG_8042.jpg",
  "IMG_8043.jpg",
  "IMG_8044.jpg",
  "IMG_8045.jpg",
  "IMG_8046.jpg",

  "IMG_8042.jpg",
  "IMG_8043.jpg",
  "IMG_8044.jpg",
  "IMG_8045.jpg",
  "IMG_8046.jpg",
  "IMG_8043.jpg",
  "IMG_8044.jpg",
  "IMG_8045.jpg",
  "IMG_8046.jpg",
];

function getRandomPosition(index: number) {
  console.log("index", index);
  if (typeof window === "undefined") {
    return { left: 0, top: 0 };
  }
  // Get the element's dimensions
  const viewportWidth = 414;
  const viewportHeight = 800;

  // Generate random positions within the viewport bounds
  const randomLeft = Math.floor(Math.random() * (viewportWidth - 0) + 0);
  const randomTop = Math.floor(Math.random() * (viewportHeight - 0) + 0);
  console.log(viewportWidth, viewportHeight);
  // Return the random position as an object
  return {
    left: randomLeft,
    top: randomTop,
  };
}

const Ans = ({}) => {
  const [isClient, setIsClient] = useState(false);
  const mensaje = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      if (mensaje.current) {
        mensaje.current.style.opacity = "1";
      }
    }, 1000);
  }, []);

  if (!isClient) {
    return null;
  }

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      {anasImg.map((ana, index) => {
        const randomPosition = getRandomPosition(index);

        return (
          <Image
            key={index}
            src={`/ana/${ana}`}
            alt="Ana"
            className="ana"
            style={{
              objectFit: "cover",
              left: randomPosition.left,
              top: randomPosition.top,
            }}
            width={500}
            height={500}
          />
        );
      })}

      <div className="mensaje-container" ref={mensaje}>
        <h1 className="mensaje">
          FELIZ DIA DE LA MUJER <br />A la mujer mas Bella{" "}
        </h1>

        <Image
          src="/ana/proxy-image.jpeg"
          alt="Ana"
          className=" flor flor-1"
          width={500}
          height={500}
        />

        <Image
          src="/ana/proxy-image.png"
          alt="Ana"
          className="flor flor-2"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Ans;
