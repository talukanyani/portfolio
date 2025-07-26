import { useEffect } from 'react';
import styles from './Modal.module.css'

import closeIcon from '../assets/icons/close.svg';

export default function Modal({ title, children, isOpen, close }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])

  return (
    <div
      onClick={close}
      className={[
        styles.modal,
        isOpen ? styles.modal_visible : undefined,
      ].join(' ')}
    >
      <div
        onClick={event => event.stopPropagation()}
        className={[
          styles.content,
          isOpen ? styles.content_visible : undefined
        ].join(' ')}
      >
        <section className={styles.close_button} onClick={close}>
          <img src={closeIcon} alt='Close icon button' />
        </section>
        <section className={styles.top_bar}>
          <h1>{title}</h1>
        </section>
        <section className={styles.top_bar_space}></section>
        {children}
      </div>
    </div>
  );
}
