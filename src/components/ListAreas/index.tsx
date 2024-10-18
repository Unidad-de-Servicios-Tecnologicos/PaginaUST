import React, { useState } from "react";
import { areas } from "../../pages/Nosotros/items"; // Asegúrate de ajustar la ruta

const Areas = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex 
                justify-between
                bg-[#025E73]
                "
    >
      {areas.map((area, index) => (
        <div
          key={index}
          className="flex 
                    flex-col 
                    items-center
                    relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Ocultar imagen al pasar el mouse */}
          {hoveredIndex === index ? (
            <div
              className="flex
                        flex-col
                        bg-[#868686]
                        border 
                        border-gray-300 
                        drop-shadow-2xl 
                        px-12
                        pt-[125px]
                        rounded-b
                        w-[546px]
                        h-[545px]
                        "
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
            <div>
              <img
                src={area.imgSrc}
                alt={area.title}
                className="bg-[#868686] 
                        w-[546px] 
                        h-[545px]
                        py-4
                        px-12
                        "
              />
              <h1
                className="text-center
                        text-[32px]
                        text-[#FFFFFF]
                        font-bold
                        pt-4
                        pb-4"
              >
                {area.title}
              </h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Areas;
