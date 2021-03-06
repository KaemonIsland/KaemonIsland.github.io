import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import FocusLock from 'react-focus-lock'
import { Link } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { IconLink } from './IconLink'
import { useAlternatingText } from '../hooks'
import navBackground from '../assets/images/connectwork.png'
import kaemonProfile from '../assets/images/Portrait.jpg'

const StyledNav = styled.nav`
  width: 18rem;
  height: 100vh;
  font-size: 2rem;
  color: white;
  border-right: 0.2rem solid white;
  background-image: url(${navBackground});
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-18rem')};
  transition: all 300ms ease-in;
  background-repeat: repeat;
  padding: 0.5rem 0;
  text-align: center;
  box-shadow: 6px 0 8px black;
  z-index: 500;
`
const NavContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
`
const NavProfile = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 8rem;
  margin: 0 auto;
`

const NavTitle = styled.div`
  & p {
    font-size: 1.25rem;
    font-weight: 600;
  }
  & > p:first-of-type {
    border-bottom: 0.1rem solid white;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`

const NavLink = styled.li`
  font-size: 1.5rem;
  & a {
    cursor: pointer;
    transition: all 200ms linear;
    color: white;
    text-decoration: none;
    width: 100%;
    display: inline-block;
    border-radius: 0.5rem;
    &:focus,
    &:active,
    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const MediaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
`

const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  top: 30px;
  left: 100%;
  height: 3rem;
  width: 3rem;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: white;
  border: 2px solid white;
  box-shadow: 6px 0 8px black;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms linear;
  padding: 5px;
  &:hover,
  &:active,
  &:focus {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.light};
    border 2px solid ${({ theme }) => theme.palette.primary.light}
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
`

const Background = styled.div`
  background-color: black;
  background-position: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 450;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  animation-name: ${fadeIn};
  animation-duration: 300ms;
`

const navLinks = [
  { path: '/', title: 'Home' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/about', title: 'About Me' },
  //  { path: '/character-sheet', title: 'Character Sheet' },
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [title] = useAlternatingText([
    'Logic Warlock',
    'Web Developer',
    'Front End Dev',
    'Dungeon Master',
    'React Developer',
    'Father',
    'Rails Developer',
  ])

  const openNav = () => {
    setIsOpen(true)
    disablePageScroll()
  }

  const closeNav = () => {
    setIsOpen(false)
    enablePageScroll()
  }

  return (
    <>
      <StyledNav isOpen={isOpen}>
        <FocusLock disabled={!isOpen}>
          <NavContainer id="navbar-menu" role="menu" tabIndex="0">
            <StyledLink to="/">
              <NavTitle>
                <NavProfile>
                  <img src={kaemonProfile} alt="Kaemon Lovendahl" />
                </NavProfile>
                <p>Kaemon Lovendahl</p>
                <p>{title}</p>
              </NavTitle>
            </StyledLink>

            <ul>
              {navLinks.map(({ path, title }, i) => (
                <NavLink key={i}>
                  <Link to={path} onClick={closeNav}>
                    {title}
                  </Link>
                </NavLink>
              ))}
            </ul>

            <MediaLink>
              <IconLink link="github" />
              <IconLink link="twitter" />
              <IconLink link="linkedin" />
              <IconLink link="email" />
            </MediaLink>
          </NavContainer>

          <NavButton
            onClick={isOpen ? closeNav : openNav}
            role="button"
            aria-controls="navbar-menu"
          >
            {isOpen ? <FaArrowRight /> : <FaArrowLeft />}
          </NavButton>
        </FocusLock>
      </StyledNav>
      {isOpen && <Background onClick={closeNav} />}
    </>
  )
}
