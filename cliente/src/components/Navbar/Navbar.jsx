import React from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink } from './Navbar.elemns'
import {Link} from 'react-router-dom';

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
              <Link to='/'>
              <div>

                Home
              </div>
              </Link>

            </MenuItemLink>
          </MenuItem>
          
          <MenuItem>
            <MenuItemLink>
            <Link to='/'>
                <div>

                  Nossos Produtos
                </div> 

            </Link>
              
              
            </MenuItemLink>
            
              

          
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
            <Link to='/'>
                <div>
                  Novo Produto
                </div>
            
              </Link>
              
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
            <Link to='/'>
                <div>
                  Contato
                </div>

            </Link>
              
            </MenuItemLink>
          </MenuItem>
        </Menu>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
