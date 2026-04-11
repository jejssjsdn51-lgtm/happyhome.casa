import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>The Happy Home Way</h2>
      <p className={styles.content}>
        We are your Permian Basin source for everything real estate. We have been 
        helping families find their home in the Permian for over 13 years. Need a 
        forever home, looking for a long-term rental, need to sell your home, or 
        looking to renovate your home?
      </p>

      <h3 className={styles.subTitle}>Local & Family Owned</h3>
      <p className={styles.content}>
        Our small business is local & family owned. We've been in your shoes, we live 
        where you live, we understand the pains related to housing in the Permian. 
        Our entire family is part of our business, from start of construction through the 
        leasing process. We walk it with you every step of the way.
      </p>

      <h3 className={styles.subTitle}>In House Teams</h3>
      <p className={styles.content}>
        Our in-house development team allows us to pass the cost savings to your 
        family. Our in-house property management team allows us to respond to your 
        inquiries and complete the rental process efficiently. Our in-house remodeling 
        team allows us to complete any renovation efficiently & at a low cost.
      </p>

      <h3 className={styles.subTitle}>We Own Our Homes</h3>
      <p className={styles.content}>
        We own all our homes. We don't depend on outside home owners. This 
        makes our decision making fast & efficient. No waiting on tired landlord or 
        penny pinching on repairs. We only offer homes and provide services that 
        meet our own standards.
      </p>

      <button className={styles.ctaButton}>
        Request More Info
      </button>
    </section>
  );
};

export default AboutSection;
