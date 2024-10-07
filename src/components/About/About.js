import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>Byron Garcia</span>
        </h1>
      )}

      {role && <h2 className='about__role'>Software Engineer.</h2>}
      <p className='about__desc'>
        I am a dedicated engineer who thrives on contributing to a healthy and
        spositive environment. As a team player, I am committed to going above
        and beyond to support my colleagues and ensure the success of the
        company. I am a valuable asset to any team and continuously strive
        toenhance my engineering skills and knowledge.
      </p>

      <div className='about__contact center'>
        <a
          href='https://github.com/DevBGarcia'
          aria-label='github'
          className='link link--icon'
        >
          <GitHubIcon />
          Github
        </a>
        <a
          href='https://github.com/DevBGarcia'
          aria-label='github'
          className='link link--icon'
        >
          <GitHubIcon />
          Github
        </a>
        <a
          href='https://www.linkedin.com/in/byron-garcia-a25987138/'
          aria-label='linkedin'
          className='link link--icon'
        >
          <LinkedInIcon />
          Linked In
        </a>
      </div>
    </div>
  )
}

export default About
