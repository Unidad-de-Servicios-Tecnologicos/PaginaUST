import React from "react";
import PortaSeccions from "../../components/PortafSeccion";
import Footer from "../../components/Footer";

// type Props = {}

const fabrica = () => {
  return (
    <>
      <div
        className="flex
                  flex-col
                  bg-[#00AC00]
                  py-8
                  px-12"
      >
        <h1
          className="text-[72px]
                      text-[#025E73]
                      font-black
                      pb-4"
        >
          Fábrica de Software
        </h1>
        <h2
          className="text-[48px]
                      text-[#025E73]
                      font-black
                      pb-2"
        >
          Servicios
        </h2>
        <p
          className="text-[22px]
                    text-[#FFFFFF]
                    text-justify
                    pr-[700px]
                    "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero id ipsa
          rerum quae. Iure blanditiis cupiditate debitis accusamus, aliquam,
          laboriosam quasi quae sapiente vitae, reprehenderit unde illum eum
          facilis doloremque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolores dicta natus incidunt voluptatem, eos
          dolorem, eius, fuga quas.
        </p>
      </div>
      <PortaSeccions title="DESARROLLO DE PROTOTIPOS RÁPIDOS">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              El desarrollo de prototipos rápidos de software es una metodología
              que implica la creación rápida e iterativa de versiones
              preliminares de una aplicación o sistema. El objetivo principal es
              proporcionar a los usuarios y a los stakeholders una
              representación visual y funcional de la solución propuesta para
              recopilar retroalimentación temprana y realizar ajustes antes de
              implementación completa.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            px-8
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Desarrollo de prototipos rapidos
                </h1>
                <p
                  className="text-[22px]
                            text-[#000000]
                            text-justify
                            pr-[120px]"
                >
                  Creación rapida e interactiva de versiones preliminares de una
                  aplicación o sistema.
                </p>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $80.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>

      {/* Seccion Diseño de prototipos */}
      <PortaSeccions title="DISEÑO DE PROTOTIPOS RÁPIDOS">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              Los diseños de prototipos rápidos en software se refieren a un
              enfoque de desarrollo ágil que implica la creación rápida de
              modelos o representaciones visuales de un sistema o aplicación
              antes de su implementacion completa.
              <br />
              <br />
              Estos prototipos son versiones simplificadas y funcionales de la
              solución funcional que permiten a los desarrolladores, diseñadores
              y stakeholders obtener una vista previa tangible de3 cómo sera el
              producto final.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between 
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            -ml-[240px]
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Diseño de prototipos rápidos
                </h1>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $55.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>

      <PortaSeccions title="REVISIÓN DE CÓDIGO Y REFACTORIZACIÓN">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              Es un servicio que se enfoca en la revisión de código (Code
              Review) y la refactorización (Refactoring) teniendo como objetivo
              principal la identificación de posibles errores, mejorar la
              coherencia del código, garantizar que se sigan las mejores
              prácticas de codificación y fomentar el intercambio de
              conocimientos entre los miembros del equipo. <br />
              La revisión de código también puede inlcuir la evaluación de la
              eficiencia, seguridad y cumplimiento de los estándares de
              codificación.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between 
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            -ml-[160px]
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Revisión de código y refactorización
                </h1>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $100.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>

      <PortaSeccions title="INSTALACIÓN DE PLUGIN WORDPRESS">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              El servicio de instalación de plugins se enfoca en facilitar la
              incorporación y configuración de extensiones o complementos
              llamados "Plugins" en un sistema de software o plataforma
              especifica. Estos plugins son módulos de software que añaden
              funcionalidades adicionales a una aplicación base, permitiendo la
              personalización y ampliación de sus capacidades.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between 
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            -ml-[205px]
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Instalación de plugin Wordpress
                </h1>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $30.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>

      <PortaSeccions title="IMPLEMENTACIÓN Y DESPLIEGUE">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              El servicio de implementación y despliegue en el ámbito del
              desarrollo de software se refiere a la fase del ciclo de vida del
              desarrollo en la que se lleva a cabo la introducción y ejecución
              de la aplicación o sistema en un entorno operativo.
              <br />
              <br />
              Este proceso se ocupa de trasladar el software desde un entorno de
              desarrollo o pruebas a un entorno de producción, listo para su uso
              por parte de usuarios finales.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between 
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            -ml-[160px]
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Implementación y despliegue
                </h1>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $60.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>
      <PortaSeccions title="MANTENIMIENTO Y SOPORTE DE SOFTWARE">
        <div
          className="flex
                      flex-row
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              El mantenimiento y soporte del software se enfoca en garantizar el
              correcto funcionamiento, la seguridad, la actualización y la
              resolución de problemas continuos en una aplicación o sistema de
              software despues de su implementación inicial. Estos servicios son
              escenciales para asegurar que el software se mantenga eficiente,
              seguro y alineado con las necesidades cambiantes del usuario y del
              entorno tecnológico.
            </p>
            <div
              className="flex
                          flex-row
                          justify-between 
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pt-4
                          pb-8
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 97Icono_Servicios_Fabricadesoft.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            -ml-[145px]
                            "
              >
                <h1
                  className="text-[24px]
                            text-[#000000]
                            font-bold"
                >
                  Mantenimiento y soporte de software
                </h1>
              </div>
              <div
                className="flex
                            flex-col
                            "
              >
                <h1
                  className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                >
                  $40.000
                </h1>
                <p
                  className="text-[22px]
                            text-center"
                >
                  Valor por hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>
      <PortaSeccions title="ASESORÍA Y CONSULTORÍA">
        <div
          className="flex
                      flex-row
                      
                      "
        >
          <div
            className="w-[35%]
                        bg-[#868686]"
          ></div>
          <div
            className="w-[65%]
                        flex
                        flex-col
                        pr-[35px]
                        pl-[60px]
                        pt-[95px]
                        pb-[95px]"
          >
            <p
              className="text-[22px]
                        text-[#000000]
                        text-justify
                        px-8
                        "
            >
              El mantenimiento y soporte del software se enfoca en garantizar el
              correcto funcionamiento, la seguridad, la actualización y la
              resolución de problemas continuos en una aplicación o sistema de
              software despues de su implementación inicial. Estos servicios son
              escenciales para asegurar que el software se mantenga eficiente,
              seguro y alineado con las necesidades cambiantes del usuario y del
              entorno tecnológico.
            </p>
            <div
              className="flex
                          flex-row
                          rounded-[35px]
                          bg-[#CBCBCB]
                          pl-4
                          pr-24
                          items-center
                          mt-12
                          "
            >
              <img
                src="/src/assets/Group 96Icono_Servicios_asesoria.svg"
                alt=""
              />
              <div
                className="flex
                            flex-col
                            ml-[35px]
                            "
              >
                <div
                  className="flex
                              flex-row
                              justify-between
                              
                              mt-2"
                >
                  <h1
                    className="text-[24px]
                            text-[#000000]
                            font-bold"
                  >
                    Asesoría
                  </h1>

                  <div
                    className="flex
                            flex-col
                            pl-[500px]
                            "
                  >
                    <h1
                      className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                    >
                      $60.000
                    </h1>
                    <p
                      className="text-[22px]
                            text-center"
                    >
                      Valor por hora
                    </p>
                  </div>
                </div>
                <div
                  className="flex
                              flex-row
                              justify-between
                             
                              mt-2"
                >
                  <h1
                    className="text-[24px]
                            text-[#000000]
                            font-bold"
                  >
                    Asesoría
                  </h1>

                  <div
                    className="flex
                            flex-col
                            pl-[500px]
                            "
                  >
                    <h1
                      className="text-[32px]
                              text-[#000000]
                              font-bold
                              text-center"
                    >
                      $60.000
                    </h1>
                    <p
                      className="text-[22px]
                            text-center"
                    >
                      Valor por hora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PortaSeccions>
      <Footer />
    </>
  );
};

export default fabrica;
