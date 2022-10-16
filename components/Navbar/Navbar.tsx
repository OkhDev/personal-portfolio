import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLockedBody } from 'usehooks-ts'
import styled from 'styled-components'
import tw from 'twin.macro'

import NavbarTitle from './NavbarTitle'
import NavbarDesktopLinks from './NavbarLinks'
import NavbarMobileMenu from './NavbarMobileMenu'
import MenuButton from './MenuButton'
import LetsTalkButton from './LetsTalkButton'

const Nav = styled.nav`
  ${tw`sticky top-0 left-0 right-0 z-40 px-6 py-6 mx-auto tracking-wide bg-white select-none overflow-clip md:px-12`}
`
const NavLayout = styled.div`
  ${tw`flex items-center justify-between w-full mx-auto max-w-7xl`}
`
const Menu = styled.div`
  ${tw`flex justify-end flex-1 md:hidden`}
`

function Navbar(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [locked, setLocked] = useLockedBody(false)

  const handleResize = () => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 768) {
      setOpen(false)
      setLocked(false)
    }
  }

  const triggerToggle = () => {
    setOpen((prev) => !prev)
    setLocked(!locked)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <Nav>
      <NavLayout>
        <NavbarTitle isOpen={isOpen} />

        <NavbarDesktopLinks />

        <Menu>
          <MenuButton isOpen={isOpen} triggerToggle={triggerToggle} />

          <AnimatePresence>
            {isOpen && (
              <NavbarMobileMenu isOpen={isOpen} triggerToggle={triggerToggle} />
            )}
          </AnimatePresence>
        </Menu>

        <LetsTalkButton />
      </NavLayout>
    </Nav>
  )
}

export default Navbar
