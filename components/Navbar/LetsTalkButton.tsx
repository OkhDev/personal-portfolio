import { motion } from 'framer-motion'
import { LetsTalk } from '../../constants'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

function LetsTalkButton() {
  return (
    <div className="relative items-center hidden md:inline-flex">
      <motion.a
        whileHover={{ borderColor: '#b097ff', x: 8 }}
        href={LetsTalk.href}
        className="inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-flatpurple items-center"
      >
        <span className="mt-[0.15rem]">{LetsTalk.title}</span>
        <PaperAirplaneIcon className="ml-3 w-[1.25rem] stroke-[2px]" />
      </motion.a>
    </div>
  )
}

export default LetsTalkButton
