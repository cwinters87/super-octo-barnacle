import * as React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import * as styles from './footer.module.css'
import Logo from '../images/navbar/nav-tasksuite-logo.svg'
import EmailIcon from '../images/footer/f-email.svg'
import CallIcon from '../images/footer/f-call.svg'
import HouseIcon from '../images/footer/f-house.svg'
import FacebookIcon from '../images/footer/f-facebook.svg'
import LinkedinIcon from '../images/footer/f-linkedin.svg'
import YoutubeIcon from '../images/footer/f-youtube.svg'

const Footer = () => {
  return (
    
    <Container fluid>
      <footer className={styles.footer}>
        <div className={styles.titleContainer}>
          <Link to="/" ><img src={Logo} alt="tasksuite logo" /></Link>
          <div className={styles.desc}>T<span>A</span>SKSU<span>I</span>TE is driven solely by the defined purpose to connect people by connecting businesses
            with their customers. We embrace and honor the beliefs of people before profits and that profit comes with the
            quality connections of good people.</div>
        </div>
        <div className={styles.group}>
          <div className={styles.subGroup} id={styles.contactInfo}>
              <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>Contact Info</div>
                <div className={styles.item}>
                  <div><img src={EmailIcon} alt="email icon"/></div>
                  <div className={styles.detail}>Email: <a href='mailto:info@tasksuite.com'>info@tasksuite.com</a></div>
                </div>
                <div className={styles.item}>
                  <div><img src={CallIcon} alt="phone icon"/></div>
                  <div className={styles.detail}>Call us: <a href='tel:512.900.7468'>512-900-7468</a></div>
                </div>
                <div className={styles.item}>
                  <div><img src={HouseIcon} alt="house icon"/></div>
                  <div className={styles.detail}><a href='https://goo.gl/maps/tdqF64woYZh98rD48' target="_blank" rel="noreferrer">2101 S I-35 Frontage Road<br/>Austin, Texas 78741</a></div>
                </div>
              </div>
          </div>
          <div className={styles.subGroup}>
            <div className={styles.socialsPositionContainer}>
              <div className={styles.socialsContainer}>
                <div className={styles.socialsHeader}>Connect with us</div>
                <div className={styles.socials}>
                  <a href="https://www.facebook.com/tasksuite" target="_blank" rel="noreferrer">
                    <img src={FacebookIcon} alt="facebook icon"/>
                  </a>
                  <a href="https://www.linkedin.com/company/tasksuite" target="_blank" rel="noreferrer">
                    <img src={LinkedinIcon} alt="linkedin icon"/>
                  </a>
                  <a href="https://www.youtube.com/channel/UCh5AqWUakEofWn7Y20dasNg" target="_blank" rel="noreferrer">
                    <img src={YoutubeIcon} alt="youtube icon"/>
                  </a>
                </div>
                {/* remove in Jan */}
                <Link to="/careers" className={styles.careers}><p>Careers</p></Link>
              </div>
            </div>
          </div>
        </div>

        
        
      </footer>
    </Container>
  )
}

export default Footer