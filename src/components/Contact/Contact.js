import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

import './Contact.css'

const Contact = () => {
  const handleLinkClick = (event) => {
    event.currentTarget.blur()
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__container'>
        <a
          href='mailto:csubyrongarc@hotmail.com'
          aria-label='email'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLinkClick}
        >
          <EmailIcon />
          csubyrongarc@hotmail.com
        </a>
        <a
          href='tel:6199194569'
          aria-label='phone'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleLinkClick}
        >
          <PhoneIcon />
          6199194569
        </a>
      </div>
    </section>
  )
}

export default Contact
