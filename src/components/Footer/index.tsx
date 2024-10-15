import React from "react";

// type Props = {}

const Footer = () => {
  return (
    <footer>
      <div
        className="bg-[#CBCBCB]
                      py-[60px]
                      px-12
                      flex
                      flex-row
                      justify-between
                      items-center"
      >
        <img
          className="w-[670px]"
          src="/src/assets/Icono_Servicios_Tecnologicos.svg"
          alt="logo"
        />
        <div className="pr-24">
          <p className="text-[22px]
                      text-[#FFFFFF]">
            Lorem ipsum dolor sit amet consectetur. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
