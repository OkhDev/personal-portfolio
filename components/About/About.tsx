import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

const loadSkillsVariant = {
  in: {
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadTechnologiesVariant = {
  in: {
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const technologiesVariant = {
  out: {
    scale: 0,
  },
  in: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

const elementVariant = {
  out: {
    y: 40,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: '100%',
    transition: {
      duration: 0.4,
    },
  },
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
    <section id="about" className="relative flex bg-flatpurple">
      <div className="relative flex flex-col gap-8 px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl md:gap-16 lg:gap-24 md:flex-row">
        <div className="md:basis-1/2">
          <motion.div
            ref={refTitle}
            variants={loadSkillsVariant}
            initial={!isInViewTitle && 'out'}
            animate={isInViewTitle ? 'in' : 'out'}
          >
            {/* TITLE */}
            <motion.h1
              variants={elementVariant}
              className="font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8 w-full drop-shadow-md"
            >
              {AboutTitle}
            </motion.h1>
            {/* DESCRIPTION */}
            <motion.div
              variants={elementVariant}
              className="flex mb-4 space-x-4 md:mb-8"
            >
              <div className="flex-initial w-12 mt-1 text-white">&#11834;</div>
              <p className="font-light leading-loose text-white">
                {AboutDescription}
              </p>
            </motion.div>
          </motion.div>
          {/* TECHNOLOGIES BLOCK */}
          <motion.div
            ref={refSkills}
            variants={loadTechnologiesVariant}
            initial={!isInViewSkills && 'out'}
            animate={isInViewSkills ? 'in' : 'out'}
            className="py-8"
          >
            <motion.h3
              variants={elementVariant}
              className="mb-8 text-4xl text-white font-header"
            >
              {TechnologiesTitle}
            </motion.h3>

            <ul className="flex flex-wrap gap-4 md:gap-6">
              {Skill.map((item, i) => (
                <AnimatePresence key={i}>
                  <motion.li
                    variants={technologiesVariant}
                    className="inline-flex items-center px-4 py-3 rounded-md bg-lightpurple w-max drop-shadow-sm"
                  >
                    {/* <item.icon /> */}
                    <span className="mt-1 font-medium text-offwhite">
                      {item.skill}
                    </span>
                  </motion.li>
                </AnimatePresence>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          ref={refExperience}
          variants={loadSkillsVariant}
          initial={!isInViewExperience && 'out'}
          animate={isInViewExperience ? 'in' : 'out'}
          className="md:basis-1/2"
        >
          <motion.h2
            variants={elementVariant}
            className="mb-8 text-4xl text-white font-header"
          >
            {ExperienceTitle}
          </motion.h2>
          <div className="space-y-10">
            {ExperienceResume.map((resume, i) => (
              <AnimatePresence key={i}>
                <motion.div variants={elementVariant} className="leading-loose">
                  <hr className="border-white border-[1px] rounded-full mb-4 w-full" />
                  <div className="flex flex-col gap-3 lg:flex-row md:gap-6">
                    <div className="text-white w-max md:basis-1/3">
                      {resume.date}
                      <br />
                      <span className="inline-flex items-center px-4 py-2 my-2 text-sm font-bold uppercase bg-white rounded-md md:my-0 md:mt-2 text-lightpurple drop-shadow-sm">
                        {resume.jobType}
                      </span>
                    </div>
                    <div className="md:basis-2/3">
                      <h3 className="mb-4 text-2xl font-bold text-white">
                        {resume.positionName}
                      </h3>

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
      </div>
    </section>
  )
}

export default About
