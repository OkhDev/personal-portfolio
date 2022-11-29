import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavLinks } from '../../constants'
import { HoverOverLinks } from '../../utils/variants'

const NavDesktop = styled.div`
  ${tw`hidden gap-8 align-middle items-center cursor-pointer lg:gap-12 md:inline-flex`}
`
const SectionLink = styled(motion.div)`
  ${tw`relative w-max`}
`
const Underline = styled(motion.span)`
  ${tw`absolute left-0 h-1 bg-purple/30 -bottom-1`}
`
const Resume = styled.a`
  ${tw`px-4 py-2 rounded-2xl bg-purple text-white`}
`

function NavbarDesktopLinks(): JSX.Element {
  return (
    <NavDesktop>
      {NavLinks.map((nav, i) => (
        <SectionLink key={i} initial="rest" whileHover="hover" animate="rest">
          <Link to={nav.href} spy={true} offset={nav.offset} duration={1000}>
            {nav.title}
            <Underline variants={HoverOverLinks} />
          </Link>
        </SectionLink>
      ))}
      <Resume href="/Okhtenberg.pdf" target="_blank">
        Resumé
      </Resume>
    </NavDesktop>
  )
}

export default NavbarDesktopLinks
