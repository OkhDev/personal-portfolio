import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import {
  AboutDescriptionP1,
  AboutDescriptionP2,
  AboutTitle,
} from '../../constants'
import { InitialSetup, LoadElements } from '../../utils/variants'
import Certificates from './Certificates'
import Experience from './Experience'
import Technologies from './Technologies'

const AboutSection = styled.section`
  ${tw`relative flex flex-col bg-purple min-h-screen px-6 py-24 md:px-12`}
`
const AboutLayout = styled.div`
  ${tw`relative flex flex-col gap-16 m-auto max-w-7xl md:flex-row`}
`
const AboutSectionTitle = styled(motion.h1)`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8 w-full`}
`
const aboutDesc = {
  container: tw`flex mb-4 space-x-4 md:mb-8`,
  leftdash: tw`flex-initial w-12 mt-1 text-white`,
  desc: tw`flex flex-col gap-6 font-light leading-loose text-white`,
}

function About(): JSX.Element {
  const refTitle = useRef(null)
  const isInViewTitle = useInView(refTitle, {
    margin: '0px 0px -150px 0px',
    once: true,
  })

  return (
    <AboutSection id="about">
      <AboutLayout>
        <div className="flex flex-col gap-12 md:basis-1/2">
          <motion.div
            ref={refTitle}
            variants={InitialSetup}
            initial={!isInViewTitle && 'out'}
            animate={isInViewTitle ? 'in' : 'out'}
          >
            <AboutSectionTitle
              className="drop-shadow-md"
              variants={LoadElements}
            >
              {AboutTitle}
            </AboutSectionTitle>

            <motion.div variants={LoadElements} css={aboutDesc.container}>
              <p css={aboutDesc.desc}>
                <span>&emsp;{AboutDescriptionP1}</span>
                <span>&emsp;{AboutDescriptionP2}</span>
              </p>
            </motion.div>
          </motion.div>

          <Technologies />
        </div>
        <div className="flex flex-col gap-12 md:basis-1/2">
          <Experience />
          <Certificates />
        </div>
      </AboutLayout>
    </AboutSection>
  )
}

export default About
