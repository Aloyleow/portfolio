import { motion, Variants } from "motion/react"

const tagline = ["INNOVATE",  "COMPILE", "EXECUTE",];

const marqueeAnimateVar: Variants = {
  initial: {
    opacity: 1,
    x: -300,
  },
  animate: ({indexAnimate}: {indexAnimate: number}) => ({
    opacity: 1,
    x: 1500,
    transition: {
      delay: indexAnimate * 3.2,
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  })
};

const FooterMarquee = () => {

  return (
    <div className="footer-marquee-div1">
      {tagline.map((item, index) => (
        <motion.div
          key={index}
          className="footer-marquee-text"
          variants={marqueeAnimateVar}
          initial="initial"
          animate="animate"
          custom={{indexAnimate: index}}
        >
          <h1>{item}</h1>
        </motion.div>
      ))}
    </div>
  )
}

export default FooterMarquee