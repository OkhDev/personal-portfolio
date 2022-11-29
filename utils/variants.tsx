// !!! NAVIGATION BAR
export const TitleMobileColorChange = {
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

export const HoverOverLinks = {
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

export const NavMobileMenu = {
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

export const NavMenuButton = {
  close: {
    scale: 1.6,
    x: -4,
    rotate: 0,
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
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

// !!! HERO SECTION
export const InitialHeroSetup = {
  in: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const LoadHeroElements = {
  out: {
    y: 40,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: '100%',
    transition: {
      duration: 0.3,
    },
  },
}

export const SubtitleUnderlineHover = {
  rest: {
    height: '0.25rem',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    height: '2rem',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

// !!! ABOUT SECTION
export const LoadTechElements = {
  in: {
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const SingleTechElementLoad = {
  out: {
    scale: 0,
  },
  in: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

// !!! ABOUT, PROJECTS, & CONTACTS SECTION
export const InitialSetup = {
  in: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const LoadElements = {
  out: {
    y: 40,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: '100%',
    transition: {
      duration: 0.3,
    },
  },
}
