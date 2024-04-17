import React from "react";
import discordLogo from "../assets/discord-logo-white.png";
import burgerMenu from "../assets/menu-icon.png";

function Navigation() {
  return (
    <nav>
      <a href="#">
        <img src={discordLogo} alt="discord logo white" />
      </a>
      <a href="#">
        <img src={burgerMenu} alt="burger menu icon" />
      </a>
    </nav>
  );
}

export default Navigation;
