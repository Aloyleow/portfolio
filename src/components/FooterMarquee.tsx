import { motion, Variants } from "motion/react"

const tagline = ["INNOVATE", "COMPILE", "EXECUTE"];

const marqueeAnimateVar: Variants = {
  animate: {
    opacity: 1,
    x: ["-100%", "120%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop"
    },
  },
};

const FooterMarquee = () => {

  return(
    <div className="footer-marquee-div1">
      <div className="footer-blur"></div>
      <div className="footer-blur footer-blurR"></div>
      <div className="footer-marquee-div2">
        {tagline.map((item, index) => (
          <motion.div
            key={index}
            variants={marqueeAnimateVar}
            whileInView="animate"
            style={{width: "30%"}}
          >
            <h1>{item}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FooterMarquee