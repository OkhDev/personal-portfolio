import { motion } from 'framer-motion'
import { NavMenuButton } from '../../utils/variants'

interface IMenuButton {
  isOpen: boolean
  triggerToggle: () => void
}

function MenuButton({ isOpen, triggerToggle }: IMenuButton): JSX.Element {
  return (
    <div
      className="w-max object-contain select-none z-[2]"
      onClick={() => triggerToggle()}
    >
      <motion.svg
        variants={NavMenuButton}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </motion.svg>
    </div>
  )
}

export default MenuButton
