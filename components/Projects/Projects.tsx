import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { ProjectsTitle } from '../../constants/index'
import { InitialSetup, LoadElements } from '../../utils/variants'
import ProjectsShowcase from './ProjectsShowcase'

const ProjectsSection = styled.section`
  ${tw`relative flex flex-col py-24 bg-white min-h-screen`}
`
const ProjectLayout = styled.div`
  ${tw`relative flex flex-col items-center m-auto max-w-7xl`}
`
const ProjectHeaderSection = styled(motion.div)`
  ${tw`relative flex w-full h-full pb-10 pl-6 md:pl-12 max-w-7xl`}
`
const ProjectHeader = styled(motion.h1)`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem]`}
`

function Projects(): JSX.Element {
  const refTitle = useRef(null)
  const isInViewTitle = useInView(refTitle, {
    margin: '0px 0px -150px 0px',
    once: true,
  })

  return (
    <ProjectsSection id="projects">
      <ProjectLayout>
        <ProjectHeaderSection
          ref={refTitle}
          variants={InitialSetup}
          initial={!isInViewTitle && 'out'}
          animate={isInViewTitle ? 'in' : 'out'}
        >
          <ProjectHeader className="drop-shadow-md" variants={LoadElements}>
            {ProjectsTitle}
          </ProjectHeader>
        </ProjectHeaderSection>

        <ProjectsShowcase />
      </ProjectLayout>
    </ProjectsSection>
  )
}

export default Projects
