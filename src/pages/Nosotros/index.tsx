// import React from "react";

// type Props = {}

const Nosotros = () => {
  const clientes = [
    {
      title: "Aprendiz",
      imgBase: "/src/assets/estrella.svg",
      img: "/src/assets/aprendiz.svg",
      text: "Principal aliado en los desarrollos de los servicios ofertados en el portafolio de la UST.",
    },
    {
      title: "Instructores",
      imgBase: "/src/assets/estrella.svg",
      img: "/src/assets/instructores.svg",
      text: "Actualización e intercambio de conocimientos.",
    },
    {
      title: "Otros Centros de Formación",
      imgBase: "/src/assets/estrella.svg",
      img: "/src/assets/centroFormacion.svg",
      text: "Prestación de servicios complementarios y ejecución de proyectos complejos.",
    },
    {
      title: "Sector Empresarial",
      imgBase: "/src/assets/estrella.svg",
      img: "/src/assets/empresarial.svg",
      text: "Sofisticación de productos y servicios, optimización y digitalización de procesos.",
    },
    {
      title: "Clientes Personas Naturales",
      imgBase: "/src/assets/estrella.svg",
      img: "/src/assets/personasNatu.svg",
      text: "Fortalecimiento de imagen corporativa, digitalización de procesos, Apalancamiento de servicios.",
    },
  ];

  const secciones = [
    {
      imgSrc: "/src/assets/Icono_Contenidos.svg",
      title: "Contenidos Digitales",
    },
    {
      imgSrc: "/src/assets/Icono_Industrias4.svg",
      title: "Industrias 4.0",
    },
    {
      imgSrc: "/src/assets/Icono_Fabrica.svg",
      title: "Fabrica de Software",
    },
  ];

  const recorridos = [
    {
      count: 140,
      title: "Servicios",
    },
    {
      count: 77,
      title: "Aprendices",
    },
    {
      count: 2500,
      title: "Aprendices Transferencias",
    },
    {
      count: 7,
      title: "Programas de Formación",
    },
  ];

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
        {secciones.map((section, index) => (
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
                src={section.imgSrc}
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
              {section.title}
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
    </>
  );
};

export default Nosotros;
