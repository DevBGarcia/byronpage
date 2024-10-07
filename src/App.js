import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.css'

const App = () => (
  <div id='top' className='light app'>
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
)

export default App
