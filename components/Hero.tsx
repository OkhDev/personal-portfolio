import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

import Image from 'next/image'
import { Hello, NameTitle, TitleDescription } from '../constants'
import { Profession, SocialLinks } from '../constants/index'
import {
  InitialHeroSetup,
  LoadHeroElements,
  SubtitleUnderlineHover,
} from '../utils/variants'

const HeroMain = styled.main`
  ${tw`relative flex md:flex-row flex-col justify-center mx-auto bg-white min-h-screen h-full max-w-7xl mt-6 py-24 gap-12`}
`
const HeroLayout = styled(motion.div)`
  ${tw`relative flex flex-col justify-center w-full px-6 mx-auto md:px-12 max-w-7xl basis-3/5`}
`
const HelloText = styled(motion.p)`
  ${tw`text-2xl font-medium text-purple font-body w-max`}
`
const HeaderSection = styled(motion.div)`
  ${tw`relative mt-3 mb-4`}
`
const HeaderTitle = styled.h1`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] h-full`}
`
const HeaderPeriod = styled.span`
  ${tw`text-purple font-header text-[3.25rem] md:text-6xl lg:text-7xl`}
`
const SubtitleSection = styled(motion.div)`
  ${tw`flex mt-8 mb-10 space-x-4`}
`
const SubtitleContainer = styled(motion.div)`
  ${tw`inline-flex flex-wrap text-lg md:text-xl text-gray`}
`
const Subtitle = styled(motion.div)`
  ${tw`relative w-max z-[2] leading-loose`}
`
const Underline = styled(motion.span)`
  ${tw`absolute bottom-1 left-0 w-full h-1 bg-purple/30 z-[-2]`}
`
const LeftDash = styled.div`
  ${tw`flex-initial w-12 mt-1`}
`
const SubtitleText = styled.p`
  ${tw`font-normal leading-loose text-gray`}
`
const ButtonSection = styled(motion.div)`
  ${tw`flex flex-col select-none`}
`
const HeroSocialButtons = styled.div`
  ${tw`inline-flex gap-8`}
`
const ProfileImgContainer = styled(motion.div)`
  ${tw`flex justify-center md:basis-2/5 m-auto px-6`}
`

function Hero(): JSX.Element {
  return (
    <HeroMain id="home">
      <HeroLayout variants={InitialHeroSetup} initial="out" animate="in">
        <HelloText variants={LoadHeroElements}>{Hello}</HelloText>

        <HeaderSection variants={LoadHeroElements}>
          <HeaderTitle className="drop-shadow-md">
            {NameTitle}
            <HeaderPeriod>.</HeaderPeriod>
          </HeaderTitle>
        </HeaderSection>

        <SubtitleContainer variants={LoadHeroElements}>
          {Profession.map((profession, i) => (
            <span className="inline-flex" key={i}>
              <Subtitle initial="rest" whileHover="hover" animate="rest">
                <p className="text-gray">{profession}</p>
                <Underline variants={SubtitleUnderlineHover} />
              </Subtitle>
              {i === 0 && (
                <span className="inline-flex items-center">
                  &nbsp;&amp;&nbsp;
                </span>
              )}
            </span>
          ))}
        </SubtitleContainer>

        <SubtitleSection variants={LoadHeroElements}>
          <LeftDash>&#11834;</LeftDash>
          <SubtitleText>{TitleDescription}</SubtitleText>
        </SubtitleSection>

        <ButtonSection variants={LoadHeroElements}>
          <HeroSocialButtons>
            {SocialLinks.map((item, i) => {
              const { name, href, Icon } = item
              return (
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -6,
                  }}
                  key={i}
                  target="_blank"
                  href={href}
                  className="items-center drop-shadow-sm"
                >
                  <span className="sr-only">{name}</span>
                  <span className="text-purple">
                    <Icon size={28} />
                  </span>
                </motion.a>
              )
            })}
          </HeroSocialButtons>
        </ButtonSection>
      </HeroLayout>
      <ProfileImgContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="object-cover object-center bg-purple/30 rounded-xl w-64 md:w-96 drop-shadow-md ring ring-offset-4 ring-purple"
          src="/images/self.png"
          alt="image of Ariel Okhtenberg"
          width={384}
          height={481}
          priority
        />
      </ProfileImgContainer>
    </HeroMain>
  )
}

export default Hero
