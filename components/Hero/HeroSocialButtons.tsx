import { motion } from 'framer-motion'
import { SocialLinks } from '../../constants'

function HeroSocialButtons() {
  return (
    <div className="z-10 inline-flex space-x-4">
      {SocialLinks.map((item, i) => (
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -6,
          }}
          key={i}
          target="_blank"
          href={item.href}
          className="items-center px-6 py-5 bg-flatpurple rounded-3xl drop-shadow-sm"
        >
          <span className="sr-only">{item.name}</span>
          <span className="fill-white">
            <item.icon aria-hidden="true" />
          </span>
        </motion.a>
      ))}
    </div>
  )
}

export default HeroSocialButtons
