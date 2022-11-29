import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa'

// !!! NAVIGATION
export const NavTitle = {
  title: ['Okhtenberg', '.'],
  href: 'home',
}

export const NavLinks = [
  {
    title: 'About',
    href: 'about',
    offset: -70,
  },
  {
    title: 'Projects',
    href: 'projects',
    offset: -50,
  },
  {
    title: 'Contact',
    href: 'contact',
    offset: 0,
  },
]

// !!! HERO
export const Hello = 'Hi, my name is'
export const NameTitle = 'Ariel Okhtenberg'
export const Profession = ['Front-end Web Developer', 'Graphic Designer']
export const TitleDescription =
  "I'm a front-end developer with a background of graphic design, specializing in building simplistic digital experiences. Throughout the last few years, I have indulged in expanding my knowledge of web technologies and designing numerous web projects."
export const SocialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arielokh/',
    Icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/OkhDev',
    Icon: FaGithub,
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/okhtenberg',
    Icon: FaDribbble,
  },
]

// !!! ABOUT
export const AboutTitle = 'About Me'
export const AboutDescriptionP1 =
  'Hello! My name is Ariel and I enjoy bridging the gap between web development and graphic design, combining my technical knowledge with my keen eye for design to produce a visually appealing product. I graduated New York University with a major in Economics and minored in Web Development and Mathematics. Throughout the last few years, I have been learning and challenging myself with different projects ranging from creating websites to logo branding for the sole purpose to fulfill personal growth and satisfaction.'
export const AboutDescriptionP2 =
  'My interest in web development started in high school while taking computer science to learn Java. Although Java and HTML are not the same, it peaked my interest to see how websites were built and thereafter, I started to read source code, dissect websites, and build my own websites using HTML, CSS, and vanilla JavaScript. On the other hand, my interest in graphic design started towards the end of middle school. At a young age, YouTube was my source of entertainment and not only was I using it to learn how to design but it also showed me the elaborate thumbnails created for each video. Soon after, I started trying to design my own thumbnails and ever since then, graphic design has been gratifying.'

export const TechnologiesTitle = 'Technologies'
export const Skills = [
  'TypeScript',
  'Next.js',
  'React',
  'NextAuth',
  'Firebase',
  'Supabase',
  'AWS',
  'Recoil',
  'Redux',
  'jQuery',
  'SQLite',
  'PostgreSQL',
  'MySQL',
  'GraphQL',
  'Prisma',
  'Jest',
  'Cypress',
  'MongoDB',
  'Node.js',
  'Express',
  'Python',
  'Flask',
]

export const ExperienceTitle = 'Experience'
export const ExperienceResume = [
  {
    date: 'Jan 2022 - Present',
    positionName: 'Front-end Web Developer & Design Manager',
    jobType: 'Full-time',
    company: 'Voxels NFT (by Voxelverse)',
    href: 'https://voxels-nft.com/',
    description: 'NFT Project Startup',
  },
  {
    date: 'Jul 2021 - Jan 2022',
    positionName: 'Jr. Front-end Software Engineer',
    jobType: 'Contract',
    company: 'Tech Hedge Incorporated',
    href: '',
    description: 'Hedge Fund Startup',
  },
  {
    date: 'Aug 2019 - Jan 2022',
    positionName: 'Graphic Designer & Data Visualization',
    jobType: 'Full-time',
    company: 'Wooter Apparel',
    href: 'https://wooterapparel.com/',
    description: 'Custom Sports Apparel Company',
  },
]

export const CertsTitle = 'Certificates'
export const AllCerts = [
  {
    title: 'Web Developer Bootcamp',
    href: 'https://www.udemy.com/certificate/UC-b1e8a73f-ea1d-40b3-829f-e3e2a1f983b4/',
  },
  {
    title: 'Modern React with Redux',
    href: 'https://www.udemy.com/certificate/UC-31075d34-3d8a-42b6-b76d-7da671c9a963/',
  },
  {
    title: 'Mastering TypeScript',
    href: 'https://www.udemy.com/certificate/UC-273222c3-20b1-4445-8d6b-9fae834073e1/',
  },
  {
    title: 'Testing Next.js Apps',
    href: 'https://www.udemy.com/certificate/UC-f5247daf-4443-415f-a9bf-32722b74b5a2/',
  },
  {
    title: 'What is Data Science?',
    href: 'https://www.coursera.org/account/accomplishments/certificate/K2CHA8DDBHUQ',
  },
  {
    title: 'Tools for Data Science',
    href: 'https://www.coursera.org/account/accomplishments/certificate/2MZCRWS8DTXW',
  },
]

// !!! PROJECTS
export const ProjectsTitle = 'Projects'
export const Project = [
  {
    projectName: 'WeeBuddy',
    projectDescription:
      'A web app made to allow users to track their pets bathroom habits. Using Firebase storage, users are able to create, read, update, and delete logs - that includes uploading images, viewing when the log was last updated, as well searching through all the logs.',
    projectWebsite: 'https://weebuddy-app.vercel.app/',
    projectGithub: 'https://github.com/OkhDev/weebuddy',
    technologiesUsed: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Recoil',
      'NextAuth',
      'Tailwind',
      'Framer Motion',
    ],
    imageSrc: '/images/weebuddy.png',
    imageAlt: 'weebuddy image',
    ariaLabelGithub: 'Visit GitHub repository to WeeBuddy',
    ariaLabelWebsite: 'Visit WeeBuddy Website',
  },
  {
    projectName: 'Ludlow43 Rebuild',
    projectDescription:
      'This website is representing an apartment building in Philadelphia. The owner of the original website challenged me to rebuild their website and to do so within ONE DAY. Their main goal was to make sure the website delivers data to the user quickly, as well as to utilize Next.js within the build. They wanted to make sure that if a user were to access a specific page, given a link, the page would use as few resources as possible. All images and website layout were given to me by the owner to use.',
    projectWebsite: 'https://ludlow43.vercel.app/',
    projectGithub: 'https://github.com/OkhDev/ludlow43',
    technologiesUsed: [
      'Next.js',
      'TypeScript',
      'Cloudinary',
      'Embla',
      'Tailwind',
      'EmailJS',
    ],
    imageSrc: '/images/ludlow43.png',
    imageAlt: 'ludlow43 image',
    ariaLabelGithub: 'Visit GitHub repository to Ludlow43 Rebuilt',
    ariaLabelWebsite: 'Visit Ludlow43 Rebuilt Website',
  },
  {
    projectName: 'Personal Portfolio',
    projectDescription:
      'This is my first iteration to the website you are currently viewing. Throughout development, I kept in mind to keep everything on a single page for easy access as well as keeping the design friendly and simple. ',
    projectWebsite: 'https://personal-portfolio-okhdev.vercel.app/',
    projectGithub: 'https://github.com/OkhDev/personal-portfolio',
    technologiesUsed: [
      'Next.js',
      'TypeScript',
      'Styled Components',
      'Tailwind',
      'Framer Motion',
    ],
    imageSrc: '/images/personal.png',
    imageAlt: 'personal portfolio image',
    ariaLabelGithub: 'Visit GitHub repository to Personal Portfolio',
    ariaLabelWebsite: 'Visit Personal Portfolio Website',
  },
]

// !!! CONTACT
export const ContactTitle = 'Contact Me'
export const ContactEmail = {
  email: 'aokhtenberg@gmail.com',
  href: 'mailto:aokhtenberg@gmail.com?subject=Hey Ariel!',
}
export const ContactDescription =
  "I'm always open for new opportunities, so please don't hesitate to email me as my inbox is always open. Whether you have a question or just want to say hi, I will do my best to get back to you!"
export const ContactNote = ['Estimated reply time:', 'within a day']

// !!! FOOTER
export const FooterDesc = 'Design & Built by Ariel Okhtenberg'
