import styles from './Contact.module.css'
import { useCopyText } from '../hooks/useCopyText';

import github_icon from '../assets/tech_icons/github.svg';
import linkedin_icon from '../assets/icons/linkedin.svg'
import email_icon from '../assets/icons/email.svg'
import copy_icon from '../assets/icons/copy.svg';
import done_icon from '../assets/icons/done.svg';
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
            <div>
              {copied ?
                <Tooltip text='Copied' show={copied}>
                  <span className={styles.icon_button}>
                    <img src={done_icon} alt='Done icon' />
                  </span>
                </Tooltip>
                : <Tooltip text='Copy'>
                  <span className={styles.icon_button} onClick={handleCopy}>
                    <img src={copy_icon} alt='Copy icon' />
                  </span>
                </Tooltip>
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

function Tooltip({ text, show, children }) {
  return (
    <div className={styles.tooltip_container}>
      <span className={[
        styles.tooltip_text, show ? styles.tooltip_show : null
      ].join(' ')}>
        {text}
      </span>
      {children}
    </div>
  );
};
