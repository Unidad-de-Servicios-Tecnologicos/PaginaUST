import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpenDefault?: boolean;
};

const PortafSecc: React.FC<AccordionProps> = ({
  title,
  children,
  isOpenDefault = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const componentRef = React.useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(()=>{
  //   const handleClick = (event: MouseEvent)=>{
  //     if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // },[]);

  return (
    <div className="relative
                  ">
      {/* Título e ícono */}
      <div
        className="w-full 
                    flex 
                    justify-between 
                    items-center 
                    text-left 
                    py-8
                    px-12
                    text-lg 
                    bg-[#025E73]"
                    ref={componentRef}
      >
        <span
          className="text-[32px]
                    text-[#FFFFFF]
                    font-black
                    "
        >
          {title}
        </span>
        {isOpen ? (
          <IoIosArrowDown
            className="text-[60px] text-[#FFFFFF] cursor-pointer"
            onClick={toggleAccordion}
          />
        ) : (
          <IoIosArrowForward
            className="text-[60px] text-[#FFFFFF] cursor-pointer"
            onClick={toggleAccordion}
          />
        )}
      </div>

      {/* Contenido fuera del contenedor principal */}
      {isOpen && (
        <div
          className="
                    left-0 
                    mt-0 
                    w-full 
                    bg-white 
                    shadow-lg 
                    z-10
                    transition-all 
                    duration-300 
                    ease-in-out"
          style={{ top: "100%" }} // Asegura que el contenido se muestre debajo del título
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PortafSecc;
