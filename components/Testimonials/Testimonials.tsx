import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Thompson',
    initials: 'ST',
    color: '#9c27b0', // Purple
    text: "I had an amazing experience buying my first home through happyhome.casa. The website was easy to navigate, and the team was so helpful throughout the entire process. They really listened to what I was looking for and made sure I found the perfect place. I couldn't be happier with my new home!"
  },
  {
    name: 'James Carter',
    initials: 'JC',
    color: '#00bcd4', // Teal
    text: "Selling my home was a breeze with happyhome.casa. The platform helped me connect with serious buyers quickly, and I got the right offer in just a few weeks. The team was professional and guided me through each step. Highly recommend it for anyone looking to sell!"
  },
  {
    name: 'Emily Rodriguez',
    initials: 'ER',
    color: '#cddc39', // Lime
    text: "Happyhome.casa made my renovation project so much easier to manage. They offered great resources and connected me with trusted contractors. From the design to the final touches, the process was smooth, and my house looks amazing. If you're planning a renovation, this is the place to go!"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>What our clients say</h2>
      
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            
            <p className={styles.content}>{t.text}</p>
            
            <div className={styles.author}>
              <div 
                className={styles.avatar} 
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <span className={styles.authorName}>{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
