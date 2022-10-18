import styles from '../styles/Sidebar.module.css'
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { Avatar, IconButton } from '@mui/material';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-modal'
import { useState } from 'react';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

function Sidebar() {
    const [modalOpen, setModalOpen] = useState(false)
    const [focus, setFocus] = useState(false)
    const [recipient, setRecipient] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [sender, setSender] = useState("")

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarOptionsTop}>
                <div
                    className={styles.sidebarOption}>
                    <img
                        onClick={() => setModalOpen(true)}
                        src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
                        alt="compose"
                    />

                    <Modal
                        isOpen={modalOpen}
                        onRequestClose={() => setModalOpen(false)}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay: {
                                width: 680,
                                height: "auto",
                                backgroundColor: "rgba(0,0,0,0.8)",
                                zIndex: "1000",
                                top: "50%",
                                left: "50%",
                                marginTop: "-250px",
                                marginLeft: "-350px",
                                borderRadius: "none"
                            },
                            content: {
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }
                        }}
                    >
                        <div className={styles.modalContainer}>
                            <div className={styles.modalContainerTop}>
                                <div className={styles.modalHeader}>
                                    <p>New Message</p>
                                    <div
                                        className={styles.modalHeaderIcons}>
                                        <IconButton onClick={() => setModalOpen(false)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <div onClick={() => setFocus(true)} className={styles.modalRecipient}>
                                    <input
                                        style={{
                                            display: "none"
                                        }}
                                        id="sender"
                                        value={sender}
                                    />
                                    <p>{focus ? "To" : "Recipients"}</p>
                                    <input
                                        id="recipient"
                                        value={recipient}
                                        onChange={(e) => setRecipient(e.target.value)}
                                        type="text"
                                    />
                                </div>
                                <div className={styles.modalRecipient}>
                                    <input
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className={styles.quill}>
                                    <ReactQuill
                                        id="content"
                                        value={content}
                                        onChange={(value) => setContent(value)}
                                        placeholder="Compose Your mail..."
                                    />
                                </div>
                            </div>
                            <div className={styles.modalContainerBottom}>
                                <div className={styles.modalBottom}>
                                    <button >Send</button>
                                    <TextFormatIcon />
                                    <AttachFileIcon />
                                    <LinkIcon />
                                    <SentimentSatisfiedAltIcon />
                                    <PhotoIcon />
                                    <ScreenLockRotationIcon />
                                    <div className={styles.modalBottomLast}>
                                        <MoreVertIcon />
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Modal>

                </div>
                <div className={styles.sidebarOptionIcon}>
                    <InboxIcon />
                </div>
                <div className={styles.sidebarOptionIcon}>
                    <StarOutlineIcon />
                </div>
                <div className={styles.sidebarOptionIcon}>
                    <WatchLaterIcon />
                </div>
                <div className={styles.sidebarOptionIcon}>
                    <SendIcon />
                </div>
                <div className={styles.sidebarOptionIcon}>
                    <InsertDriveFileIcon />
                </div>
                <div className={styles.sidebarOptionIcon}>
                    <LabelImportantIcon />
                </div>
            </div>
            <div className={styles.sidebarOptionsBottom}>
                <div className={styles.sidebarOptions}>
                    <div className={styles.sidebarOptionIcon}>
                        <img
                            src='https://www.gstatic.com/images/icons/material/system/1x/meet_white_20dp.png'
                            alt="meet"
                        />
                    </div>
                    <div className={styles.sidebarOptionIcon}>
                        <VideocamIcon />
                    </div>
                    <div className={styles.sidebarOptionIcon}>
                        <KeyboardIcon />
                    </div>
                </div>
                <div className={styles.sidebarBottomLast}>
                    <div className={styles.sidebarOptions}>
                        <div className={styles.sidebarOptionBottom}>
                            <img
                                src="https://www.gstatic.com/images/icons/material/system/1x/hangout_white_20dp.png"
                                alt='hangout'
                            />
                        </div>
                        <div style={{
                            cursor: "pointer"
                        }} className={styles.sidebarOption}>
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar