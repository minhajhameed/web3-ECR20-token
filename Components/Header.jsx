import React from "react";
import { BiMenu } from "react-icons/bi";

const Header = ({ address, setAddress, connectWallet }) => {
  const menuList = [
    {
      menu: "Home",
      link: "#",
    },
    {
      menu: "Service",
      link: "#service",
    },
    {
      menu: "About",
      link: "#about",
    },
    {
      menu: "Token",
      link: "#token",
    },
    {
      menu: "Faq",
      link: "#faq",
    },
    {
      menu: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="">
      <div></div>
      <div>
        {
          address ? (
            <div>
              {""}
              {address.slice(0, 10)}...
            </div>
          ) : (
            <div onClick={() => connectWallet}>connect</div>
          )
        }
      </div>
    </div>
  );
};

export default Header;
