// Footer.jsx
import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      id="footer"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} dark-theme`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's create something <br />
            extraordinary together.
          </span>
          <span className="primaryText">
            Reach out by{" "}
            <a href="mailto:jabinjun.providencia@sccpag.edu.ph">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Location</span>
            <p>Poblacion ,Dinas , Zamboanga Del Sur</p>
          </div>
          <ul className={css.menu}>
            <a href="https://github.com/JabinXD">
              <li>Github</li>
            </a>
            <a href="https://web.facebook.com/jabin.providencia/">
              <li>Facebook</li>
            </a>
            <a href="https://www.linkedin.com/in/jabin-providencia-099217166/">
              <li>LinkedIn</li>
            </a>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
