import styled from 'styled-components'
import tw from 'twin.macro'

import { SocialLinks } from '../../constants'

const FooterContainer = styled.footer`
  ${tw`relative flex pt-4 md:pt-6 bg-flatpurple`}
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

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLayout>
        <LeftFooter>
          &copy; All rights reserved &middot; By Ariel Okhtenberg
        </LeftFooter>
        <RightFooter>
          {SocialLinks.map((item, i) => (
            <a
              key={i}
              target="_blank"
              href={item.href}
              className="items-center"
              rel="noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <span className="fill-white drop-shadow-sm">
                <item.icon aria-hidden="true" />
              </span>
            </a>
          ))}
        </RightFooter>
      </FooterLayout>
    </FooterContainer>
  )
}
