import styles from '../styles/Gmail.module.css'
import Header from './Header'
import Mail from './Mail'
import Sidebar from './Sidebar'
import Widget from './Widget'

function Gmail() {
    return (
        <div className={styles.gmail}>
            <Header />
            <div className={styles.gmailOptions}>
                <Sidebar />
                <Mail />
                <Widget />
            </div>
        </div>
    )
}

export default Gmail