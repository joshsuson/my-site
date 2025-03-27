import { useState } from "react";
import { Home, LeftArrow, User } from "../icons";
import classnames from "classnames";
import { Link } from "@tanstack/react-router";
import { NavLink } from "./NavLink";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "Suson.Codes" }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <title>{title}</title>
      <header>
        <nav className="absolute top-6 right-6 flex gap-2 items-center bg-zinc-700 rounded-full py-2 px-4">
          <button
            className={classnames(
              "bg-zinc-700 max-w-fit  transition-all ease-in-out duration-75",
              {
                "rotate-180": !isNavOpen,
              }
            )}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <LeftArrow className="size-6 " />
          </button>
          {isNavOpen && (
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  color="hover:text-rose-400"
                  text="Home"
                  icon={Home}
                />
              </li>
              <li>
                <NavLink
                  to="/about"
                  text="About"
                  color="hover:text-emerald-400"
                  icon={User}
                />
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </nav>
        <div className="pt-30">
          <p className="font-bold text-center text-zinc-500">Concord, NC</p>
          <p className="pt-4 font-black text-center uppercase text-9xl text-zinc-50">
            Josh Suson
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
