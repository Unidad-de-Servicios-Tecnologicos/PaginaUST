// import React from "react";
import Footer from "../../components/Footer";
import { clientes, recorridos, areas, programas } from "./items";

const Nosotros = () => {
  return (
    <>
      <div
        className="bg-[#000000]
                    flex
                    flex-row
                    justify-between
                    py-24
                    "
      >
        <div
          className="w-[50%]
                      h-[600px]
                      bg-white
                      "
        ></div>
        <div
          className="w-[50%]
                      h-[600px]
                      bg-white
                      ml-20
                      mr-24"
        >
          <p
            className="bg-black
                      text-white
                      text-[22px]
                      flex
                      justify-center
                      my-32
                      pr-12
                      py-12"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            voluptatum provident atque eveniet praesentium ut! Quaerat
            voluptates dolor neque harum sed architecto odit provident, nemo
            aperiam, consequuntur similique pariatur quis. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Aliquam voluptatum provident
            atque eveniet praesentium ut! Quaerat voluptates dolor neque harum
            sed architecto odit provident, nemo aperiam, consequuntur similique
            pariatur quis.
          </p>
        </div>
      </div>
      <div
        className="bg-[#025E73]
                    flex 
                    flex-col
                    items-center
                    pt-12
                    pb-24
                    "
      >
        <h1
          className="text-[48px]
                    text-[#FFFFFF]
                    font-bold
                    pb-8
                    "
        >
          Unidad de Servicios Tecnológicos
        </h1>
        <p
          className="text-[22px]
                    text-[#FFFFFF]
                    px-[500px]"
        >
          La unidad de Servicios Tecnologicos del Centro de Servicios y Gestión
          Empresarial, es un espacio dedicado a la prestación de servicios
          soportados en tecnologías emergentes para el fortalecimiento de la
          transformación digital del pais.
        </p>
      </div>
      <div
        className="flex
                    flex-col"
      >
        <h1
          className="bg-[#FBFBE2]
                      text-[#025E73]
                      text-[48px]
                      text-center
                      font-bold
                      py-[70px]"
        >
          Nuestro Recorrido
        </h1>
        <div
          className="flex
                      flex-row
                      justify-between
                      bg-[#CBCBCB]
                      px-36
                      py-[75px]"
        >
          {recorridos.map((recorrido, index) => (
            <div
              key={index}
              className="flex
                       flex-col
                       items-center"
            >
              <h1
                className="text-[#00AC00]
                         text-[75px]
                         font-bold"
              >
                {recorrido.count}
              </h1>
              <p
                className="text-[25px]
                         text-[#000000]"
              >
                {recorrido.title}
              </p>
            </div>
          ))}
        </div>
        <h1
          className="text-[#025E73]
                      text-[48px]
                      font-bold
                      text-right
                      pr-[55px]
                      bg-[#FBFBE2]
                      py-[50px]"
        >
          2020 - 2023
        </h1>
      </div>
      <div
        className="flex
                    flex-row
                    justify-between
                    bg-[#025E73]
                    pb-[40px]"
      >
        {areas.map((area, index) => (
          <div
            key={index}
            className="flex 
                      flex-col 
                      items-center"
          >
            <div
              className="bg-[#868686]
                         py-[50px]
                         px-[110px]
                         mb-[40px]"
            >
              <img
                src={area.imgSrc}
                alt="ust"
                className="h-[330px] 
                          w-[330px]"
              />
            </div>
            <h1
              className="text-[30px]
                       text-[#FFFFFF]
                       font-bold"
            >
              {area.title}
            </h1>
          </div>
        ))}
      </div>
      <div
        className="flex
                    flex-col
                    items-center
                    pt-[15px]
                    pb-[45px]
                    bg-[#FBFBE2]"
      >
        <h1
          className="text-[48px]
                    font-bold
                    text-[#025E73]
                    pb-8
                    "
        >
          Nuestros Clientes
        </h1>
        <div
          className="flex 
                      flex-row
                      justify-center
                      px-4"
        >
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="flex 
                        flex-col 
                        items-center
                        px-4
                        "
            >
              <h1
                className="text-[#868686]
                            font-bold
                            text-center"
              >
                {cliente.title}
              </h1>
              <div className="relative">
                <img
                  src={cliente.imgBase}
                  alt="base"
                  className="relative z-0
                          py-[10px]"
                />
                <img
                  src={cliente.img}
                  alt="img"
                  className="absolute 
                          top-[25%] 
                          left-[26%] 
                          w-[50%] 
                          h-[50%] 
                          z-10"
                />
              </div>
              <p
                className="text-center
                          text-[#868686]
                          font-bold
                          px-[55px]"
              >
                {cliente.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1
        className="text-[48px]
                  text-[#FFFFFF]
                  font-bold
                  text-center
                  bg-[#025E73]
                  py-8
                  "
      >
        Compromiso con la formación
      </h1>
      <div
        className="flex
                  flex-row"
      >
        <div
          className="w-[50%]
                    bg-[#000000]
                    py-2"
        >
          <div
            className="flex
                        flex-col"
          >
            <img
              className="p-8
                        h-[470px]"
              src="/src/assets/practicasLaborales.png"
              alt="practica"
            />
            <div
              className="flex
                      flex-row
                      justify-between
                      px-8
                      pb-8
                      pt-4"
            >
              <img
                className="h-[315px]
                        w-[420px]
                        pr-2"
                src="/src/assets/transferencia1.png"
                alt="transferencia1"
              />
              <img
                className="h-[315px]
                        w-[345px]
                           "
                src="/src/assets/transferencia2.jpg"
                alt="transferencia2"
              />
            </div>
          </div>
        </div>
        <div
          className="w-[50%]
                    bg-[#CBCBCB]
                    flex
                    flex-col
                    justify-between"
        >
          <div
            className="flex
                        flex-col
                        pl-12
                        pt-12
                        pr-24"
          >
            <h1
              className="text-[32px]
                          text-start
                          pb-8
                          font-bold
                          text-[#025E73]"
            >
              Prácticas laborales Aprendices de los programas de:
            </h1>
            {programas.map((programa, index) => (
              <li
                key={index}
                className="text-[22px]
                          pl-4
                          text-[#000000]"
              >
                {programa.nombre}
              </li>
            ))}
          </div>
          <div
            className="flex
                        flex-col
                        pl-12
                        pb-[170px]
                        pr-24"
          >
            <h1
              className="text-[32px]
                          text-start
                          pb-4
                          font-bold
                          text-[#025E73]"
            >
              Transferencias de conocimiento y talleres:
            </h1>
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify"
            >
              Se facilita el espacio y equipos para la formación y se imparten
              transferencias de conocimiento y talleres para complementar el
              proceso de aprendizaje e incentivar la investigación.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#025E73]
                    py-8">
        <h1 className="text-[#FFFFFF]
                      text-center
                      text-[48px]
                      font-bold">Nuestro Equipo</h1>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
