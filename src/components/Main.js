import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <>
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
            <div class={styles.resume}>
                <p>
                    I am a current student at George Brown College studying in the field of Computer 
                    Programming since January 2023, and I've transferred from York University. I’m naturally a 
                    very analytical and logical person and I tend to focus on singular tasks with a great amount 
                    of focus until the goal has been accomplished. I enjoy environments where I have to 
                    communicate with great individuals, offering them a product, and having a great interaction 
                    overall. I am seeking a workplace in which I can apply and improve my skills where I will be 
                    working with a team focused on a single goal in mind.
                </p>
                <div>
                    <div class={styles.qualifications}>
                        <ul>
                            <li>Made a project using ASP.NET Core and BootStrap</li>
                            <li>Used Microsoft Excel for visuals for search and sorting algorithms, as well as hash 
                                tables. Also used Excel for personal accounting and schedule plannin</li>
                            <li>Customer service skills as a server at a restaurant</li>
                            <li>Communication Skills (Spanish, English, Japanese, Korean, and French)</li>
                            <li></li>
                        </ul>
                    </div>
                    <div class={styles.skills}>
                        <ul>
                            <li>Basic Languages: HTML, CSS, C#, Python, Java, & JavaScript</li>
                            <li>Experience in MySQL queries</li>
                            <li>Experience with React, BootStrap, ASP.NET Core, & Data APIs</li>
                            <li>Usage of Microsoft Excel for account management and data visuals</li>
                            <li>Proficient in Microsoft Office applications (Excel, Word, PowerPoint, Outlook, etc.)</li>
                        </ul>
                    </div>
                    <div class={styles.education}>
                        <p>
                            Computer Programming & Analysis, Advanced Diploma 
                            George Brown College, Toronto, ON Jan 2023 – April 2025
                            • HTML, CSS, JavaScript, C#, PHP, Java, & Python Languages
                            • ASP.NET Core framework
                            • Data Structures & Algorithms
                            • React, BootStrap & other libraries
                            Chemistry, Bachelor’s Degree
                            York University, Toronto, ON Jan 2021 – December 2022
                            • Organic & Inorganic Chemistry
                            • Analytical Chemistry
                            • Calculus
                            STEM Path, High School Diploma
                            Cinco Ranch High School, Katy, Texas August 2016 – June 2019
                            • Science, Technology, Engineering, & Mathematics
                            • Chemistry & Calculus
                            • AutoCAD 3D Object Model & Printing
                            STEM Path, High School Diploma
                            Stratford High School, Houston, Texas August 2015 – June 2016
                            • Science, Technology, Engineering, & Mathematics
                        </p>
                    </div>
                    <div class={styles.experience}>
                        <p>
                            Server
                            Midori Ramen, Toronto, ON March 2023 – Present
                            • Experience in communicating with customers and taking their orders
                            • Helped maintain the structure that has been set up by the manager
                        </p>
                    </div>
                    <div class={styles.interests}>
                        <p>
                            I like soccer and volleyball, and I also like to watch movies and tv shows. I like 
                            writing about ideas and personal experiences. I also like to design houses, play games 
                            sometimes (LoL, Sims 4, & others) and I have played the piano growing up for more 
                            than 5 years.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;