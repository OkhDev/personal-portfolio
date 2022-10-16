import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavLinks } from '../../constants'
import { HoverOverLinks } from '../../utils/variants'

const NavbarMiddle = styled.div`
  ${tw`hidden gap-8 align-middle cursor-pointer lg:gap-12 md:inline-flex`}
`
const SectionLink = styled(motion.div)`
  ${tw`relative w-max`}
`
const Underline = styled(motion.span)`
  ${tw`absolute left-0 h-1 bg-flatpurple/30 -bottom-1`}
`

function NavbarDesktopLinks(): JSX.Element {
  return (
    <NavbarMiddle>
      {NavLinks.map((nav, i) => (
        <span key={i}>
          {i !== NavLinks.length - 1 && (
            <SectionLink initial="rest" whileHover="hover" animate="rest">
              <Link
                to={nav.href}
                spy={true}
                offset={nav.offset}
                duration={1000}
              >
                {nav.title}
                <Underline variants={HoverOverLinks} />
              </Link>
            </SectionLink>
          )}
        </span>
      ))}
    </NavbarMiddle>
  )
}

export default NavbarDesktopLinks
