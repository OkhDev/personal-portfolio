import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

import Waves from '../Waves/Waves'
import WavesFlip from '../Waves/WavesFlip'
import { ProjectsTitle } from '../../constants/index'
import { InitialSetup, LoadElements } from '../../utils/variants'
import ProjectsShowcase from './ProjectsShowcase'

const ProjectsSection = styled.section`
  ${tw`relative flex flex-grow py-24 bg-white md:py-48 lg:py-72`}
`
const ScrollTo = styled.span`
  ${tw`absolute top-0 md:top-20 lg:top-40`}
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
  const refProjects = useRef(null)

  const isInViewTitle = useInView(refTitle, {
    margin: '0px 0px -200px 0px',
    once: true,
  })
  const isInViewProjects = useInView(refProjects, {
    margin: '0px 0px -200px 0px',
    once: true,
  })

  return (
    <ProjectsSection>
      <ScrollTo id="projects"></ScrollTo>
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

        <ProjectsShowcase
          refProjects={refProjects}
          isInViewProjects={isInViewProjects}
        />
      </ProjectLayout>
      <WavesFlip />
      <Waves />
    </ProjectsSection>
  )
}

export default Projects
