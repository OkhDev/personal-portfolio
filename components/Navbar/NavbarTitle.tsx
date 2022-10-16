import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import { NavTitle } from '../../constants'
import { TitleMobileColorChange } from '../../utils/variants'

interface ITitle {
  isOpen: boolean
}

function NavbarTitle({ isOpen }: ITitle): JSX.Element {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="z-[2]">
      <Link to={NavTitle.href} spy={true} offset={-106} duration={1000}>
        {NavTitle.title.map((nav, i) => (
          <motion.span
            key={i}
            variants={TitleMobileColorChange}
            initial="close"
            animate={isOpen ? 'open' : 'close'}
            className={`text-3xl cursor-pointer font-header  ${
              i === 1 && 'text-flatpurple'
            } ${isOpen ? 'drop-shadow-md' : 'drop-shadow-sm'}`}
          >
            {NavTitle.title[i]}
          </motion.span>
        ))}
      </Link>
    </motion.div>
  )
}

export default NavbarTitle
