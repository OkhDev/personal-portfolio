import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

import Waves from '../Waves/Waves'
import HeroSocialButtons from './HeroSocialButtons'
import HeroSubtitle from './HeroSubtitle'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import {
  Hello,
  NameTitle,
  TitleDescription,
  ScrollDownMessage,
} from '../../constants'
import { InitialHeroSetup, LoadHeroElements } from '../../utils/variants'

const HeroMain = styled.main`
  ${tw`relative flex flex-grow bg-white`}
`
const HeroLayout = styled(motion.div)`
  ${tw`relative flex flex-col justify-center w-full px-6 mx-auto md:px-12 max-w-7xl`}
  & {
    min-height: calc(100vh - 86px);
    min-height: calc((var(--vh, 1vh) * 100) - 84px);
  }
`
const HelloText = styled(motion.p)`
  ${tw`text-2xl font-medium text-flatpurple font-body -rotate-12 w-max`}
`
const HeaderSection = styled(motion.div)`
  ${tw`relative mt-2 mb-4`}
`
const HeaderTitle = styled.h1`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] h-full`}
`
const HeaderPeriod = styled.span`
  ${tw`text-flatpurple font-header text-[3.25rem] md:text-6xl lg:text-7xl cursor-pointer`}
`
const SubtitleSection = styled(motion.div)`
  ${tw`flex mt-8 mb-10 space-x-4`}
`
const LeftDash = styled.div`
  ${tw`flex-initial w-12 mt-1`}
`
const SubtitleText = styled.p`
  ${tw`font-light leading-loose text-flatgray`}
`
const ButtonSection = styled(motion.div)`
  ${tw`flex flex-col select-none`}
`
const ScrollDown = styled(motion.div)`
  ${tw`absolute inline-flex text-sm font-light rotate-90 select-none bottom-32 md:bottom-64 -right-4 w-max text-flatgray/60 md:right-12`}
`

function Hero(): JSX.Element {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  })
  return (
    <HeroMain id="home">
      <HeroLayout variants={InitialHeroSetup} initial="out" animate="in">
        <HelloText
          animate={{
            rotate: [0, -24, 0, -12],
            scale: [1.4, 1.0],
            transition: { duration: 0.6 },
          }}
          transition={{ duration: 0.8 }}
          className="drop-shadow-sm"
        >
          {Hello}
        </HelloText>

        {/* ARIEL OKHTENBERG */}
        <HeaderSection variants={LoadHeroElements}>
          <HeaderTitle className="drop-shadow-md">
            {NameTitle}
            <HeaderPeriod>.</HeaderPeriod>
          </HeaderTitle>
        </HeaderSection>

        <HeroSubtitle />

        <SubtitleSection variants={LoadHeroElements}>
          <LeftDash>&#11834;</LeftDash>
          <SubtitleText>{TitleDescription}</SubtitleText>
        </SubtitleSection>

        <ButtonSection variants={LoadHeroElements}>
          <HeroSocialButtons />

          <ScrollDown
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
          >
            {ScrollDownMessage}{' '}
            <ArrowRightIcon className="w-4 ml-4 stroke-flatgray/60" />
          </ScrollDown>
        </ButtonSection>
      </HeroLayout>
      <Waves />
    </HeroMain>
  )
}

export default Hero
