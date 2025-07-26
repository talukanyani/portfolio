import styles from './Project.module.css';
import { createPortal } from 'react-dom';
import { useHandlePortal } from '../hooks/useHandlePortal';
import Modal from './Modal';

export default function Project({
  title,
  description,
  tags,
  image,
  productLink,
  caseStudy,
}) {
  const [isPortal, isModal, openModal, closeModal] = useHandlePortal();

  return (
    <>
      <div className={styles.project}>
        <div>
          <section className={styles.image_frame}>
            {image}
          </section>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <section className={styles.buttons}>
            <button className={styles.filled_button}>
              <a target='_blank' rel='noreferrer' href={productLink}>
                Product
              </a>
            </button>
            <button className={styles.outlined_button} onClick={openModal}>
              <span>
                Case Study
              </span>
            </button>
          </section>
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      {isPortal && createPortal(
        <Modal title={title} isOpen={isModal} close={closeModal} >
          {caseStudy}
        </Modal>,
        document.body,
      )}
    </>
  );
}