import { useState } from "react"
import styled from "styled-components"

const DrawerMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 16px;
  background-color: white;
  height: 100svh;
  width: 256px;
  transition: transform 300ms;
  transform: ${(props) =>
    props.menuIsOpen ? "translateX(0)" : "translateX(100%)"};
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 8px;
`;

const Item = styled.a`
  display: flex;
  color: #2e2e2e;
  gap: 32px;
`;

const Backdrop = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${(props) => (props.menuIsOpen ? "visible" : "hidden")};
`;

const Icon = styled.svg`
  width: 24px;
  color: #3c3c3c;
`;

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  if (menuIsOpen) {
    document.body.classList.add("menu-open");
  }

  if (!menuIsOpen) {
    document.body.classList.remove("menu-open");
  }

  return (
    <>
      <svg
        onClick={toggleMenu}
        className="MuiSvgIcon-root fill-white"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>

      <Backdrop
        menuIsOpen={menuIsOpen}
        onClick={menuIsOpen ? toggleMenu : ""}
      ></Backdrop>
      <DrawerMenu menuIsOpen={menuIsOpen}>
        <MenuItems>
          <Item href='#' onClick={toggleMenu}>
            <Icon class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></Icon>
            <p>Home</p>
          </Item>

          <Item href='#' onClick={toggleMenu}>
            <Icon class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></Icon>
            <p>Acessar blog</p>
          </Item>

          <Item href='#contato' onClick={toggleMenu}>
            <Icon class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></Icon>
            <p>Realizar contato</p>
          </Item>

          <Item href='#description' onClick={toggleMenu}>
            <Icon class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></Icon>
            <p>Saiba mais</p>
          </Item>

          <Item href='#' onClick={toggleMenu}>
            <Icon class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"></path></Icon>
            <p>CMS</p>
          </Item>
        </MenuItems>
      </DrawerMenu>
    </>
  );
};

export default Menu