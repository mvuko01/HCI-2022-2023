import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const BlogSection = ({ title, cta_text, picture, date, author, id }) => {
    return (
        <>
        <div className={styles.blogsWrapper}>
            <div className={styles.miniBlogWrapper}>
            <Link href={`../blog/${id}`} className={styles.link}>
                <Image
                className={styles.blogPics}
                width={196}
                height={220}
                src={picture}
                alt="blog wrapper"
            />
            <div className={styles.miniBlogContentWrapper}>
                <p className={styles.title}>{title}</p>
                <p className={styles.ctaText}>{cta_text}</p>
                <div className={styles.writtenByDiv}>
                {/* <p className={styles.writtenByText}>Written by: &nbsp;</p>
                <p className={styles.writtenByText}>{author}</p> */}
                </div>
                <p className={styles.ctaText}>{date}</p>
            </div>
            </Link>
            </div>
        </div>
        </>
    );
};

export default BlogSection;