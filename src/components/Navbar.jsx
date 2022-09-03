import { useState } from 'react';

import { Avatar, Button, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { supabase } from '../backend/supabase';
import { avatarMenu, enlaces } from '../constants/constants';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {

  const [navResponsive, setNavResponsive] = useState(true);

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
        <NavResponsive navResponsive>
          <NavList>
            {enlaces.map((enlace, index) =>
              <li
                key={index}
              >
                <NavLink
                  to={enlace.path}>
                  {enlace.nombre}
                </NavLink>
              </li>
              
            )}
              <i onClick={() => setNavResponsive(false)} className="uil uil-multiply"></i>
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
              <i className="uil uil-angle-down"></i>
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
        <i onClick={() => setNavResponsive(true)} className="uil uil-bars"></i>
        {/* <Button bg="none" _hover={{ bg: 'none' }} color="indigo.100" onClick={() => cerrarSesion()}>Cerrar Sesion</Button> */}
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  background-color: #252429;
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
    display: none;
    /* position:fixed;
    top: ${props => props.navResponsive ? 0 : 100};
    left:0;
    right:0;
    flex-direction:column-reverse;
    justify-content: center;
    align-items: center;
    row-gap:1.5rem;
    padding:20px;
    height: 100vh;
    transition:0.2s;
    text-align:center;
    background: #252429;
    z-index:100 ;
    
    & ul{
      flex-direction: column;
      gap: 3rem;
    } */
  }
`

export default Navbar