import React from "react";
import Footer from "../../components/Footer";

// type Props = {}
const itmesContenidos = [
  { nombre: "Animación 3D" },
  { nombre: "Captura de movimiento" },
  { nombre: "Publicidad 2D y 3D" },
  { nombre: "Producción Audiovisual" },
  { nombre: "Producción Multimedia" },
  { nombre: "Videojuegos" },
];

const Contenidos = () => {
  return (
    <>
      <div
        className="flex
                  flex-row
                  justify-center
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
            className="h-[350px]"
            src="/src/assets/Icono_Contenidos.svg"
            alt="areaFabrica"
          />
          <h1
            className="text-[72px]
                        text-[#FFFFFF]
                        font-bold
                        px-48
                        text-center
                        pt-4"
          >
            Contenidos Digitales
          </h1>
        </div>
        <div
          className="relative
            w-[53%]
            flex
            items-center
            overflow-x-hidden"
        >
          <img
            src="/src/assets/fondoAreas.svg"
            alt="fondo"
            className="w-[520px] 
              h-auto object-cover
              pl-[150px]"
          />

          {/* Contenedor absoluto para el título y la lista */}
          <div
            className="absolute
               top-0
               left-0
               w-full
               h-full
               flex
               flex-col
               justify-center
               items-start
               pl-[180px]
               space-y-2"
          >
            <h1 className="text-[32px]
                          mb-6
                          font-bold
                          text-[#025E73]">Áreas de Trabajo</h1>

            <ul className="space-y-2">
              {itmesContenidos.map((item, index) => (
                <li key={index} className=" text-[22px]">
                  {item.nombre}
                </li>
              ))}
            </ul>
          </div>
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
              mx-auto
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
                w-[34%]"
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
      <div
        className="flex
                    flex-row
                    justify-center
                    w-full
                    "
      >
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[#025E73]"
        ></div>
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[rgba(2,94,115,0.90)]"
        ></div>
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[#025E73]"
        ></div>
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[rgba(2,94,115,0.90)]"
        ></div>
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[#025E73]"
        ></div>
        <div
          className="w-[16.75%]
                      h-[200px]
                      bg-[rgba(2,94,115,0.90)]"
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default Contenidos;
