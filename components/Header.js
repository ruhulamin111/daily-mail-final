import styles from '../styles/Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
// import Image from 'next/image';
import { Avatar, IconButton } from '@mui/material';
import { useSession, signIn, signOut } from "next-auth/react"
import { LogoutRounded } from '@mui/icons-material';

function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.header_left}>
        <IconButton>
          <MenuIcon />
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
            alt="logo"
          />
        </IconButton>

      </div>

      <div className={styles.header_middle}>
        <SearchIcon />
        <input placeholder='Search your mail' type="text" />
        <ArrowDropDownIcon />
      </div>

      <div className={styles.header_right}>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
        <IconButton>
          <LogoutRounded onClick={() => signOut()} />
        </IconButton>
      </div>
    </div>
  )
}


export default Header