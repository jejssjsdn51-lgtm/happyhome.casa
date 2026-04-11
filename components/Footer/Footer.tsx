"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Top Split CTA Bar */}
        <div className={styles.footerTopCta}>
          <div className={styles.ctaLeftBlue}>
            <div className={styles.ctaIconBox}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 9h8" /><path d="M8 13h6" />
              </svg>
            </div>
            <a href="mailto:rentals@happyhome.casa" className={styles.btnFooterWhite}>Contact us Now</a>
          </div>
          <div className={styles.ctaRightDark}>
            <div className={styles.ctaIconBox}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div className={styles.ctaPhoneInfo}>
              <span className={styles.ctaLbl}>CALL US AT</span>
              <a href="tel:4322203532" className={styles.ctaPhoneNum}>(432) 220-3532</a>
            </div>
          </div>
        </div>

        {/* Middle Footer Content */}
        <div className={styles.footerMainGrid}>
          {/* Info Column */}
          <div className={styles.footerColInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p>3301 Storey Ave Midland, TX 79703</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <p>rentals@happyhome.casa</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <p>(432) 220-3532</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <p><strong>Instagram:</strong> happyhome.casa</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </span>
              <p><strong>Facebook:</strong> Happy Home Cash Offer</p>
            </div>

          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColLinks}>
            <h4 className={styles.footerColTitle}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><a href="#">About Us</a></li>
              <li><a href="https://investorlift.com/marketplace/company/2403" target="_blank" rel="noopener noreferrer">Buy</a></li>
              <li><a href="https://www.happyhomecashoffer.com/" target="_blank" rel="noopener noreferrer">Sell</a></li>
              <li><a href="https://ffc1db98.app.doorloop.com/tenant-portal/rental-applications/listing?companyId=66887f1a34aa315271899ef7&source=CompanyLink" target="_blank" rel="noopener noreferrer">Rent</a></li>
              <li><a href="https://www.happyhomeroofers.com/" target="_blank" rel="noopener noreferrer">Build</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Brand/Logo Column */}
          <div className={styles.footerColBrand}>
            <div className={styles.footerBrandWrap}>
              <Image 
                src="https://www.happyhome.casa/happyhomelogo.png"
                alt="Happy Home Logo"
                width={300}
                height={100}
                className={styles.footerLogo}
                style={{ width: 'auto', height: '100px', filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottomBar}>
          <p className={styles.copyright}>© 2026 Powered By Happy Home. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
