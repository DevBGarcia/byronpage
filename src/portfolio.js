const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'React-Native',
  'Redux',
  'zustand',
  'Material UI',
  'Git',
  'Jest',
  'Netlify',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'devbgarcia@mail.com',
}

export { header, about, skills, contact }
