import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useProdutos } from '../../context/ProdutosProvider';
import { Link } from 'react-router-dom';
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  BuscadorContainer,
} from './Navbar.elemns';

const Navbar = () => {
  const { handleChangeResult } = useProdutos();

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Link to='/'>
            <img src='../../public/fofinhos.png' alt='' />
          </Link>
        </LogoContainer>
        <BuscadorContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              name='search'
              id='search'
              onChange={handleChangeResult}
              autoComplete='off'
              placeholder='Procure seu produto...'
            />
          </form>
        </BuscadorContainer>
        <Menu>
          <MenuItem>
            <MenuItemLink>
              <Link to='/'>Home</Link>
            </MenuItemLink>
          </MenuItem>

          <MenuItem>
            <MenuItemLink>
              <Link to='/tienda'>Nossos Produtos</Link>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <Link to='/criar-produto'>Novo Produto</Link>
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
