import * as React from 'react'
import * as styles from './servicingCard.module.css'
import LoanSuiteGif from '../images/loanCard/loan-suite.gif'
import CheckMark from '../images/loanCard/check-mark-icon.svg'

const ServicingCard = () => {
  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}><img src={LoanSuiteGif} alt='pie chart gif' /></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Servicing Suite</h1>
                <p>Allows you to manage the entire loan process from one system and provides a holistic view of your entire loan book.</p>
                <div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Fully customizable to any loan product</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>API enabled</div>
                    </div>
                    <div className={styles.bullet}>
                        <div className={styles.icon}><img src={CheckMark} alt='checkmark' /></div>
                        <div className={styles.text}>Powerful integrations</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default ServicingCard