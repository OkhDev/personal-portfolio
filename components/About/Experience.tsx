import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiOutlineBriefcase,
  HiOutlineInformationCircle,
  HiOutlineLink,
} from 'react-icons/hi'
import tw from 'twin.macro'
import { ExperienceResume, ExperienceTitle } from '../../constants/index'
import { InitialSetup, LoadElements } from '../../utils/variants'

const experience = {
  title: tw`mb-8 text-4xl text-white font-header`,
  container: tw`leading-loose`,
  separator: tw`border-white border-[1px] rounded-full mb-4 w-full`,
  wholeSection: tw`flex flex-col gap-3 lg:flex-row md:gap-6`,
  job: tw`inline-flex items-center px-4 py-2 my-2 text-sm font-bold uppercase bg-white rounded-md md:my-0 md:mt-2 text-lightpurple`,
  position: tw`mb-4 text-2xl font-bold text-white`,
}

function Experience() {
  const refExperience = useRef(null)
  const isInViewExperience = useInView(refExperience, {
    margin: '0px 0px -150px 0px',
    once: true,
  })
  return (
    <motion.div
      ref={refExperience}
      variants={InitialSetup}
      initial={!isInViewExperience && 'out'}
      animate={isInViewExperience ? 'in' : 'out'}
    >
      <motion.h3
        variants={LoadElements}
        css={experience.title}
        className="drop-shadow-sm"
      >
        {ExperienceTitle}
      </motion.h3>
      <div className="flex flex-col gap-12">
        {ExperienceResume.map((resume, i) => (
          <AnimatePresence key={i}>
            <motion.div variants={LoadElements} css={experience.container}>
              <hr css={experience.separator} />
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
                      <span className="text-white mr-2">
                        <HiOutlineBriefcase size={20} />
                      </span>
                      <p className="items-center text-white/80">
                        {resume.company}
                      </p>
                      <span className="text-white ml-2">
                        <HiOutlineLink />
                      </span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center cursor-not-allowed w-max">
                      <span className="text-white mr-2">
                        <HiOutlineBriefcase size={20} />
                      </span>
                      <p className="items-center text-white/80">
                        {resume.company}
                      </p>
                    </div>
                  )}
                  <br />
                  <div className="inline-flex items-center w-max">
                    <span className="text-white mr-2">
                      <HiOutlineInformationCircle size={20} />
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
  )
}

export default Experience
