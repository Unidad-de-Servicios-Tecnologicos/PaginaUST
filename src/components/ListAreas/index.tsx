import React, { useState } from "react";
import { areas } from "../../pages/Nosotros/items";

const Areas = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex 
                justify-center 
                items-center
                w-full
                bg-[#025E73]
                gap-x-6" // Espacio entre los elementos
    >
      {areas.map((area, index) => (
        <div
          key={index}
          className="flex 
                    flex-col 
                    items-center
                    relative"
        >
          {/* Imagen con eventos hover */}
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <div
                className="flex
                          flex-col
                          bg-[#868686]
                          drop-shadow-3xl 
                          px-12
                          pt-[125px]
                          w-[538px]
                          h-[538px]"
              >
                <h1
                  className="text-[32px]
                            text-[#FFFFFF]
                            font-bold
                            text-center
                            pb-4
                            pt-12"
                >
                  {area.title}
                </h1>
                <p
                  className="text-[22px]
                        text-justify 
                        text-[#333]"
                >
                  {area.concept}
                </p>
              </div>
            ) : (
              <img
                src={area.imgSrc}
                alt={area.title}
                className="bg-[#868686] 
                        w-[538px] 
                        h-[538px]
                        py-4
                        px-12"
              />
            )}
          </div>

          {/* Título siempre visible */}
          <h1
            className="text-center
                        text-[32px]
                        text-[#FFFFFF]
                        font-bold
                        pt-12
                        pb-12"
          >
            {area.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Areas;
