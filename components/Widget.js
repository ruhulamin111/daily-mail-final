import Link from 'next/link'
import React from 'react'
import styles from '../styles/Widget.module.css'

function Widget() {
    return (
        <div className={styles.widget}>
            <div className={styles.widgetOptions}>
                <Link href='/calendar'>
                    <img

                        src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
                        alt="calender"
                    />
                </Link>
            </div>
            <div className={styles.widgetOptions}>
                <img

                    src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
                    alt="calender"
                />
            </div>
            <div className={styles.widgetOptions}>
                <img

                    src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
                    alt="tasks"
                />
            </div>
            <div className={styles.widgetOptions}>
                <img

                    src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
                    alt="contacts"
                />
            </div>
            <hr />
            <div className={styles.widgetOptions}>
                <img

                    src="https://www.gstatic.com/images/icons/material/system/1x/add_white_24dp.png"
                    alt="add"
                />
            </div>

        </div>
    )
}

export default Widget