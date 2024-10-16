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
                      w-[45%]
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
          className="w-[55%]
                      flex
                      items-center"
        >
          <p
            className="text-justify
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
                    justify-between
                    "
      >
        <div
          className="flex
                      flex-col"
        >
          <img src="" alt="" />
          <h1 className="text-[32px]">Desarrollo 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        </div>
        <div
          className="flex
                      flex-col"
        >
          <img src="" alt="" />
          <div className="bg-[#00AC00]">
          <h1 className="text-[32px]
                        text-center">Desarrollo 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          </div>
        </div>
        <div
          className="flex
                      flex-col"
        >
          <img src="" alt="" />
          <h1 className="text-[32px]">Desarrollo 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default fabrica;
