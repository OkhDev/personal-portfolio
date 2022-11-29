import { AnimatePresence, motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Project } from '../../constants/index'
import { InitialSetup, LoadElements } from '../../utils/variants'

const ProjectShowcaseSection = styled(motion.div)`
  ${tw`relative flex flex-col w-full h-full gap-12 md:gap-24 lg:px-12 max-w-7xl`}
`
const description = {
  name: tw`inline-flex items-center text-4xl font-header`,
  desc: tw`leading-loose text-gray`,
  techSection: tw`flex flex-wrap justify-center w-full gap-4 md:justify-start`,
  techUsed: tw`px-4 py-3 bg-white rounded-md w-max`,
}
const viewButtons = {
  buttonContainer: tw`flex items-center w-full gap-6 mt-2 text-center justify-evenly md:justify-start`,
  buttons: tw`text-purple w-max rounded-md p-3`,
}

function ProjectsShowcase(): JSX.Element {
  const refProjects = useRef(null)
  const isInViewProjects = useInView(refProjects, {
    margin: '0px 0px -150px 0px',
    once: true,
  })
  return (
    <ProjectShowcaseSection
      ref={refProjects}
      variants={InitialSetup}
      initial={!isInViewProjects && 'out'}
    >
      {Project.map((project, i) => (
        <AnimatePresence key={i}>
          <motion.div
            variants={LoadElements}
            animate={isInViewProjects ? 'in' : 'out'}
            css={[
              tw`flex flex-col w-full h-auto`,
              Math.abs(i % 2) == 1 ? tw`lg:flex-row` : tw`lg:flex-row-reverse`,
            ]}
          >
            <div
              className={`relative py-36 lg:py-0 md:min-h-max basis-1/2 overflow-clip bg-purple  ${
                Math.abs(i % 2) == 1 ? 'lg:rounded-l-xl' : 'lg:rounded-r-xl'
              }`}
            >
              <Image
                className="object-cover object-center select-none"
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
              />
            </div>
            <div
              className={`flex flex-col gap-6 px-6 py-8 md:px-12 basis-1/2 bg-offwhite ${
                Math.abs(i % 2) == 1 ? 'lg:rounded-r-xl' : 'lg:rounded-l-xl'
              }`}
            >
              <h4 css={description.name}>{project.projectName}</h4>
              <p css={description.desc}>{project.projectDescription}</p>
              <div css={description.techSection}>
                {project.technologiesUsed.map((tech, i) => (
                  <span
                    key={i}
                    css={description.techUsed}
                    className="drop-shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div css={viewButtons.buttonContainer}>
                <motion.a
                  whileHover={{ y: -6 }}
                  href={project.projectGithub}
                  target="_blank"
                  aria-label={project.ariaLabelGithub}
                  css={viewButtons.buttons}
                >
                  <FiGithub size={24} strokeWidth={2.5} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -6 }}
                  href={project.projectWebsite}
                  target="_blank"
                  aria-label={project.ariaLabelWebsite}
                  css={viewButtons.buttons}
                >
                  <FiExternalLink size={24} strokeWidth={2.5} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ))}
    </ProjectShowcaseSection>
  )
}

export default ProjectsShowcase
