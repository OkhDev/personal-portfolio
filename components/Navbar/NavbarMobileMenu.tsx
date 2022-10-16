import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import tw from 'twin.macro'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

import { NavLinks } from '../../constants'
import { NavMobileMenu } from '../../utils/variants'

const MobileMenu = styled(motion.div)`
  ${tw`flex absolute top-0 left-0 w-screen z-[1] h-screen bg-no-repeat bg-cover bg-center`}
  & {
    background-image: url('/images/mobile-waves.svg');
  }
`
const MenuList = styled.ul`
  ${tw`flex flex-col items-center justify-end flex-1 gap-12 list-none select-none`}
`
const MenuItems = styled(motion.span)`
  ${tw`inline-flex items-center py-4 text-2xl font-bold cursor-pointer px-7 drop-shadow-sm rounded-2xl`}
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
            <span key={i}>
              {i !== NavLinks.length - 1 ? (
                <li className="cursor-pointer">
                  <Link
                    to={nav.href}
                    spy={true}
                    offset={nav.offset}
                    duration={1000}
                    onClick={triggerToggle}
                  >
                    <MenuItems tw="text-white border-2 bg-flatpurple border-offwhite/50">
                      {nav.title}
                    </MenuItems>
                  </Link>
                </li>
              ) : (
                <li>
                  <a href={nav.href}>
                    <MenuItems
                      animate={{
                        rotate: [0, 4, -4, 4, -4, 0],
                      }}
                      transition={{
                        delay: 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="bg-offwhite text-flatpurple"
                    >
                      {nav.title}
                      <PaperAirplaneIcon className="stroke-flatpurple ml-3 stroke-[2.5px] w-6" />
                    </MenuItems>
                  </a>
                </li>
              )}
            </span>
          ))}
        </MenuList>
      </div>
    </MobileMenu>
  )
}

export default NavbarMobileMenu
