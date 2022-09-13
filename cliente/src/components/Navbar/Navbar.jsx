import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
} from './Navbar.elemns';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Link to='/'>
            <img src='../../public/fofinhos.png' alt='' />
          </Link>
        </LogoContainer>

        <Menu>
          <MenuItem>
            <MenuItemLink>
              <Link to='/'>
                Home
              </Link>
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              <Link to='/'>
                Nossos Produtos
              </Link>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <Link to='novo-produto'>Novo Produto</Link>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <Link to='/contato'>Contato</Link>
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
