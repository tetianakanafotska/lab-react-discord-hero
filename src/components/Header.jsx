import React from "react";
import discordBackground from "../assets/discord-background.png";

function Header() {
  return (
    <header>
      <img src={discordBackground} alt="discord background" />
      <article>
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button>Download for Mac</button>
        <button>Open Discord in your browser</button>
      </article>
    </header>
  );
}

export default Header;
