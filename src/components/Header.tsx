import type { ComponentType } from "react";
import { Home, User, Paper } from "../icons";
import { NavLink } from "./NavLink";
import { useLocation } from "@tanstack/react-router";
import classNames from "classnames";

type HeaderProps = {
  title?: string;
};

type NavigationLink = {
  url: string;
  text: string;
  icon: ComponentType<{ className: string }>;
};

const navigation: NavigationLink[] = [
  {
    url: "/",
    text: "Home",
    icon: Home,
  },
  {
    url: "/about",
    text: "About",
    icon: User,
  },
  {
    url: "/blog",
    text: "Blog",
    icon: Paper,
  },
];

const Header: React.FC<HeaderProps> = ({ title = "Suson.Codes" }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isHomepage = pathname === "/";
  return (
    <>
      <title>{title}</title>
      <header>
        <nav
          className={classNames(
            "flex gap-2 items-center py-3 px-4 border-b-2 border-zinc-100",
            {
              "justify-between": !isHomepage,
              "justify-center": isHomepage,
            },
          )}
        >
          {!isHomepage && (
            <p className="text-xl font-black text-center uppercase text-zinc-100">
              Josh Suson
            </p>
          )}
          <ul className="flex font-normal  text-zinc-100">
            {navigation.map((link) => (
              <li
                className="hover:font-black flex justify-center w-26"
                key={`${link.url} - ${link.text}`}
              >
                <NavLink
                  to={link.url}
                  text={link.text}
                  icon={link.icon}
                  activeProps={{
                    style: {
                      fontWeight: "900",
                    },
                  }}
                />
              </li>
            ))}
          </ul>
        </nav>
        {isHomepage && (
          <div className="pt-20">
            <p className="font-bold text-center text-zinc-300 border-2 border-zinc-300 max-w-fit mx-auto px-2 py-1">
              Concord, NC
            </p>
            <p className="pt-4 font-black text-center uppercase text-9xl text-zinc-100">
              Josh Suson
            </p>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
