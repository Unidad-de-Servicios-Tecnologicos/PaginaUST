import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "../Menu/index";

export type RegularLink = {
  name: string;
  url: string;
  isDropdown?: false;
};

export type DropdownLink = {
  name: string;
  isDropdown: true;
  subLinks: { name: string; url: string }[];
};

export type LinkType = RegularLink | DropdownLink;

type Props = {
  links: LinkType[];
};

const Navbar = ({ links }: Props) => {

  return (
    <nav
      className="flex
              flex-row
              justify-between
              pl-[30px]
              pr-[85px]
              h-24 
              w-full
              items-center
              bg-[#025E73]
              "
    >
      <div className="pr-[90px]">
        <Link to="/">
          <img src="/src/assets/Icono_Servicios_Tecnologicos.svg" alt="logo" className="h-[85px] w-auto object-contain" />
        </Link>
      </div>

      {links.map((link, index) => (
        <div
          key={index}
          className="flex
                    justify-between
                    text-[22px]
                    font-medium
                    font-sans
                    text-slate-300
                    hover:text-zinc-100"
        >
          {link.isDropdown ? (
            <Menu
              buttonTitle={link.name}
              links={link.subLinks}
              closedIcon={<IoIosArrowDown />}
              openIcon={<IoIosArrowUp />}
            />
          ) : (
            <Link to={link.url}>{link.name}</Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
