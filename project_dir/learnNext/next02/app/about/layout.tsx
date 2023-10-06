import React from 'react'
import styles from './styles.module.css'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <nav>
            <h3>About Navbar</h3>
        </nav>
        <main className={styles.main}>
            {children}
        </main>
    </>
  )
}
