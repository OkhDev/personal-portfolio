import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useLockedBody } from 'usehooks-ts'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

import { NavTitle, NavLinks, LetsTalk } from '../../constants'

const navTitleVariant = {
  close: {
    transition: {
      duration: 0.8,
    },
  },
  open: {
    color: '#fff',
    transition: {
      duration: 0.8,
    },
  },
}

const underlineVariant = {
  rest: {
    width: 0,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    width: '100%',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const appearMenuVariant = {
  close: {
    x: '100vw',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const menuIconVariant = {
  close: {
    scale: 1.6,
    x: -4,
    rotate: 0,
    stroke: '#8873EF',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  open: {
    scale: 1.6,
    x: -4,
    rotate: 180,
    stroke: '#fff',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

function Navbar(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [locked, setLocked] = useLockedBody(false)
  // const { isDarkMode, toggle } = useDarkMode()

  const handleResize = () => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 768) {
      setOpen(false)
      setLocked(false)
    }
  }

  const triggerToggle = () => {
    setOpen((prev) => !prev)
    setLocked(!locked)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 px-6 py-6 mx-auto tracking-wide bg-white select-none overflow-x-clip md:px-12">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* LEFT OF NAVBAR */}
        <motion.div whileHover={{ scale: 1.05 }} className="z-[2]">
          <Link to={NavTitle.href} spy={true} offset={-106} duration={500}>
            {NavTitle.title.map((nav, i) => (
              <motion.span
                key={i}
                variants={navTitleVariant}
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                className={`text-3xl cursor-pointer font-header ${
                  i === 1 && 'text-flatpurple'
                }`}
              >
                {NavTitle.title[i]}
              </motion.span>
            ))}
          </Link>
        </motion.div>

        {/* MIDDLE OF NAVBAR */}
        <div className="hidden gap-8 align-middle cursor-pointer lg:gap-12 md:inline-flex">
          {NavLinks.map((nav, i) => (
            <span key={i}>
              {i !== 3 && (
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative w-max"
                >
                  <Link
                    to={nav.href}
                    spy={true}
                    offset={nav.offset}
                    duration={500}
                  >
                    {nav.title}

                    <motion.span
                      variants={underlineVariant}
                      className="absolute bg-flatpurple/30 h-1 left-0 -bottom-1 -z-[1]"
                    />
                  </Link>
                </motion.div>
              )}
            </span>
          ))}
        </div>

        {/* NAVBAR MOBILE PAGE */}
        <div className="flex justify-end flex-1 md:hidden">
          <div
            className="w-max object-contain select-none z-[2]"
            onClick={() => triggerToggle()}
          >
            {/* MOBILE HAMBURGER MENU ICON */}
            <motion.svg
              variants={menuIconVariant}
              initial="close"
              animate={isOpen ? 'open' : 'close'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </motion.svg>
          </div>

          {/* MOBILE HAMBURGER MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={appearMenuVariant}
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                exit="close"
                className="flex absolute top-0 left-0 w-screen z-[1] full-screen bg-gradient-to-tr from-flatpurple to-lightpurple"
              >
                <div className="m-auto">
                  <ul className="flex flex-col items-center justify-end flex-1 gap-12 list-none select-none">
                    {NavLinks.map((nav, i) => (
                      <span key={i}>
                        {i !== 3 ? (
                          <li className="text-white cursor-pointer">
                            <Link
                              to={nav.href}
                              spy={true}
                              offset={nav.offset}
                              duration={500}
                              className="text-2xl font-medium"
                              onClick={triggerToggle}
                            >
                              {nav.title}
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <motion.a
                              href={nav.href}
                              animate={{
                                rotate: [0, 4, -4, 4, -4, 0],
                              }}
                              transition={{
                                delay: 1,
                                repeat: Infinity,
                                repeatDelay: 2,
                              }}
                              className="inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl bg-white items-center"
                            >
                              <span className="mt-[0.15rem] text-flatpurple text-2xl font-medium">
                                {nav.title}
                              </span>
                              <PaperAirplaneIcon className="stroke-flatpurple ml-3 stroke-[2.5px] w-6" />
                            </motion.a>
                          </li>
                        )}
                      </span>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT OF NAVBAR */}
        <div className="relative items-center hidden md:inline-flex">
          {/* DARK MODE TOGGLE */}
          {/* <motion.span
            initial={{ backgroundColor: '#8873EF' }}
            whileHover={{ backgroundColor: '#b097ff' }}
            onClick={toggle}
            className="absolute right-0 p-3 cursor-pointer top-20 rounded-2xl"
          >
            {isDarkMode ? (
              <MoonIcon className="w-6 stroke-[2px] fill-white" />
            ) : (
              <SunIcon className="w-6 stroke-[2px] fill-white" />
            )}
          </motion.span> */}
          <motion.a
            whileHover={{ borderColor: '#b097ff', x: 8 }}
            href={LetsTalk.href}
            className="inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-flatpurple items-center"
          >
            <span className="mt-[0.15rem]">{LetsTalk.title}</span>
            <PaperAirplaneIcon className="ml-3 w-[1.25rem] stroke-[2px]" />
          </motion.a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
