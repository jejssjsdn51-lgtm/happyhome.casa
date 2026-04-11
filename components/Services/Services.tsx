import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    title: 'Rental Housing',
    image: 'https://img1.wsimg.com/isteam/ip/564ad386-2dce-463b-b5ef-d0c1d2f65615/Duck%20Pond%20Views.png/:/cr=t:1.87%25,l:0%25,w:100%25,h:96.26%25/rs=w:365,h:274,cg:true',
    description: "We have a home for you no matter your budget or situation. We provide exceptional customer service, a family-owned feel, and high-quality living experience. We take pride in maintaining our properties to high standards and providing hassle-free rental experiences.",
    buttonText: 'See Rentals',
    link: 'https://ffc1db98.app.doorloop.com/tenant-portal/rental-applications/listing?companyId=66887f1a34aa315271899ef7&source=CompanyLink'
  },
  {
    title: 'Roofing & Construction',
    image: 'https://img1.wsimg.com/isteam/ip/564ad386-2dce-463b-b5ef-d0c1d2f65615/WhatsApp%20Image%202023-04-28%20at%2005.34.16.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:365,h:274,cg:true',
    description: "With over 100 years of combined experience, we've been the go-to expert for quality roofing in Midland, Odessa, Big Spring, TX and surrounding areas. Catering to both residential and commercial properties.",
    buttonText: 'Get Your Roof Today',
    link: 'https://www.happyhomeroofers.com/'
  },
  {
    title: 'Find Your Forever Home',
    image: 'https://img1.wsimg.com/isteam/ip/564ad386-2dce-463b-b5ef-d0c1d2f65615/Living%20room-12a3265.jpg/:/cr=t:0%25,l:5.68%25,w:88.63%25,h:100%25/rs=w:365,h:274,cg:true',
    description: "We make home-ownership easy, providing modern & affordable homes to meet your needs. Most of our homes have a seller financing option. Looking for a second home? We also sell investment homes at big discounts.",
    buttonText: 'See Homes for Sale',
    link: 'https://investorlift.com/marketplace/company/2403'
  },
  {
    title: 'Sell Us Your Home',
    image: 'https://img1.wsimg.com/isteam/ip/564ad386-2dce-463b-b5ef-d0c1d2f65615/For%20Sale%20By%20Owner.png/:/cr=t:0%25,l:2.27%25,w:95.45%25,h:100%25/rs=w:365,h:274,cg:true',
    description: "Get a cash offer for your home. We help families by buying their homes no matter the situation. You won't need to pay agent fees or commissions out of pocket. Our offers are all cash, which means you can sell quickly and without making any repairs.",
    buttonText: 'Get Cash Offer',
    link: 'https://www.happyhomecashoffer.com/'
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>What We Offer</h2>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            
            <p className={styles.description}>
              {service.description}
            </p>
            
            <a href={service.link} target={service.link !== '#' ? "_blank" : undefined} rel={service.link !== '#' ? "noopener noreferrer" : undefined} className={styles.ctaButton}>
              {service.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
