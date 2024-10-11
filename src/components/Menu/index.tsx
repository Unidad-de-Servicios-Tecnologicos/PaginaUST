import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

type Props = {
  links: { name: string; url: string }[];
  closedIcon?: React.ReactNode;
  openIcon?: React.ReactNode;
  buttonTitle?: string;
  redirectUrl?: string;
};

const Menu = ({
  links,
  closedIcon,
  openIcon,
  buttonTitle,
  redirectUrl,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMenu = () => {
    if (redirectUrl) {
      navigate(redirectUrl);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <button
        onClick={handleMenu}
        className="flex 
              items-center 
              justify-between"
      >
        <span className="mr-2">{buttonTitle}</span>
        {closedIcon && openIcon && (
          <span>{isMenuOpen ? openIcon : closedIcon}</span>
        )}
      </button>
      {!redirectUrl && isMenuOpen && (
        <ul
          className="absolute
                    px-4
                    py-2
                    mt-[25px]
                    -ml-2
                    -mr-6
                    rounded-bl-lg
                    rounded-br-lg
                    text-xl
                    bg-gradient-to-t from-[#025E73] from-90% to-cyan-900 
                    shadow-2xl
                    text-slate-200
                    border-[#025E73]
                    "
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="text-slate-300
                        hover:text-zinc-100
                        cursor-pointer
                        mb-4"
            >
              <Link to={link.url} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
