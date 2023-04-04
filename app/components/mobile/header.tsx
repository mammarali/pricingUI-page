import styles from './header.module.css'

export default function HeaderMobile() {
    return (
        <div>
            <div className={styles.header}>
                <p className={styles.headerMain}>Simple pricing for your business</p>
                <span className={styles.headerSub}>Plans that are carefully crafted to suit your business.</span>
            </div>
            <div className={styles.headerBackground}>

            </div>

        </div>
    )
}
