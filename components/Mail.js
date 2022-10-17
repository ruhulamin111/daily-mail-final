import React from 'react'
import styles from '../styles/Mail.module.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import MailCard from './MailCard';


function Mail() {
    return (
        <div className={styles.mail}>
            <div className={styles.mail__containerTop}>
                <div className={styles.mailTop}>
                    <CheckBoxIcon className={styles.checkbox} />
                    <ArrowDropDownIcon />
                    <RefreshIcon />
                    <MoreVertIcon />
                </div>
                <div className={styles.mailTopRight}>
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <KeyboardIcon />
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className={styles.mail__containerMid}>
                <div className={styles.mail__containerMidOptions}>
                    <div className={styles.mail__containerMidOption}>
                        <InboxIcon />
                        <h3>Primary</h3>
                    </div>
                    <div className={styles.mail__containerMidOption}>
                        <PeopleAltIcon />
                        <h3>Social</h3>
                    </div>
                    <div className={styles.mail__containerMidOption}>
                        <LocalOfferIcon />
                        <h3>Promotions</h3>
                    </div>
                    <div className={styles.mail__containerMidOption}>
                        <InfoIcon />
                        <h3>Updates</h3>
                    </div>
                    <div className={styles.mail__containerMidOption}>
                        <ForumIcon />
                        <h3>Forums</h3>
                    </div>
                </div>
            </div>
            <div className={styles.mail__containerMain}>
                <div className={styles.mail__containerMainCards}>
                    <MailCard />
                </div>
            </div>
        </div>
    )
}

export default Mail