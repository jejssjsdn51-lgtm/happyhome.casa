'use client';

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Dynamic Background */}
      <div className={styles.heroBackground}>
        <Image
          src="/hero-bg.png"
          alt="Modern House Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.heroOverlay} />

      {/* Modern Header */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image 
            src="https://www.happyhome.casa/happyhomeie.png" 
            alt="Happy Home Logo" 
            width={100}
            height={100}
            className={styles.logo}
          />

        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>About Us</a>
          <a href="https://investorlift.com/marketplace/company/2403" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Buy</a>
          <a href="https://www.happyhomecashoffer.com/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Sell</a>
          <a href="https://ffc1db98.app.doorloop.com/tenant-portal/rental-applications/listing?companyId=66887f1a34aa315271899ef7&source=CompanyLink" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Rent</a>
          <a href="https://www.happyhomeroofers.com/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Build</a>
          <a href="#" className={styles.navLink}>Blogs</a>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </nav>
        <a href="tel:4322203532" className={styles.phoneButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
          <span className={styles.phoneText}>(432) 220-3532</span>
        </a>
      </header>

      {/* Hero Body */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.badgeLogoContainer}>
            <Image 
              src="https://www.happyhome.casa/happyhomelogo.png" 
              alt="Happy Home Main Logo" 
              width={400}
              height={120}
              className={styles.badgeLogo}
            />
          </div>
          
          <h1 className={styles.mainHeadline}>
            Your Permian Basin<br />Home Solution Company
          </h1>
          
          <p className={styles.description}>
            Providing families solutions to their home needs! Whether you're looking to buy, sell, rent or build, we can help. Locally and family-owned, we're dedicated to serving our community. Personalized service with a focus on you.
          </p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.formContainer}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/kDgXq9FwGcYtJyVC1m1s"
              style={{ width: '100%', height: '580px', border: 'none', borderRadius: '3px' }}
              id="inline-kDgXq9FwGcYtJyVC1m1s" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name=" Happyhome.casa Website Form"
              data-height="572"
              data-layout-iframe-id="inline-kDgXq9FwGcYtJyVC1m1s"
              data-form-id="kDgXq9FwGcYtJyVC1m1s"
              title=" Happyhome.casa Website Form"
            ></iframe>
            <Script 
              src="https://link.msgsndr.com/js/form_embed.js" 
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero;
