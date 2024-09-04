import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainPage}>
                    <div id={styles.profile}>
                        <img src="img/profile.JPG" alt="pic" class={styles.profileImage} />
                        <div class={styles.profileInfo}>
                            <h5>Diego Tsukayama</h5>
                            <h5>23 years old</h5>
                            <h5>Japanese and South America</h5>
                            <h5>Spanish, English, Japanese, French, & Korean</h5>
                            <h5>(ltr)http://www.linkedin.com/in/diegotsukayama</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;