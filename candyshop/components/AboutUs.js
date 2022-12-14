import Image from 'next/image'
import styles from '../styles/Home.module.css'

const AboutUs = () => {
    return (
        <section className={styles.AUWrapper}>
        <h1 className={styles.AUHeading}>ABOUT US</h1>
        <div className={styles.AUcontentWrapper}>
        <div className={styles.firstWrapper}>
            <Image
                            src={'/Image about 1.svg'}
                            alt="About us image 1"
                            width={300}
                            height={300}
                            className={styles.image1}
            />
            <p className={styles.text}>Candy shop sweet tradition is a one-stop destination for the sweet tooth. We offer a wide selection of premium-grade candy, from classic favorites like chocolate, gummies, and caramels to more unique and hard-to-find treats.</p>
        </div>
        <div className={styles.firstWrapper}>
            <p className={styles.text}>Our commitment to quality and customer service has earned us a reputation for being the best candy shop around. Whether you're looking for something special for a birthday or just want to indulge your sweet tooth, you'll find just what you're looking for in our candy shop.</p>
            <Image
                            src={'/Image about 2.svg'}
                            alt="About us image 2"
                            width={100}
                            height={100}
                            className={styles.image2}
            />
        </div>
        </div>
        </section>
    );
};
export default AboutUs;