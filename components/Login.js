import React from 'react'
import styles from '../styles/Login.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    return (
        <div>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}
