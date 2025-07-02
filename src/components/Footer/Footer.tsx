import React from 'react';
import { Github, Twitter, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.text}>
              Modern Leaderboard Component
            </p>
            <p className={styles.copyright}>
              © 2025 All rights reserved.
            </p>
          </div>
          
          <div className={styles.social}>
            <motion.a
              href="#"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="#"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter className={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="#"
              className={styles.socialLink}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Website"
            >
              <Globe className={styles.socialIcon} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;