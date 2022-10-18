import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDerBMRM93bQQKqIDBage1ZTDo3RYb1Ymw",
    authDomain: "project-daily-mail-6e7e8.firebaseapp.com",
    projectId: "project-daily-mail-6e7e8",
    storageBucket: "project-daily-mail-6e7e8.appspot.com",
    messagingSenderId: "907484935224",
    appId: "1:907484935224:web:1db7714e7d36cf8d6462cd"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);





// get email from db
// const [emails, setEmails] = useState([])
//     useEffect(() => {
//         const unsub = onSnapshot(collection(database, 'emails'), (querySnapshot) => {
//             const documents = querySnapshot.docs.map((doc) => {
//                 return {
//                     ...doc.data(),
//                     id: doc.id,
//                 }
//             });
//             setEmails(documents);
//         });
//         return () => unsub();
//     }, [emails])