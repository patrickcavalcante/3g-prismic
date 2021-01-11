import Link from "next/link";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink>
          <Link href="/">
            <a>
              <img
                src="/logo.png"
                alt="logo 3g corretora"
                width="80"
                height="50"
              />
            </a>
          </Link>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink>Cidades</NavLink>
          <NavLink>Contato</NavLink>
          <NavLink>Blog</NavLink>
          <NavBtnLink>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Header;
