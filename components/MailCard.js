import React, { useEffect, useState } from 'react'
import styles from '../styles/MailCard.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Checkbox } from '@mui/material';
import { Forward, Launch, MoreVert, Print, Reply, Star } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { IconButton } from '@mui/material';
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
import { useSession } from 'next-auth/react';
import { database } from '../firebaseInit/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        color: "#fff",
        marginLeft: "5px",
        fontSize: theme.typography.pxToRem(15),
        fontWeight: 400,
    },
}));

function SimpleAccordion({ key, Id, mail }) {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false)
    const [focus, setFocus] = useState(false)
    const [recipient, setRecipient] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [forward, setForward] = useState(false)
    const [sender, setSender] = useState("")
    const handleReply = () => {
        setModalOpen(true)
        setForward(false)
    }
    const handleForward = () => {
        setModalOpen(true)
        setForward(true)
    }
<<<<<<< HEAD

    // const user = useSelector(selectUser)
    console.log('mail', mail);
=======
    // console.log('mail', mail);
>>>>>>> 8ba438aaad539f69f4d74141769b973e85518bc3

    return (
        <div className={classes.root}>
            <Accordion key={mail.id}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header" >
                    <div className={styles.accordMid}>
                        <div className={styles.accordLeft}>
                            <Checkbox />
                            <Star />
                            <Typography className={styles.heading} >
                                {mail.name ? mail.name : "me"}
                            </Typography>
                        </div>
                        <div className={styles.accordMidMain}>
                            <Typography className={styles.heading} >
                                Subject
                            </Typography>
                            <p className={styles.heading}>
                                Click on here for mail details
                            </p>
                        </div>
                        <div className={styles.accordMidDate}>
                            <Typography className={styles.heading} >
                                Timestamp
                            </Typography>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={styles.accordDetails}>
                        <div className={styles.accordDetailsTop}>
                            <p>Subject</p>
                            <div className={styles.accordDetailsTopRight}>
                                <Print />
                                <Launch />
                            </div>
                        </div>
                        <div className={styles.accordDetailsInfo}>
                            <Avatar />
                            <div className={styles.senderInfo}>
                                <h4>Name of sender <span>Email</span></h4>
                                <small> Timestamp</small>
                            </div>
                            <div className={styles.senderInfoDate}>
                                <div className={styles.senderInfoDateOption}>
                                    <small>Timestamp</small>
                                    <Star />
                                    <Reply />
                                    <MoreVert />
                                </div>
                            </div>
                        </div>
                        <div className={styles.mailContent}>
                            <div className={styles.mailContentAccord}>
                                content
                            </div>
                            <ReplyMails />
                            <ForwardMails />
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
                                            <p>{forward ? 'Forward' : 'Reply'}</p>
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
                                            // value={sender}
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
                                                placeholder={forward ? 'Add content then forward' : 'Add reply to this email'}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.modalContainerBottom}>
                                        <div className={styles.modalBottom}>
                                            <button >{forward ? 'Forward' : 'Reply'}</button>
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
                            <div className={styles.mailReplyLinks}>
                                <div onClick={handleReply} className="mailReplyLink">
                                    <Reply />
                                    <a href="#">Reply</a>
                                </div>
                                <div onClick={handleForward} className={styles.mailReplyLink}>
                                    <Forward />
                                    <a href="#">Forward</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

const ReplyMails = () => {
    return <h1>Reply Mails</h1>
}
const ForwardMails = () => {
    return <h1>Forward Mails</h1>

}

export default function MailCard() {
    const [emails, setEmails] = useState([])
    const [userMails, setUserMails] = useState([])
    const [show, setShow] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        const unsub = onSnapshot(collection(database, 'emails'), (querySnapshot) => {
            const documents = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            });
            setEmails(documents);
        });
        return () => unsub();
    }, [emails])

    // useEffect(() => {
    //     if (emails.length !== 0) {
    //         emails.map((mail, index) => {
    //             if (session.user.email === mail?.to || session.user.email === mail?.from) {
    //                 setShow(true)
    //                 setUserMails(mail)
    //             }
    //         })
    //     }
    // }, [emails, session.user.email])


    return (
        <div className={styles.mailCards}>
            {
                emails.map((mail, i) =>
                    <SimpleAccordion
                        key={i}
                        mail={mail}

                    />

                )
            }

            {/* <SimpleAccordion /> */}
        </div>
    )
}

