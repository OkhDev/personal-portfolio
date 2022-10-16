import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
  InformationCircleIcon,
  BriefcaseIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

import {
  AboutTitle,
  TechnologiesTitle,
  ExperienceTitle,
  AboutDescription,
  Skill,
  ExperienceResume,
} from '../../constants'
import {
  InitialSetup,
  LoadElements,
  LoadTechElements,
  SingleTechElementLoad,
} from '../../utils/variants'

const AboutSection = styled.section`
  ${tw`relative flex bg-flatpurple`}
`
const AboutLayout = styled.div`
  ${tw`relative flex flex-col gap-8 px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl md:gap-16 lg:gap-24 md:flex-row`}
`
const AboutSectionTitle = styled(motion.h1)`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8 w-full`}
`
const aboutDesc = {
  container: tw`flex mb-4 space-x-4 md:mb-8`,
  leftdash: tw`flex-initial w-12 mt-1 text-white`,
  desc: tw`font-light leading-loose text-white`,
}
const techList = {
  container: tw`flex flex-wrap gap-4 md:gap-6`,
  items: tw`inline-flex items-center px-4 py-3 rounded-md bg-lightpurple w-max`,
  text: tw`mt-1 font-medium text-offwhite`,
}
const experience = {
  title: tw`mb-8 text-4xl text-white font-header`,
  container: tw`leading-loose`,
  seperator: tw`border-white border-[1px] rounded-full mb-4 w-full`,
  wholeSection: tw`flex flex-col gap-3 lg:flex-row md:gap-6`,
  job: tw`inline-flex items-center px-4 py-2 my-2 text-sm font-bold uppercase bg-white rounded-md md:my-0 md:mt-2 text-lightpurple`,
  position: tw`mb-4 text-2xl font-bold text-white`,
}

function About(): JSX.Element {
  const refTitle = useRef(null)
  const refSkills = useRef(null)
  const refExperience = useRef(null)
  const isInViewTitle = useInView(refTitle, {
    margin: '0px 0px -200px 0px',
    once: true,
  })
  const isInViewSkills = useInView(refSkills, {
    margin: '0px 0px -200px 0px',
    once: true,
  })
  const isInViewExperience = useInView(refExperience, {
    margin: '0px 0px -200px 0px',
    once: true,
  })

  return (
    <AboutSection id="about">
      <AboutLayout>
        <div className="md:basis-1/2">
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
              <div css={aboutDesc.leftdash}>&#11834;</div>
              <p css={aboutDesc.desc}>{AboutDescription}</p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={refSkills}
            variants={LoadTechElements}
            initial={!isInViewSkills && 'out'}
            animate={isInViewSkills ? 'in' : 'out'}
            className="py-8"
          >
            <motion.h3
              variants={LoadElements}
              className="mb-8 text-4xl text-white font-header drop-shadow-sm"
            >
              {TechnologiesTitle}
            </motion.h3>

            <ul css={techList.container}>
              {Skill.map((item, i) => (
                <AnimatePresence key={i}>
                  <motion.li
                    variants={SingleTechElementLoad}
                    css={techList.items}
                    className="drop-shadow-sm"
                  >
                    {/* <item.icon /> */}
                    <span css={techList.text}>{item.skill}</span>
                  </motion.li>
                </AnimatePresence>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          ref={refExperience}
          variants={InitialSetup}
          initial={!isInViewExperience && 'out'}
          animate={isInViewExperience ? 'in' : 'out'}
          className="md:basis-1/2"
        >
          <motion.h3
            variants={LoadElements}
            css={experience.title}
            className="drop-shadow-sm"
          >
            {ExperienceTitle}
          </motion.h3>
          <div className="space-y-10">
            {ExperienceResume.map((resume, i) => (
              <AnimatePresence key={i}>
                <motion.div variants={LoadElements} css={experience.container}>
                  <hr css={experience.seperator} />
                  <div css={experience.wholeSection}>
                    <div className="text-white w-max md:basis-1/3">
                      {resume.date}
                      <br />
                      <span className="drop-shadow-sm" css={experience.job}>
                        {resume.jobType}
                      </span>
                    </div>
                    <div className="md:basis-2/3">
                      <h3 css={experience.position}>{resume.positionName}</h3>

                      {resume.href !== '' ? (
                        <a
                          href={resume.href}
                          target="_blank"
                          className="inline-flex items-center w-max"
                          rel="noreferrer"
                        >
                          <span>
                            <BriefcaseIcon className="w-6 mr-2 stroke-2 stroke-white/80" />
                          </span>
                          <p className="items-center text-white/80">
                            {resume.company}
                          </p>
                          <span>
                            <LinkIcon className="w-4 ml-2 stroke-2 stroke-white/80" />
                          </span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center cursor-not-allowed w-max">
                          <span>
                            <BriefcaseIcon className="w-6 mr-2 stroke-2 stroke-white/80" />
                          </span>
                          <p className="items-center text-white/80">
                            {resume.company}
                          </p>
                        </div>
                      )}
                      <br />
                      <div className="inline-flex items-center w-max">
                        <span>
                          <InformationCircleIcon className="w-6 mr-2 stroke-2 stroke-white/80" />
                        </span>
                        <p className="items-center text-white/80">
                          {resume.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </AboutLayout>
    </AboutSection>
  )
}

export default About
