import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useLockedBody } from 'usehooks-ts'

import { Link } from 'react-scroll'
import { NavTitle } from '../../constants/index'
import { NavMenuButton, TitleMobileColorChange } from '../../utils/variants'
import NavbarDesktopLinks from './NavbarLinks'
import NavbarMobileMenu from './NavbarMobileMenu'

const Nav = styled.nav`
  ${tw`fixed top-0 left-0 right-0 z-40 px-6 py-6 mx-auto tracking-wide bg-white select-none md:px-12`}
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
        <motion.div whileHover={{ scale: 1.05 }} className="z-[2]">
          <Link to={NavTitle.href} spy={true} offset={-106} duration={1000}>
            {NavTitle.title.map((nav, i) => (
              <motion.span
                key={i}
                variants={TitleMobileColorChange}
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                className={`text-3xl cursor-pointer font-header  ${
                  i === 1 && 'text-purple'
                } ${isOpen ? 'drop-shadow-md' : 'drop-shadow-sm'}`}
              >
                {NavTitle.title[i]}
              </motion.span>
            ))}
          </Link>
        </motion.div>

        <NavbarDesktopLinks />

        <Menu>
          <div
            className="w-max object-contain select-none z-[2]"
            onClick={() => triggerToggle()}
          >
            <motion.div
              variants={NavMenuButton}
              initial="close"
              animate={isOpen ? 'open' : 'close'}
            >
              <HiOutlineArrowCircleLeft
                size={24}
                style={{ stroke: isOpen ? '#fff' : '#8873EF' }}
              />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <NavbarMobileMenu isOpen={isOpen} triggerToggle={triggerToggle} />
            )}
          </AnimatePresence>
        </Menu>
      </NavLayout>
    </Nav>
  )
}

export default Navbar
