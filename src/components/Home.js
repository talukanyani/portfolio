import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to my portfolio.</h1>
            <p>
                Use navigation bar above to switch between sections.
            </p>
        </div>
    )
}

export default Home;