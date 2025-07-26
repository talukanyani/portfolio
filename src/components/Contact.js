import styles from './Contact.module.css'
import { useCopyText } from '../hooks/useCopyText';

import github_icon from '../assets/icons/github.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'
import email_icon from '../assets/icons/email.svg'
import copy_icon from '../assets/icons/copy.svg';
import out_arrow_icon from '../assets/icons/out_arrow.svg'

export default function Contact() {
  const { copy, copied } = useCopyText();

  const email = 'tmutshaeni4@outlook.com';
  const gitHubLink = 'https://github.com/talukanyani';
  const linkedInLink = 'https://www.linkedin.com/in/talukanyani/';

  const handleCopy = (event) => {
    event.stopPropagation();
    event.preventDefault();
    copy(email);
  }


  const OutArrowIcon = () => {
    return <img src={out_arrow_icon} alt='Out arrow icon' />;
  }


  return (
    <div id='contact' className={styles.contact}>
      <h2>Contact</h2>
      <p>
        If you have any query, feel free to email me.
        You can also follow me on GitHub or LinkedIn.
      </p>
      <div>
        <a href={`mailto:${email}`}>
          <div className={styles.list_tile} >
            <div>
              <img src={email_icon} alt='Email icon' />
              Email
            </div>
            <div className={styles.toast_parent}>
              <span className={styles.icon_button} onClick={handleCopy}>
                <img src={copy_icon} alt='Copy icon' />
              </span>
              {copied &&
                <span className={styles.toast} title='Copy Email'>
                  Copied!
                </span>
              }
              <OutArrowIcon />
            </div>
          </div>
        </a>
        <a target='_blank' rel='noreferrer noopener' href={gitHubLink}>
          <div className={styles.list_tile}>
            <div>
              <img src={github_icon} alt='GitHub icon' />
              GitHub
            </div>
            <OutArrowIcon />
          </div>
        </a>
        <a target='_blank' rel='noreferrer noopener' href={linkedInLink}>
          <div className={styles.list_tile} >
            <div>
              <img src={linkedin_icon} alt='LinkedIn icon' />
              LinkedIn
            </div>
            <OutArrowIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
