import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.linkContainer}>
                    <Link to="/" className={styles.navLinks}><b>Home</b></Link>
                    <Link to="/projects" className={styles.navLinks}><b>Projects</b></Link>
                    <Link to="/resume" className={styles.navLinks}><b>Resume</b></Link>
                    <Link to="/" className={styles.navLinks}><b>My Life</b></Link>
                    <Link to="/" className={styles.navLinks}><b>Goals</b></Link>
                </div>
            </nav>
            <div className={styles.behind}>
                <div className={styles.behindNav}>
                    <div><b>Diego Tsukayama</b></div>
                    <div><b>Testing</b></div>
                </div>
            </div>
        </>
    );
}

export default Navbar;