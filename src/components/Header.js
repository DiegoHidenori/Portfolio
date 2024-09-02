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
                    <Link to="/" className={styles.navLinks}><b>My Life</b></Link>
                    <Link to="/" className={styles.navLinks}><b>Goals</b></Link>
                </div>
            </nav>
            <div className={styles.testing}>
                <h1>Testing</h1>
            </div>
        </>
    );
}

export default Navbar;