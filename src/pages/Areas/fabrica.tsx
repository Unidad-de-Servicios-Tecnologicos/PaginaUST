import React from "react";
import Footer from "../../components/Footer";

// type Props = {}

const fabrica = () => {
  return (
    <>
      <div
        className="flex
                  flex-row
                  "
      >
        <div
          className="flex
                      flex-col
                      items-center
                      bg-[#025E73]
                      w-[47%]
                      pt-[50px]
                      pb-12"
        >
          <img
            className="h-[300px]"
            src="/src/assets/Icono_Fabrica.svg"
            alt="areaFabrica"
          />
          <h1
            className="text-[72px]
                        text-[#FFFFFF]
                        font-bold
                        px-24
                        text-center
                        pt-4"
          >
            Fábrica de Software
          </h1>
        </div>
        <div
          className="relative
                    w-[53%]
                    flex
                    items-center"
        >
          <img
            src="/src/assets/fondoAreas.svg"
            alt="fondo"
            className="w-[530px] 
                      h-auto object-cover
                      pl-[15px]
                      ml-[120px]"
          />
          <p
            className="absolute
                      text-justify
                      text-[22px]
                      pl-[80px]
                      pr-[200px]
                      "
          >
            Desarrollar soluciones de software eficientes, innovadoras y
            personalizadas que satisfagan las necesidades específicas de
            nuestros clientes, promoviendo la excelencia en la calidad, agilidad
            en el desarrollo y la mejora continua de nuestros procesos en la
            fábrica de software.
          </p>
        </div>
      </div>
      <h1
        className="text-[48px]
                    text-center
                    bg-[#868686]
                    text-[#FFFFFF]
                    font-bold
                    py-8"
      >
        Desarrollos
      </h1>
      <div
        className="flex
              justify-center
              -ml-[8px]
              -mr-[8px]
              "
      >
        <div
          className="flex
                flex-col
                w-[33%]"
        >
          <img src="" alt="" />
          <div
            className="bg-[#00AC00]
                        px-8
                        py-[20px]
          "
          >
            <h1
              className="text-[32px]
                      text-[#FFFFFF]
                      font-bold"
            >
              Desarrollo 1
            </h1>
            <p
              className="text-[22px]
                        text-[#FFFFFF]
                        text-justify
                        "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div
          className="flex
                flex-col
                w-[33%]"
        >
          <img src="" alt="" />
          <div
            className="bg-[#025E73]
                        opacity-75
                        px-8
                        py-[20px]"
          >
            <h1
              className="text-[32px]
                        text-[#FFFFFF]
                        font-bold"
            >
              Desarrollo 2
            </h1>
            <p
              className="text-[22px]
                        text-[#FFFFFF]
                        text-justify
                        "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div
          className="flex
                flex-col
                w-[33%]"
        >
          <img src="" alt="" />
          <div
            className="bg-[#025E73]
                        px-8
                        py-[20px]"
          >
            <h1
              className="text-[32px]
                        text-[#FFFFFF]
                        font-bold"
            >
              Desarrollo 3
            </h1>
            <p
              className="text-[22px]
                        text-justify
                        text-[#FFFFFF]
                        "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex
                    flex-col
                    bg-[#FFFFFF]
                    px-8
                    py-8"
      >
        <h1
          className="text-[32px]
                      text-[#000000]
                      font-bold"
        >
          Element fuacibus netus sem leo
        </h1>
        <p
          className="text-[22px]
                    text-[#868686]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Massa sem nec
          lectus.
        </p>
      </div>
      <div
        className="flex
                    flex-row"
      >
        <img src="" alt="" />
        <div
          className="flex
                    flex-col
                    bg-[#00AC00]
                    w-[50%]
                    px-8
                    py-[20px]
                    "
        >
          <h1
            className="text-[32px]
                      text-[#FFFFFF]
                      font-bold"
          >
            Lorem ipsum dolor
          </h1>
          <p
            className="text-[22px]
                      text-[#FFFFFF]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <img src="" alt="" />
        <div
          className="flex
                    flex-col
                    bg-[#025E73]
                    w-[50%]
                    px-8
                    py-[20px]
                    "
        >
          <h1
            className="text-[32px]
                      text-[#FFFFFF]
                      font-bold"
          >
            Lorem ipsum dolor
          </h1>
          <p
            className="text-[22px]
                      text-[#FFFFFF]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div
        className="px-8
                    bg-[rgba(2,94,115,0.90)]
                    py-4"
      >
        <h1
          className="text-[32px]
                      text-[#000000]
                      font-bold"
        >
          Element faucibus netus sem leo
        </h1>
        <p
          className="text-[22px]
                    text-[#868686]"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quis debitis.
        </p>
      </div>
      <img
        src="/src/assets/Default_Industry_40_digital_transformation_of_the_field_and_fa_1.jpg"
        alt="agroInd"
        className="w-full
                  h-[750px]"
      />

      <Footer />
    </>
  );
};

export default fabrica;
