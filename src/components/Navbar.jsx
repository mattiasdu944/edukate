import { useState } from 'react';

import { Avatar, Box, Button, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { supabase } from '../backend/supabase';
import { avatarMenu, enlaces } from '../constants/constants';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {

  const [navResponsive, setNavResponsive] = useState(false);

  const cerrarSesion = async () => {
    try {
      const { error } = await supabase.auth.signOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Nav>
      <NavContainer>
        <h4>Edukate</h4>
        <NavResponsive className={navResponsive ? 'active' : ''}>
          <NavList>
            {enlaces.map((enlace, index) =>
              <li
                key={index}
              >
                <NavLink
                  onClick={() => setNavResponsive(false)}
                  to={enlace.path}>
                  {enlace.nombre}
                </NavLink>
              </li>

            )}
            <Box fontSize="1.3rem" cursor="pointer" display={{md:'none' }}>

              <i onClick={() => setNavResponsive(false)} className="uil uil-multiply"></i>
            </Box>
          </NavList>

          <form>
            <InputGroup>
              <SearchInput
                type='text'
                placeholder='Buscar un curso'
                border="none"
                outline="none"
                _focus={false}
              />
              <Button bg="indigo.100" h='1.75rem' borderRadius='0' borderRightRadius='.5rem' height="auto" _hover={{ bg: 'indigo.300' }} _active={{ bg: 'indigo.300' }} size='md' >
                <i className="uil uil-search"></i>
              </Button>
            </InputGroup>

          </form>
        </NavResponsive>

        {/* Avatar */}
        <Menu isLazy>
          <MenuButton display="flex" justifyContent="center" alignItems="center">
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </MenuButton>
          {/* Avatar Item and Menu */}
          <MenuList bg="gray.100" borderColor="gray.500">
            {avatarMenu.map((enlace, index) =>
              <MenuItem key={index} display="flex" gap=".5rem">
                <MenuLink>
                  <NavLink to={enlace.path}>
                    <i className={enlace.icon}></i>
                    {enlace.nombre}
                  </NavLink>
                </MenuLink>
              </MenuItem>
            )}
            <MenuItem
              display="flex"
              gap=".5rem"
              color="red.400"
              _active={{ bg: 'indigo.100', color: "textColor.100" }}
              onClick={() => cerrarSesion()}
            >
              <i className="uil uil-signin"></i>
              Cerrar Sesion
            </MenuItem>
          </MenuList>

        </Menu>
        <Box fontSize="1.3rem" cursor="pointer" display={{md:'none' }}>

          <i onClick={() => setNavResponsive(true)} className="uil uil-bars"></i>
        </Box>
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  background-color: rgba(0, 0, 0, .4);
  backdrop-filter: blur(60px);
  border-radius: .5rem;
  border:1px solid #000;
  box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2);
  /* background-color: #252429; */
  width: 100%;
`

const NavContainer = styled.div`
  max-width: 1090px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .75rem 0;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  & li a{
    font-weight: 500;
  }
  & li a:hover{
    color: #9b4ee3;
    /* background:white; */
    border-radius:0.2rem;
    transition: 0.2s all linear;

  }
`

const MenuLink = styled.div`
  & a{
    display: flex;
    gap: .5rem;
  }
`
const InputGroup = styled.div`
  display: flex;
`
const SearchInput = styled.input`
  background: black;
  border-radius: .5rem 0 0 .5rem;
  padding:.5rem 1rem;

  &::placeholder{
    color: #5b5b5d;
  }

`
const NavResponsive = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px){
    /* display: none; */
    background-color: rgba(0, 0, 0);
    backdrop-filter: blur(5px);
    position:fixed;
    top: -100rem;
    left:-1px;
    right:0;
    flex-direction:column-reverse;
    justify-content: center;
    align-items: center;
    row-gap:1.5rem;
    padding:20px;
    height: 100vh;
    transition:0.2s;
    text-align:center;
    /* background: #252429; */
    z-index: 1000;
    
    & ul{
      flex-direction: column;
      gap: 2.5rem;
    }

    &.active{
      top: 0;
    }
  }
`

export default Navbar