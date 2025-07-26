import styles from './Overview.module.css'
import useTypingEffect from '../hooks/useTypingEffect'

export default function Overview() {
  const chars = useTypingEffect('Software Developer');

  return (
    <div id='overview' className={styles.overview}>
      <div className={styles.content}>
        <h1>Talukanyani Mutshaeni</h1>
        <h2>
          {chars}
          <span>&#95;</span>
        </h2>
        <p>
          I'm a Software Developer and BSc Computer Science student at the University of Venda.
          I'm proficient in a variety of programming languages and frameworks,
          enabling me to create high-performing websites and cross-platform applications.
          I'm always learning, improving, and dreaming bigger.
          I enjoy turning ideas into robust and scalable software applications.
        </p>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}
