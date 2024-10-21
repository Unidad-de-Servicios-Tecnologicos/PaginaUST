import React from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form/index";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { MdOutlineMarkEmailRead } from "react-icons/md";

// type Props = {}

const Contacto = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
  };

  return (
    <>
      <div
        className="flex
                  flex-row"
      >
        <div
          className="flex
                    flex-col
                    items-center
                    w-[35%]
                    bg-[#00AC00]
                    px-12
                    pt-[160px]"
        >
          <h1
            className="text-[48px]
                        text-[#025E73]
                        text-center
                        font-bold"
          >
            Contáctanos
          </h1>
          <hr
            className="w-[300px]
                      border-t-4 
                      border-[#FFFFFF]
                      "
          />
          <div
            className="flex
                      flex-row
                      items-center
                      pt-8"
          >
            <div
              className="text-[#025E73]
                      text-[60px]"
            >
              <MdOutlineMarkEmailRead />
            </div>

            <h1
              className="text-[22px] 
                        text-[#FFFFFF]
                        font-medium
                        pl-[20px]"
            >
              serviciotecnologico@sena.edu.co
            </h1>
          </div>
          <Form
            buttonText="Enviar"
            onSubmit={onSubmit}
            fields={[
              {
                name: " ", 
                label: "Correo Electrónico", 
                type: "email", 
                validation: {
                  required: "Ingrese su correo electronico.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El correo electrónico no es válido.",
                  },
                },
                placeholder: "Example123@example....",
              },
            ]}
          />
        </div>
        <div className="w-[65%]">
          <img src="/src/assets/imagenContacto.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
