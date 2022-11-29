import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import tw from 'twin.macro'
import { Skills, TechnologiesTitle } from '../../constants/index'
import {
  LoadElements,
  LoadTechElements,
  SingleTechElementLoad,
} from '../../utils/variants'

const techList = {
  container: tw`flex flex-wrap gap-4 md:gap-6`,
  items: tw`inline-flex items-center px-4 py-3 rounded-md bg-lightpurple w-max font-medium text-offwhite`,
}

function Technologies() {
  const refSkills = useRef(null)
  const isInViewSkills = useInView(refSkills, {
    margin: '0px 0px -150px 0px',
    once: true,
  })

  return (
    <motion.div
      ref={refSkills}
      variants={LoadTechElements}
      initial={!isInViewSkills && 'out'}
      animate={isInViewSkills ? 'in' : 'out'}
    >
      <motion.h3
        variants={LoadElements}
        className="mb-8 text-4xl text-white font-header drop-shadow-sm"
      >
        {TechnologiesTitle}
      </motion.h3>

      <ul css={techList.container}>
        {Skills.map((item, i) => (
          <AnimatePresence key={i}>
            <motion.li
              variants={SingleTechElementLoad}
              css={techList.items}
              className="drop-shadow-sm"
            >
              {item}
            </motion.li>
          </AnimatePresence>
        ))}
      </ul>
    </motion.div>
  )
}

export default Technologies
