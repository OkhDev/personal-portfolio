import styled from 'styled-components'
import tw from 'twin.macro'

import { FooterDesc, SocialLinks } from '../constants'

const FooterContainer = styled.footer`
  ${tw`relative flex pt-4 md:pt-6 bg-purple`}
`
const FooterLayout = styled.div`
  ${tw`relative flex flex-col items-center justify-between w-full gap-8 pt-6 pb-12 m-auto md:px-12 md:flex-row max-w-7xl`}
`
const LeftFooter = styled.div`
  ${tw`inline-flex items-center text-center text-white md:text-left`}
`
const RightFooter = styled.div`
  ${tw`inline-flex gap-12 text-white`}
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLayout>
        <LeftFooter>{FooterDesc}</LeftFooter>
        <RightFooter>
          {SocialLinks.map((item, i) => {
            const { name, href, Icon } = item
            return (
              <a
                key={i}
                target="_blank"
                href={href}
                className="items-center"
                rel="noreferrer"
              >
                <span className="sr-only">{name}</span>
                <span className="fill-white drop-shadow-sm">
                  <Icon size={24} />
                </span>
              </a>
            )
          })}
        </RightFooter>
      </FooterLayout>
    </FooterContainer>
  )
}

export default Footer
