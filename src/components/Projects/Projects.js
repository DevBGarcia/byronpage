import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate'
import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'

const Projects = () => {
  const handleLinkClick = (event) => {
    event.currentTarget.blur()
  }

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Personal Project</h2>

      <div className='projects__grid'>
        <div className='project'>
          <h3>Spartan HIIT Timer (Android)</h3>

          <p className='project__description'>
            Simple timer app built with react-native, meant to be used for
            interval based exercises. The app is currently in internal beta
            testing and under review by the Android play store but please feel
            free to check out the Github repo or download the APK directly.
          </p>
          <ul className='project__stack'>
            {['TypeScript', 'React-native'].map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>

          <div className='project-links-center'>
            <a
              href='https://github.com/DevBGarcia/bgnative'
              aria-label='github'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleLinkClick}
            >
              <GitHubIcon />
              Github
            </a>
            <a
              href='https://drive.google.com/file/d/1gDZxVYDwyRn_a-CX8UJcLwkpP6MdXo8q/view?usp=drive_link'
              aria-label='github'
              className='link link--icon'
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleLinkClick}
            >
              <SystemUpdateIcon />
              APK Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
