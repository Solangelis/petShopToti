import React from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink } from './Navbar.elemns'


const Navbar = () => {

  return (



    <Container>
      <Wrapper>

        <LogoContainer>

          <img src="../../public/fofinhos.png" alt="" />
        </LogoContainer>



        <Menu>
          <MenuItem>
            <MenuItemLink>
              <div>

                Home
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>

                Nossos Produtos
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>

                Novo Produto
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>

                Contato
              </div>
            </MenuItemLink>
          </MenuItem>
        </Menu>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
