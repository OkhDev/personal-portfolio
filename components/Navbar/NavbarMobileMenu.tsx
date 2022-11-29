import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavLinks } from '../../constants'
import { NavMobileMenu } from '../../utils/variants'

const MobileMenu = styled(motion.div)`
  ${tw`flex absolute top-0 left-0 w-screen z-[1] h-screen bg-lightpurple`}
`
const MenuList = styled.ul`
  ${tw`flex flex-col items-center justify-end flex-1 gap-12 list-none select-none`}
`
const Resume = styled.a`
  ${tw`inline-flex items-center py-4 text-2xl font-bold cursor-pointer px-7 drop-shadow-sm rounded-2xl bg-purple text-white`}
`

interface IOpen {
  isOpen: boolean
  triggerToggle: () => void
}

function NavbarMobileMenu({ isOpen, triggerToggle }: IOpen): JSX.Element {
  return (
    <MobileMenu
      variants={NavMobileMenu}
      initial="close"
      animate={isOpen ? 'open' : 'close'}
      exit="close"
    >
      <div className="m-auto">
        <MenuList>
          {NavLinks.map((nav, i) => (
            <li key={i} className="cursor-pointer">
              <Link
                className="inline-flex items-center py-4 text-2xl font-bold cursor-pointer px-7 drop-shadow-sm rounded-2xl bg-white text-purple"
                to={nav.href}
                spy={true}
                offset={nav.offset}
                duration={1000}
                onClick={triggerToggle}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <Resume href="/Okhtenberg.pdf" target="_blank">
            Resumé
          </Resume>
        </MenuList>
      </div>
    </MobileMenu>
  )
}

export default NavbarMobileMenu
