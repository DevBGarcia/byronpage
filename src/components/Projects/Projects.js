import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => (
  <section id='projects' className='section projects'>
    <h2 className='section__title'>Personal Project</h2>

    <div className='projects__grid'>
      <div className='project'>
        <h3>Spartan HIIT Timer (Android)</h3>

        <p className='project__description'>
          Simple mobile timer app built with react-native, meant to be used for
          interval based exercises. The app is currently in internal beta
          testing and under review by the android play store but please feel to
          check out the github repot or download the APK directly.
        </p>
        <ul className='project__stack'>
          {['TypeScript', 'React-native'].map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>

        {/* {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )} */}

        {/* {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )} */}
      </div>
    </div>
  </section>
)

export default Projects
