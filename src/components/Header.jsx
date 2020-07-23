import React, { Component } from "react";
import Media from "react-media";

import NavLink from "./NavLink";
import NavLinkCollapsed from "./NavLinkCollapsed";
import logo from "../img/ginger-cat-upgrade.png";

class Header extends Component {
  state = {
    btnObject: [
      {
        id: 1,
        title: "Overview",
        isCurrentPage: false,
        url: "#overview"
      },
      {
        id: 2,
        title: "The Core",
        isCurrentPage: false,
        url: "#the-core"
      },
      {
        id: 3,
        title: "Solutions",
        isCurrentPage: false,
        url: "#solutions"
      },
      {
        id: 4,
        title: "About",
        isCurrentPage: false,
        url: "#about"
      },
      {
        id: 5,
        title: "Let's Start",
        isCurrentPage: false,
        url: "#lets-start"
      }
    ]
  };
  render() {
    const { btnObject } = this.state;
    return (
      <>
        <header>
          <div className="navLeft">
            <img className="brand-logo" src={logo} alt="brand" />
            <h3>Nyaa</h3>
          </div>
          <div className="navRight">
            <Media
              queries={{
                small: "(max-width:750px)",
                notSmall: "(min-width:751px)"
              }}
            >
              {matches => (
                <>
                  {matches.small && <NavLinkCollapsed btnArr={btnObject} />}
                  {matches.notSmall && <NavLink btnArr={btnObject} />}
                </>
              )}
            </Media>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
