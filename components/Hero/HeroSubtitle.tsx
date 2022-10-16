import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

import { LoadHeroElements, SubtitleUnderlineHover } from '../../utils/variants'
import { Profession } from '../../constants'

const SubtitleContainer = styled(motion.div)`
  ${tw`inline-flex flex-wrap text-lg md:text-xl text-flatgray`}
`
const Subtitle = styled(motion.div)`
  ${tw`relative w-max z-[2] mb-3 md:mb-0`}
`
const Underline = styled(motion.span)`
  ${tw`absolute bottom-0 left-0 w-full h-1 bg-flatpurple/30 z-[-2]`}
`

function HeroSubtitle() {
  return (
    <SubtitleContainer variants={LoadHeroElements}>
      {Profession.map((profession, i) => (
        <span className="inline-flex" key={i}>
          <Subtitle initial="rest" whileHover="hover" animate="rest">
            <p className="text-flatgray">{profession}</p>
            <Underline variants={SubtitleUnderlineHover} />
          </Subtitle>
          {i === 0 && <span>&nbsp;&amp;&nbsp;</span>}
        </span>
      ))}
    </SubtitleContainer>
  )
}

export default HeroSubtitle
