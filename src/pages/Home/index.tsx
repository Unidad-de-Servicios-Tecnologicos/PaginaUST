import React from "react";

// type Props = {}

const Home = () => {
  return (
    <div>
      <div
        className="flex 
                    flex-row 
                    justify-between 
                    bg-black"
      >
        <p
          className="text-white 
                      pr-[470px]
                      pl-[45px]
                      text-justify
                      py-36
                      text-[22px]"
        >
          La Unidad de Servicios Tecnológicos del Centro de Servicios y Gestión
          Empresarial, es un espacio dedicado a la prestación de servicios
          soportados en tecnologías emergentes para el fortalecimiento de la
          transformación digital del pais.
        </p>
        <h1
          className="text-white
                        pl-96"
        >
          imagen
        </h1>
      </div>
      <div
        className="flex 
                  flex-row 
                  justify-between
                  bg-black"
      >
        <div
          className="w-[47%] 
             bg-[#868686]
             flex 
             justify-center 
             items-center"
        >
          <img
            src="/src/assets/Icono_Ust.svg"
            alt="ust"
            className="h-[420px] w-[420px]"
          />
        </div>

        <div
          className="w-[53%] 
                      bg-[#025E73]
                      pt-8
                      pl-[50px]"
        >
          <h1
            className="text-[48px] 
                        text-white
                        font-bold
                        pb-8
                        "
          >
            Sobre Nosotros
          </h1>
          <p
            className="text-justify-start
                        text-white
                        text-[22px]
                        pr-[180px]
                        pb-24"
          >
            La unidad de Servicios Tecnologicos del Centro de Servicios y
            Gestión Empresarial, es un espacio dedicado a la prestación de
            servicios soportados en tecnologías emergentes para el
            fortalecimiento de la transformación digital del pais.
          </p>
        </div>
      </div>
      <div
        className="pb-[70px] 
                  flex 
                  flex-col
                  items-center
                  pt-8
                  bg-[#FBFBE2]"
      >
        <h1
          className="text-[48px]
                    font-extrabold
                    text-[#025E73]
                    pb-8"
        >
          ¿Qué hacemos?
        </h1>
        <p
          className="text-[22px]
                      px-48
                      text-justify
                      text-[#000000]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          magnam, velit quidem suscipit numquam sapiente hic, adipisci aperiam
          doloremque beatae culpa est inventore? Excepturi iure laboriosam quas
          quia mollitia tempora. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nostrum, magnam, velit quidem suscipit numquam
          sapiente hic, adipisci aperiam doloremque beatae culpa est inventore?
          Excepturi iure laboriosam quas quia mollitia tempora.
        </p>
      </div>
      <div
        className="bg-[#025E73] 
                    flex
                    justify-center 
                    pt-[25px]"
      >
        <img src="/src/assets/Mapa de prpcesos.svg" alt="ust" />
      </div>
      <div
        className="bg-[#00AC00]
                    flex 
                    flex-row 
                    justify-between
                    justify-items-center
                    px-36
                    py-[55px]"
      >
        <div
          className="w-[50%]
                      pr-24"
        >
          <h1
            className="text-justify
                        font-bold
                        text-[#FFFFFF]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae saepe
            rem voluptates, assumenda eum, sit culpa dolorum veritatis enim non
            illo quisquam.
          </h1>
        </div>
        <div
          className="flex
                    flex-col
                    w-[50%]
                    pl-24
                    text-[22px]
                    text-[#000000]"
        >
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur. bla bla bla
          </p>
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur. bla bla bla
          </p>
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur. bla bla bla
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
