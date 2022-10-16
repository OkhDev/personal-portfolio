import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'
import { InitialSetup, LoadElements } from '../../utils/variants'
import { Project } from '../../constants/index'

const ProjectShowcaseSection = styled(motion.div)`
  ${tw`relative flex flex-col w-full h-full gap-12 md:gap-24 md:px-12 max-w-7xl`}
`
const description = {
  name: tw`inline-flex items-center text-4xl font-header`,
  desc: tw`leading-loose text-flatgray`,
  techSection: tw`flex flex-wrap justify-center w-full gap-4 md:justify-start`,
  techUsed: tw`inline-flex items-center px-4 py-3 bg-white rounded-md w-max`,
}
const viewButtons = {
  buttonContainer: tw`flex items-center w-full gap-4 mt-6 text-center justify-evenly md:justify-start`,
  buttons: tw`px-4 py-3 text-white rounded-md w-max bg-flatpurple`,
}

interface IShowcase {
  refProjects: React.MutableRefObject<null>
  isInViewProjects: boolean
}

function ProjectsShowcase({
  refProjects,
  isInViewProjects,
}: IShowcase): JSX.Element {
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
              tw`flex flex-col w-full`,
              Math.abs(i % 2) == 1 ? tw`md:flex-row` : tw`md:flex-row-reverse`,
            ]}
          >
            <div
              className={`relative w-full min-h-[20vh] basis-1/2 overflow-clip  items-center justify-center flex bg-flatpurple ${
                Math.abs(i % 2) == 1 ? 'md:rounded-l-xl' : 'md:rounded-r-xl'
              }`}
            >
              <span className="text-xl text-white uppercase">Image Here</span>
              {/* <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className='object-cover w-full h-full'
							    /> */}
            </div>
            <div
              className={`flex flex-col gap-6 px-6 py-8 md:px-12 basis-1/2 bg-offwhite ${
                Math.abs(i % 2) == 1 ? 'md:rounded-r-xl' : 'md:rounded-l-xl'
              }`}
            >
              <h3 css={description.name}>{project.projectName}</h3>
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
                  href={project.projectWebsite}
                  css={viewButtons.buttons}
                  className="drop-shadow-sm"
                >
                  Live Preview
                </motion.a>
                <motion.a
                  whileHover={{ y: -6 }}
                  href={project.projectGithub}
                  css={viewButtons.buttons}
                  className="drop-shadow-sm"
                >
                  View Code
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
