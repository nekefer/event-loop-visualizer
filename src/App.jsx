import CodePanel from './components/CodePanel'
import styles from './styles/App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>⚡</div>
        <div>
          <div className={styles.headerTitle}>Event Loop Visualizer</div>
        </div>
        <div className={styles.headerDivider} />
        <span className={styles.headerBadge}>Inspired by Loupe</span>
      </header>
      <main className={styles.main}>
        <CodePanel />
      </main>
    </div>
  )
}

export default App
