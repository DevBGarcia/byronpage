import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'
import './About.css'

const About = () => {
  const handleLinkClick = (event) => {
    event.currentTarget.blur()
  }

  return (
    <div className='about center'>
      <h1>
        <span className='about__name'>Byron Garcia</span>
      </h1>
      <div className='about__contact center'>
        <a
          href='https://byrongarcias3bucket.s3.us-east-2.amazonaws.com/ByronGarcia_Resume.pdf'
          aria-label='github'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLinkClick}
        >
          <DescriptionIcon />
          Resume
        </a>
        <a
          href='https://www.linkedin.com/in/byron-garcia-a25987138/'
          aria-label='linkedin'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLinkClick}
        >
          <LinkedInIcon />
          Linked In
        </a>
        <a
          href='https://github.com/DevBGarcia'
          aria-label='github'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLinkClick}
        >
          <GitHubIcon />
          Github
        </a>
      </div>
      <h2 className='about__role'>Software Engineer.</h2>
      <p className='about__desc'>
        I am a dedicated engineer who thrives on contributing to a healthy and
        positive environment. As a team player, I am committed to going above
        and beyond to support my colleagues and ensure the success of the
        company. I am a valuable asset to any team and continuously strive to
        enhance my engineering skills and knowledge.
      </p>
    </div>
  )
}

export default About
