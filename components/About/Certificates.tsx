import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import styled from 'styled-components'
import tw from 'twin.macro'

import { CertsTitle } from '../../constants'
import { AllCerts } from '../../constants/index'
import { InitialSetup, LoadElements } from '../../utils/variants'

const CertTitle = styled(motion.h3)`
  ${tw`mb-8 text-4xl text-white font-header`}
`
const CertLink = styled(motion.a)`
  ${tw`inline-flex gap-2 p-4 rounded-md bg-lightpurple w-full lg:w-max justify-between items-center text-white`}
`

function Certificates() {
  const refCerts = useRef(null)
  const isInViewCerts = useInView(refCerts, {
    margin: '0px 0px -150px 0px',
    once: true,
  })

  return (
    <motion.div
      className="flex flex-col"
      ref={refCerts}
      variants={InitialSetup}
      initial={!isInViewCerts && 'out'}
      animate={isInViewCerts ? 'in' : 'out'}
    >
      <CertTitle variants={LoadElements} className="drop-shadow-sm">
        {CertsTitle}
      </CertTitle>
      <div className="flex flex-wrap gap-6">
        {AllCerts.map((certs, i) => {
          const { title, href } = certs
          return (
            <AnimatePresence key={i}>
              <CertLink
                variants={LoadElements}
                whileHover={{ scale: 1.05 }}
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <h4 className="inline-flex gap-2 font-medium items-center">
                  <TbCertificate size={20} />
                  {title}
                </h4>
                <MdOutlineArrowForwardIos size={18} />
              </CertLink>
            </AnimatePresence>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Certificates
