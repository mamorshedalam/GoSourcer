"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import MenuData from "../../data/header.json";

import NavProps from "./NavProps";
import menuImg from "../../public/images/menu-img/menu-img-2.png";

const Nav = ({ setActiveMobileMenu }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState("/");
  const [sectionStates, setSectionStates] = useState({
    Tools: true,
    Pages: true,
  });

  const toggleSection = (subTitle) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  return (
    <>
      <ul className="mainmenu">
        {MenuData &&
          MenuData.nav.map((data, index) => (
            <li
              className={`${data.dropdown
                ? "has-dropdown has-menu-child-item position-relative"
                : ""
                } ${data.megamenu ? "with-megamenu has-menu-child-item" : ""}`}
              key={index}
            >
              {data.link === "#" ? (
                <a
                  href="#"
                  className={` ${!sectionStates[data.text] ? "open" : ""}`}
                  onClick={() => toggleSection(data.text)}
                >
                  {data.text}
                  {data.isIcon ? (
                    <i className="fa-regular fa-chevron-down"></i>
                  ) : (
                    ""
                  )}
                </a>
              ) : (
                <Link
                  href={data.link}
                  onClick={() => {
                    setIsActive(data.link);
                    if (setActiveMobileMenu !== undefined) {
                      setActiveMobileMenu(true);
                    }
                  }}
                  className={isActive == data.link ? "active" : ""}
                >
                  {data.text}
                  {data.isIcon ? (
                    <i className="fa-regular fa-chevron-down"></i>
                  ) : (
                    ""
                  )}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Nav;
