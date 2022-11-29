import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import styled from 'styled-components'
import tw from 'twin.macro'

import {
  ContactDescription,
  ContactEmail,
  ContactNote,
  ContactTitle,
} from '../constants/index'
import { InitialSetup, LoadElements } from '../utils/variants'

const ContactSection = styled.section`
  ${tw`relative flex flex-col pt-4 bg-purple md:pt-6`}
`
const ContactLayout = styled(motion.div)`
  ${tw`relative flex flex-col items-center w-full px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl`}
`
const ContactTitleSection = styled(motion.h1)`
  ${tw`font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8`}
`
const ContactDescSection = styled(motion.div)`
  ${tw`flex mb-8 space-x-4 md:mb-8`}
`
const ContactDesc = styled.p`
  ${tw`font-light leading-loose text-white text-center w-full md:w-2/3 mx-auto`}
`
const ContactEmailSection = styled(motion.div)`
  ${tw`flex flex-col m-auto text-center w-max md:m-0`}
`
const EmailButton = styled(motion.a)`
  ${tw`inline-flex items-center px-5 py-3 mb-4 font-bold bg-white rounded-md text-purple w-max`}
`
const EmailButtonDescSection = styled.small`
  ${tw`text-offwhite`}
`
const EmailDescBold = styled.span`
  ${tw`font-bold text-offwhite`}
`

function Contact(): JSX.Element {
  const refTitle = useRef(null)

  const isInViewTitle = useInView(refTitle, {
    margin: '0px 0px -150px 0px',
    once: true,
  })

  return (
    <ContactSection id="contact">
      <ContactLayout
        variants={InitialSetup}
        initial={!isInViewTitle && 'out'}
        animate={isInViewTitle ? 'in' : 'out'}
      >
        <ContactTitleSection
          ref={refTitle}
          variants={LoadElements}
          className="drop-shadow-md"
        >
          {ContactTitle}
        </ContactTitleSection>

        <ContactDescSection variants={LoadElements}>
          <ContactDesc>{ContactDescription}</ContactDesc>
        </ContactDescSection>

        <ContactEmailSection variants={LoadElements}>
          <EmailButton
            whileHover={{ scale: 1.05 }}
            href={ContactEmail.href}
            className="drop-shadow-sm"
          >
            <BiEnvelope size={20} className="mr-2" />
            {ContactEmail.email}
          </EmailButton>
          <EmailButtonDescSection>
            <EmailDescBold>{ContactNote[0]}</EmailDescBold>
            &nbsp;
            {ContactNote[1]}
          </EmailButtonDescSection>
        </ContactEmailSection>
      </ContactLayout>
    </ContactSection>
  )
}

export default Contact
